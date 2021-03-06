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
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
          <div className={styles.boxProduct}>
            <div>
              <Image src={`/${item.image}`} width='180px' height='180px'/>
            </div>
            <div>
              <div>
                <h4 className={styles.productTitle}>{item.name}</h4>
              </div>
              <div>
                <h3 className={styles.productPreco}>Preço: R$ {item.price}</h3>
                <p className={styles.productScore}>Score: {item.score}</p>
              </div>
              <button className={styles.buttonAddCart}>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
      <footer className={styles.footer}>
        <p className={styles.footerTitle}>EcoGames</p>
      </footer>
    </div>
  );
}
