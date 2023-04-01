type Props = {
  children: React.ReactNode;
};

export default function Main({ children }: Props) {
  return <main className="ml-0 md:ml-80 px-4 pb-20">{children}</main>;
}
