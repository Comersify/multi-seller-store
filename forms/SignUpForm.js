import { Title } from "@/components/shared/Title";
import Link from "next/link";
import { Input } from "./Input";

export const SignUpForm = () => {
  return (
    <div className="flex p-4 flex-col justify-center items-center h-[40rem] ">
      <Title text="Sign Up" />
      <form className=" mt-4 py-8 px-16  border rounded-lg border-gray-200 w-[30rem]">
        <div className="mb-4 block md:flex justify-between">
          <Input label="First Name" type="text" />
          <span className="px-4"></span>
          <Input label="Last Name" type="text" />
        </div>
        <div className="mb-4">
          <Input label="Email" type="email" />
        </div>
        <div className="mb-4">
          <Input type="password" label="Password" />
        </div>
        <div className="mb-6">
          <Input type="password" label="Confirm Password" />
        </div>
        <div className="flex w-full justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
      <Link
        className="mt-4 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
        href="/login"
      >
        Already have an account?
      </Link>
    </div>
  );
};
