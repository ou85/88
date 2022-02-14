import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/layout";

export default function Post() {
  return (
    <Layout>
      <Head>
        <title>TEACUP</title>
      </Head>
      <h1>Have a break?</h1>
      <p>Grab a cup.</p>
    </Layout>
  );
}
