import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AppGamesContext from "../contexts";

import Products from "./api/products.json";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function loadProducts(){
      const resp = Products;
      setProducts(resp);
    }
    loadProducts();
  }, [])
  const {
    product,
    handleProduct,
    prodQuant,
    handleProdQuant,
    frete,
    handleFrete,
  } = useContext(AppGamesContext);

  function addCart(data) {
    handleProduct([...product, data]);
    handleProdQuant(prodQuant + 1);
    handleFrete(frete + 10);
  }

  function Filter(type){
    if(type === 'alfabetica'){
      const newProducts = Array.from(products);
      newProducts.sort(function compare(a, b) {
        if(a.name.substr(0) > b.name.substr(0)){
          return 1
        }
        if(a.name.substr(0) < b.name.substr(0)){
          return -1
        }
        return 0
      })
      setProducts(newProducts);
    }
    if(type === 'preco'){
      const newProducts = Array.from(products);
      newProducts.sort(function compare(a, b) {
        if(a.price > b.price){
          return 1
        }
        if(a.price < b.price){
          return -1
        }
        return 0
      })
      setProducts(newProducts);
    }
    if(type === 'score'){
      const newProducts = Array.from(products);
      newProducts.sort(function compare(a, b) {
        if(a.score < b.score){
          return 1
        }
        if(a.score > b.score){
          return -1
        }
        return 0
      })
      setProducts(newProducts);
    }
  }
  return (
    <div className="md:content box-border w-full">
      <Head>
        <title>EcoGames</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main className="bg-gray-800 h-4 p-6 flex flex-row justify-end items-center fixed w-full z-10">
        <div className="flex flex-row justify-center items-center">
          <h5 className="mr-2 font-sans font-semibold text-white">
            {prodQuant}
          </h5>
          <Link href="/cart">
            <Image
              src="/cart-icon.svg"
              width="30px"
              height="25px"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </main>
      <div className="pt-12 flex flex-col justify-center items-center">
        <h5 className="font-sans font-semibold text-gray-700 my-4 mx-auto">
          Filtrar por
        </h5>
        <div className="flex flex-row justify-around items-center w-full">
          <button onClick={() => Filter('alfabetica')} className="focus:bg-blue-500 hover:bg-blue-500 focus:text-white hover:text-white py-4 px-2 rounded">
            Ordem alfabética
          </button>
          <button onClick={() => Filter('preco')} className="focus:bg-blue-500 hover:bg-blue-500 focus:text-white hover:text-white py-4 px-2 rounded">
            Preço
          </button>
          <button onClick={() => Filter('score')} className="focus:bg-blue-500 hover:bg-blue-500 focus:text-white hover:text-white py-4 px-2 rounded">
            Popularidade
          </button>
        </div>
      </div>
      <div className="flex flex-col">
        {products.map((item) => (
          <div
            className="my-4 flex flex-row items-center border rounded mx-5 p-4"
            key={item.id}
          >
            <div>
              <Image src={`/${item.image}`} width="180px" height="180px" />
            </div>
            <div>
              <div>
                <h4 className="font-sans font-medium mb-2 text-gray-800">
                  {item.name}
                </h4>
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg text-gray-900">
                  Preço: R$ {item.price}
                </h3>
                <p className="font-sans font-light text-sm text-gray-700">
                  Score: {item.score}
                </p>
              </div>
              <button
                className="mt-2 flex items-center justify-center bg-blue-700 hover:bg-blue-800 p-2 rounded font-semibold text-sm text-white"
                onClick={() => addCart({ name: item.name, price: item.price })}
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
      <footer className="flex items-center justify-center bg-gray-800 p-4 text-white">
        <p className="font-normal text-sm">EcoGames</p>
      </footer>
    </div>
  );
}
