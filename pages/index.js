import Head from "next/head";
import Image from 'next/image';

import Products from './api/products.json';

export default function Home() {
  return (
    <div>
      <Head>
        <title>EcoGames</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
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
      <div>
        {Products.map(item => (
          <div>
            <div>
              <Image src={`/${item.image}`} width='180px' height='180px'/>
            </div>
            <div>
              <div>
                <h4>{item.name}</h4>
              </div>
              <div>
                <h3>Preço: R$ {item.price}</h3>
                <p>Score: {item.score}</p>
              </div>
              <button>Adicionar ao carrinho</button>
            </div>
          </div>
        ))}
      </div>
      <footer>
        <p>EcoGames</p>
      </footer>
    </div>
  );
}
