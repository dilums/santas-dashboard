type Props = {
  ticked: boolean;
};

export default function Tick({ ticked }: Props) {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17 33.5L29 45.5L47 18.5"
        stroke={ticked ? "#20bf55" : "#edebea"}
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
