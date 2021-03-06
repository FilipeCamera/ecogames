import Head from "next/head";
import Image from 'next/image';
import styles from "../styles/Home.module.css";

import Products from './api/products.json';

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
      <main className={styles.main}>
        <div className={styles.boxCart}>
          <h5 className={styles.cartValue}>0</h5>
          <Image src='/cart-icon.svg' width='30px' height='25px'/>
        </div>
      </main>
      <div>
        {Products.map(item => (
          <div>
            <div>
              <Image src={`/${item.image}`} width='150px' height='120px'/>
            </div>
            <div></div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerTitle}>Filipe Camera</p>
      </footer>
    </div>
  );
}
