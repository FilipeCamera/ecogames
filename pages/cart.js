import Link from "next/link";

export default function Cart() {
  return (
    <div className="md:content box-border w-full">
      <main className="bg-gray-800 h-4 p-6 flex flex-row justify-start items-center w-full text-white">
        <Link href="/">Home</Link>
      </main>
      <div className='flex flex-col'>
        <h1 className='text-gray-900 font-sans font-bold text-2xl mt-12 ml-3'>Cart</h1>
        <div className='flex flex-row items-center justify-between m-3'>
          <h4></h4>
          <p className='font-sans font-normal text-gray-800'></p>
        </div>
        <div className='flex flex-row items-center justify-between m-3'>
          <h3 className='font-sans font-semibold text-gray-800 text-base'>Subtotal:</h3>
          <p className='font-sans font-normal text-gray-800'>R$ 200,00</p>
        </div>
        <div className='flex flex-row items-center justify-between m-3'>
          <h5 className='font-sans font-semibold text-gray-800 ml-5 text-sm'>Frete:</h5>
          <p className='font-sans font-normal text-gray-800'>R$ 200,00</p>
        </div>
        <div className='flex flex-row items-center justify-between m-3'>
          <h3 className='font-sans font-semibold text-gray-800 text-xl'>Total:</h3>
          <p className='font-sans font-normal text-gray-800'>R$ 200,00</p>
        </div>
      </div>
    </div>
  );
}
