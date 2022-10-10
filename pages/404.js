import Head from 'next/head';
import Image from 'next/image';
import { Router, useRouter } from 'next/router';

import Layout from '../components/layout';

import arrowforward from '../public/arrow-forward 2.svg';

import styles from '../styles/404.module.css';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
      <div>
        <Head>
          <title>Trinity Chapel Muranga</title>
          <meta name="description" content="Audaciously Impacting Lives" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.header}>
          <div className={styles.header_inner__container}>
            <h1 className={styles.title}>404</h1>
            <h5 className={styles.minititle}>Page not found</h5>
            <p className={styles.content}>
              Sorry we couldn’t find the page that you are looking for, we
              &apos;ll work on it
            </p>
            <button
              className={`${styles.site_button} button`}
              onClick={() => router.back()}
            >
              <span>Go back</span>
              <Image src={arrowforward} alt={'arrow forward'} />
            </button>
          </div>
        </header>
      </div>
    </Layout>
  );
}
