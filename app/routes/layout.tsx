import { Outlet } from "react-router";
import { Header } from "~/components/layout/header";
import { Footer } from "~/components/layout/footer";
import { WhatsAppWidget } from "~/components/ui/whatsapp-widget";
import { ScrollProgress } from "~/components/ui/scroll-progress";

export default function SiteLayout() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Outlet />
      <Footer />
      <WhatsAppWidget />
    </>
  );
}
