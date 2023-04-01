import SEO from "@/components/common/SEO";
import NotificationsList from "@/components/Notifications";

export default function Notifications() {
  return (
    <>
      <SEO title="Notifications | Santa's Dashboard" slug="/notifications" />
      <NotificationsList />
    </>
  );
}
