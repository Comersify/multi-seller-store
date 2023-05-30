import Head from "next/head";
import { ProductItem } from "@/components/ProductCard";
import { CheckoutCard } from "./CheckoutCard";
import { useState } from "react";
import useWithAuth from "../_authRouter";
import { useCart } from "@/api/cart";

function Cart() {
  const { products, handleUpdate, handleDelete } = useCart();
  const [counter, setCounter] = useState({
    subTotal: 0,
    discount: 0,
    shipping: 0,
  });
  return (
    <>
      <Head>
        <title>My Cart</title>
      </Head>
      <main className="text-gray-900 md:px-16 px-4 py-10">
        <h1 className="text-4xl font-bold py-6 max-sm:px-2">Shopping Cart</h1>
        <div className="py-4 flex flex-wrap gap-y-2 px-0 justify-start">
          <div className="max-sm:flex max-sm:flex-wrap max-sm:gap-y-2 max-sm:justify-center">
            {products.map((product) => {
              setCounter({
                subTotal: counter.subTotal + product.price * product.quantity,
                discount:
                  counter.subTotal +
                  product.price -
                  (product.discount * product.price) / 100,
                shipping: counter.shipping,
              });
              return (
                <ProductItem
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  image={product.image}
                  name={product.name}
                  num={product.quantity}
                  price={
                    product.price - (product.discount * product.price) / 100
                  }
                />
              );
            })}
            <ProductItem
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              name={"Product Name"}
              discount={10}
              num={1}
              shipping={200}
              price={20}
              image={"https://via.placeholder.com/450"}
            />
            <ProductItem
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              name={"Product Name"}
              discount={10}
              num={1}
              price={20}
              image={"https://via.placeholder.com/450"}
            />
            <ProductItem
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              name={"Product Name"}
              discount={10}
              num={1}
              price={20}
              image={"https://via.placeholder.com/450"}
            />
            <ProductItem
              handleUpdate={handleUpdate}
              handleDelete={handleDelete}
              name={"Product Name"}
              discount={10}
              num={1}
              price={20}
              image={"https://via.placeholder.com/450"}
            />
          </div>
          <CheckoutCard {...counter} />
        </div>
      </main>
    </>
  );
}

export default useWithAuth(Cart);
