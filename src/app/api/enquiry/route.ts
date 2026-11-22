import { NextResponse } from "next/server";
import { companyProfileSchema, enquirySchema } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { ok: false, error: "Invalid request payload." },
        { status: 400 }
      );
    }

    const raw = body as Record<string, unknown>;
    const formType = raw.formType === "company-profile" ? "company-profile" : "enquiry";

    // Honeypot spam trap: silently acknowledge without forwarding
    if (typeof raw.website_url === "string" && raw.website_url.trim().length > 0) {
      return NextResponse.json({ ok: true, id: "ignored" }, { status: 200 });
    }

    const parsed =
      formType === "company-profile"
        ? companyProfileSchema.safeParse(raw)
        : enquirySchema.safeParse(raw);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          error: "Please check the highlighted fields and try again.",
          issues: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const record = {
      ...parsed.data,
      submitted_at: parsed.data.submitted_at || new Date().toISOString(),
    };

    // Structured server log for audit / Netlify function logs
    console.info("[WEACT_ENQUIRY_LOG]", JSON.stringify(record));

    // Optional instant email dispatch via Resend when configured
    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.ENQUIRY_TO_EMAIL || "neeraj@weactglobal.com";
    const fromEmail = process.env.ENQUIRY_FROM_EMAIL || "enquiries@weactglobal.com";

    if (resendKey) {
      const subject =
        record.formType === "company-profile"
          ? `[WeAct Profile Download] ${record.company} — ${record.name}`
          : `[WeAct Enquiry] ${record.service} — ${record.company} (${record.name})`;

      const lines = [
        `Form: ${record.formType}`,
        `Name: ${record.name}`,
        `Company: ${record.company}`,
        `Role: ${record.role}`,
        `Phone: ${record.phone}`,
        record.formType === "enquiry" ? `Email: ${record.email}` : null,
        record.formType === "enquiry" ? `Service: ${record.service}` : null,
        record.formType === "enquiry" && record.message
          ? `Message: ${record.message}`
          : null,
        "",
        "--- Attribution (First-Touch Source Log) ---",
        `utm_source: ${record.utm_source || "(direct)"}`,
        `utm_medium: ${record.utm_medium || "-"}`,
        `utm_campaign: ${record.utm_campaign || "-"}`,
        `utm_content: ${record.utm_content || "-"}`,
        `landing_page: ${record.landing_page || "-"}`,
        `source_page: ${record.source_page || "-"}`,
        `referrer: ${record.referrer || "-"}`,
        `submitted_at: ${record.submitted_at}`,
      ].filter((line): line is string => line !== null);

      const emailRes = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: `WeAct Global Website <${fromEmail}>`,
          to: [toEmail],
          reply_to: record.formType === "enquiry" ? record.email : undefined,
          subject,
          text: lines.join("\n"),
        }),
      });

      if (!emailRes.ok) {
        console.error("[WEACT_ENQUIRY_EMAIL_ERROR]", await emailRes.text());
      }
    }

    return NextResponse.json({
      ok: true,
      submitted_at: record.submitted_at,
    });
  } catch (error) {
    console.error("[WEACT_ENQUIRY_ERROR]", error);
    return NextResponse.json(
      { ok: false, error: "Unable to process your request right now. Please call or message on WhatsApp." },
      { status: 500 }
    );
  }
}
