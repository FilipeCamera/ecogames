import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AppGamesContext from "../contexts";

export default function Cart() {
  const { product, frete, handleFrete } = useContext(AppGamesContext);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    let prodtotal = 0
    product.map(item => prodtotal = prodtotal + item.price)
    setSubTotal(prodtotal)

    if(subTotal > 250) {
      handleFrete(0)
    }

    setTotal(subTotal + frete);
  }, [subTotal, frete])
  return (
    <div className="md:content box-border w-full">
      <main className="bg-gray-800 h-4 p-6 flex flex-row justify-start items-center w-full text-white">
        <Link href="/">Home</Link>
      </main>
      <div className="flex flex-col">
        <h1 className="text-gray-900 font-sans font-bold text-2xl mt-12 ml-3">
          Cart
        </h1>
        {product.map((item) => (
          <div className="flex flex-row items-center justify-between m-3">
            <button className='bg-none'>Remover</button>
            <h4>{item.name}</h4>
            <p className="font-sans font-normal text-gray-800">R$ {item.price}</p>
          </div>
        ))}
        <div className="flex flex-row items-center justify-between m-3">
          <h3 className="font-sans font-semibold text-gray-800 text-base">
            Subtotal:
          </h3>
          <p className="font-sans font-normal text-gray-800">R${subTotal}</p>
        </div>
        <div className="flex flex-row items-center justify-between m-3">
          <h5 className="font-sans font-semibold text-gray-800 ml-5 text-sm">
            Frete:
          </h5>
          <p className="font-sans font-normal text-gray-800">R$ {frete}</p>
        </div>
        <div className="flex flex-row items-center justify-between m-3">
          <h3 className="font-sans font-semibold text-gray-800 text-xl">
            Total:
          </h3>
          <p className="font-sans font-normal text-gray-800">R$ {total}</p>
        </div>
      </div>
    </div>
  );
}
