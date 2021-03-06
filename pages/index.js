import Head from "next/head";
import Image from 'next/image';
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EcoGames</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <div>
          <h5>0</h5>
          <Image src='/cart-icon.svg' width='30px' height='25px'/>
        </div>
      </main>
      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Filipe Camera</p>
      </footer>
    </div>
  );
}
