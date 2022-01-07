import Head from "next/head";
import { FC } from "react";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

type Props = {
  title?: string;
};

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {title && (
        <Head>
          <title>{title}</title>
        </Head>
      )}
      <Header />
      <div className="container mx-auto max-w-2xl py-4 flex-grow">
        <main>
          <h1
            className="font-bold text-6xl text-center text-red-600 p-4"
            style={{ fontFamily: "Nosifer" }}
          >
            ETHvil Bank
          </h1>
          <div className="my-4 space-y-8">{children}</div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
