import { Outlet } from "@tanstack/react-router";
import { WhatsappFloat } from "@/components/whatsapp-float";

export function RootApp() {
  return (
    <>
      <Outlet />
      <WhatsappFloat />
    </>
  );
}
