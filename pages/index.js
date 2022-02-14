import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Learn how to have a cup of tea with Oldie</p>
        <p>
          (while building a personal website using{" "}
          <a href="https://nextjs.org/learn">Next.js</a>)
        </p>
        <div>
          <Link href="/posts/first-post">
            <a>Value</a>
          </Link>
        </div>
        <div>
          <Link href="/posts/post0001">
            <a>Just a post</a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
