import Head from "next/head";
import { Input } from "@/forms/Input";
import { Title } from "@/components/shared/Title";
import { Button } from "@/components/shared/Buttons";

export default function ContactUS() {
  return (
    <>
      <Head>
        <title>Contact Us</title>
      </Head>
      <main className="flex items-center justify-center p-16 h-[80vh]">
        <form className="w-[600px] flex flex-col items-center border border-gray-300 rounded-md pt-4 pb-12 px-16">
          <Title text={"Contact Us"} />
          <div className="mb-4 mt-4 w-full">
            <Input label={"Full Name"} type={"text"} />
          </div>
          <div className="mb-4 w-full">
            <Input label={"Email"} type={"email"} />
          </div>
          <div className="w-full mb-4 mt-2 ">
            <label className="block text-md text-gray-700 font-bold mb-2">
              Details
            </label>
            <textarea className="h-[180px] appearance-none focus:border-indigo-400 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
          </div>
          <Button px="12">Send</Button>
        </form>
      </main>
    </>
  );
}
