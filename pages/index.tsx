import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../src/components/dashboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Next JS Tailwind Templates</title>
        <meta name="description" content="Nextjs TailwindCss Template" />
        <link rel="icon" href="/favicon.ico" />
        <Dashboard />
      </Head>
    </>
  );
};

export default Home;
