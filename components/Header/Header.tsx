export default function Header() {
  return (
    <div className="hidden md:block">
      <div
        className="h-32"
        style={{
          background: `#FFE6E5 url("https://res.cloudinary.com/ds574fco0/image/upload/v1671535323/live/santa-dashboard/bgx_nztbea.png")`,
        }}
      />
      <div
        className="h-8"
        style={{
          background:
            "linear-gradient(180deg, #FFE6E5 0%, rgba(255, 230, 229, 0) 100%)",
        }}
      />
    </div>
  );
}
