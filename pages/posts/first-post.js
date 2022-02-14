import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Your true value</title>
      </Head>
      <h1>Your true value</h1>
      <p>困難に遭遇した時こそ自分の 真価を知ろよい機会である</p>{" "}
      <p>
        When you encounter difficulties, it is a good opportunity to find out
        your true value.
      </p>
    </Layout>
  );
}
