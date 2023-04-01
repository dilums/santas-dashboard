import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Main from "@/components/Main";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Sidebar />

      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}
