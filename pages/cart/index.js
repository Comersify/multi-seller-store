import Head from "next/head";
import { ProductItem } from "@/components/ProductCard";
import { CheckoutCard } from "./CheckoutCard";
import useWithAuth from "../_authRouter";
import { useCart } from "@/api/cart";
import { discountCalc } from "../utils";
function Cart() {
  const { products, handleUpdate, handleDelete } = useCart();
  if (products.length <= 0) return <p>Loading</p>;
  return (
    <>
      <Head>
        <title>My Cart</title>
      </Head>
      <main className="text-gray-900 md:px-16 py-10">
        <h1 className="text-4xl font-bold py-6 px-4 max-sm:px-2">
          Shopping Cart
        </h1>
        <div className="py-4 flex flex-wrap gap-y-2 px-0 justify-start">
          <div className="max-sm:flex max-sm:flex-wrap max-sm:gap-y-1 max-sm:justify-start">
            {products?.orders?.map((order) => {
              return (
                <ProductItem
                  id={order.id}
                  productID={order.product__id}
                  handleUpdate={handleUpdate}
                  handleDelete={handleDelete}
                  image={order.product__image}
                  name={order.product__title}
                  num={order.quantity}
                  discount={order.product__discount}
                  pack={order.pack__title}
                  price={
                    order.product__price -
                    discountCalc(order.product__price, order.product__discount)
                  }
                />
              );
            })}
          </div>
          <CheckoutCard
            usedCoupons={products?.coupons}
            discount={products?.orders?.reduce(
              (accumulator, currentObject) =>
                accumulator +
                discountCalc(
                  currentObject.product__price,
                  currentObject.product__discount
                ),
              0
            )}
            subTotal={products?.orders?.reduce(
              (accumulator, currentObject) =>
                accumulator + currentObject.product__price,
              0
            )}
          />
        </div>
      </main>
    </>
  );
}

export default useWithAuth(Cart);
