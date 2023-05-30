import Head from "next/head";
import { Input } from "@/forms/Input";
import { Button } from "@/components/shared/Buttons";
import { Title } from "@/components/shared/Title";
import { Table } from "@/components/Table";
import useWithAuth from "@/pages/_authRouter";
import { useGetOrders } from "@/api/order";

const TrackingPanel = () => {
  return (
    <div className="flex">
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center">
          <div className=" font-bold text-gray-950 bg-green-300 rounded-full px-4 py-2 ">
            1
          </div>
          <div className="bg-green-300 h-[6px] max-sm:w-[70px] w-[100px]"></div>
        </div>
        <p className="w-20 mt-2 text-sm">Shipped from the seller</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center">
          <div className="font-bold text-gray-950 bg-green-300 rounded-full px-4 py-2 ">
            2
          </div>
          <div className="bg-gray-200 h-[6px] max-sm:w-[70px] w-[100px]"></div>
        </div>
        <p className="w-20 mt-2 text-sm">Shipped from the seller</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center">
          <div className=" font-bold text-gray-950 bg-gray-200 rounded-full px-4 py-2 ">
            3
          </div>
          <div className="bg-gray-200 h-[6px] max-sm:w-[70px] w-[100px]"></div>
        </div>
        <p className="w-20 mt-2 text-sm">Shipped from the seller</p>
      </div>
      <div className="flex flex-col items-start justify-center">
        <div className="flex items-center">
          <div className=" font-bold text-gray-950 bg-gray-200 rounded-full px-4 py-2 ">
            4
          </div>
        </div>
        <p className="w-20 mt-2 text-sm">Shipped from the seller</p>
      </div>
    </div>
  );
};

const TrackingForm = () => {
  return (
    <div className="border shadow-md  border-gray-200 pb-16 pt-4 px-16 rounded-md">
      <Title text={"Track Your Orders "} />
      <div className="my-8 self-start flex items-end justify-between">
        <div className="w-full mr-4">
          <Input label="Tracking Code" type="text" />
        </div>
        <Button px="8">Track</Button>
      </div>
      <TrackingPanel />
    </div>
  );
};

function Orders() {
  const { orders } = useGetOrders();
  return (
    <>
      <Head>
        <title>My Orders</title>
      </Head>
      <main className="flex pt-16 min-h-[70vh]  w-full flex-col text-gray-900 items-center justify-center">
        <Title text="Manage Your Orders" />
        <div className="p-16 flex flex-wrap gap-16 items-center justify-center">
          <TrackingForm />
          <Table /* data={orders} */ />
        </div>
      </main>
    </>
  );
}

export default useWithAuth(Orders);
