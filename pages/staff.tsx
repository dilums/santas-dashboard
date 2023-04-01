import SEO from "@/components/common/SEO";
import StaffList from "@/components/Staff";
export default function Staff() {
  return (
    <>
      <SEO title="Staff | Santa's Dashboard" slug="/staff" />
      <StaffList />
    </>
  );
}
