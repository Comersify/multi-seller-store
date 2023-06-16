import Head from "next/head";
import { ProductItem } from "@/components/ProductCard";
import { CheckoutCard } from "@/components/CheckoutCard";
import useWithAuth from "../_authRouter";
import { useCart } from "@/api/cart";
import { discountCalc } from "@/utils/utils";
import { useRouter } from "next/router";

function Cart() {
  const { products, handleUpdate, handleDelete, setRefresh } = useCart();
  const router = useRouter();
  return (
    <>
      <Head>
        <title>My Cart</title>
      </Head>
      <main className="text-gray-900 md:px-16 py-10">
        <h1 className="text-4xl font-bold py-6 px-4 max-sm:px-2">
          Shopping Cart
        </h1>
        {products?.orders?.length <= 0 ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <p className="text-gray-500 mb-5 text-xl font-bold mt-56">
              Your shopping cart is empty
            </p>
            <button
              onClick={() => router.push("/products")}
              className="px-6 py-[8px] rounded-md bg-blue-500 text-white font-bold"
            >
              Browse Products
            </button>
          </div>
        ) : (
          <div className="py-4 flex flex-wrap gap-y-2 px-0 justify-center">
            <div className="max-sm:flex border justify-center rounded-md max-sm:overflow-visible max-sm:border-none max-sm:h-full h-[63.5vh] overflow-y-auto overflow-x-hidden max-sm:flex-wrap max-sm:gap-y-1 max-sm:justify-start">
              {products?.orders?.map((order) => {
                return (
                  <ProductItem
                    key={order.id}
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
                      discountCalc(
                        order.product__price,
                        order.product__discount
                      )
                    }
                    priceBeforeDiscount={order.product__price}
                  />
                );
              })}
            </div>
            <CheckoutCard
              refresh={setRefresh}
              usedCoupons={products?.coupons}
              discount={products?.checkout?.discount?.toFixed(2)}
              subTotal={products?.checkout?.sub_total?.toFixed(2)}
              total={products?.checkout?.total?.toFixed(2)}
            />
          </div>
        )}
      </main>
    </>
  );
}

export default useWithAuth(Cart);
