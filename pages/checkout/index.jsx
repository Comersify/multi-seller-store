import Head from "next/head";
import { PaymentCard } from "./PaymentCard";
import { PaymentForm } from "./PaymentForm";

function Checkout() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className="p-10 w-full text-gray-900">
        <h1 className="text-4xl mb-4">Pay Now</h1>
        <div className="flex flex-wrap justify-center items-center">
          <div className="mr-6 flex flex-col gap-6 max-sm:mr-0 mb-5">
            <PaymentCard
              /*             fullName={}
            address={}
            phoneNumber={}
            postalCode={} */
              active
            />
            <PaymentCard />
            <PaymentCard />
          </div>
          <PaymentForm />
        </div>
      </main>
    </>
  );
}
export default Checkout;
