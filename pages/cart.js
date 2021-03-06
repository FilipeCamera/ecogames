import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import AppGamesContext from "../contexts";

export default function Cart() {
  const {
    product,
    frete,
    handleProduct,
    handleFrete,
    handleProdQuant,
    prodQuant,
  } = useContext(AppGamesContext);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);

  function removeCart(index) {
    const array = Array.from(product);
    array.splice(index, 1);
    handleProduct(array);
    handleProdQuant(prodQuant - 1);
    handleFrete(frete - 10);
  }
  useEffect(() => {
    let prodtotal = 0;
    product.map((item) => (prodtotal = prodtotal + item.price));
    setSubTotal(prodtotal);

    if (subTotal > 250) {
      handleFrete(0);
    } else {
      handleFrete(product.length * 10);
    }

    setTotal(subTotal + frete);
  }, [subTotal, frete, product]);
  return (
    <div className="md:content box-border w-full">
      <main className="bg-gray-800 h-4 p-6 flex flex-row justify-start items-center w-full text-white">
        <Link href="/">Home</Link>
      </main>
      <div className="flex flex-col">
        <h1 className="text-gray-900 font-sans font-bold text-2xl mt-12 ml-3">
          Cart
        </h1>
        {product.map((item, index) => (
          <div className="flex flex-col items-end m-3" key={index}>
            <button
              className="bg-none text-red-700 float-right mb-1 text-sm font-sans"
              onClick={() => removeCart(index)}
            >
              Remover
            </button>
            <div className="flex flex-row items-center justify-between w-full">
              <h4>{item.name}</h4>
              <p className="font-sans font-normal text-gray-800">
                R$ {item.price}
              </p>
            </div>
          </div>
        ))}
        <div className="flex flex-row items-center justify-between m-3">
          <h3 className="font-sans font-semibold text-gray-800 text-base">
            Subtotal:
          </h3>
          <p className="font-sans font-normal text-gray-800">
            R${subTotal.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between m-3">
          <h5 className="font-sans font-semibold text-gray-800 ml-5 text-sm">
            Frete:
          </h5>
          <p className="font-sans font-normal text-gray-800">
            R$ {frete.toFixed(2)}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between m-3">
          <h3 className="font-sans font-semibold text-gray-800 text-xl">
            Total:
          </h3>
          <p className="font-sans font-normal text-gray-800">
            R$ {total.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}
