import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Dashboard from "../src/components/Dashboard";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dewas - Corona Dashboard</title>
        <meta
          name="description"
          content="Get COVID stats for the city Dewas, Madhya Pradesh"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <main>
        <Dashboard />
      </main>
    </div>
  );
}
