import SEO from "@/components/common/SEO";
import TodosList from "@/components/Todos";

export default function Todos() {
  return (
    <>
      <SEO title="Todos | Santa's Dashboard" slug="/todos" />
      <TodosList />
    </>
  );
}
