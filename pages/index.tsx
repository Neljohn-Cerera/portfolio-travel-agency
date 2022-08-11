import type { NextPage } from "next";
import Head from "next/head";
import Dashboard from "../src/components/dashboard";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Davao Travel Agency | Dashboard</title>
        <meta name="description" content="Nextjs TailwindCss Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard />
    </>
  );
};

export default Home;
