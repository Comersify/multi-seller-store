import { Title } from "@/components/Title";
import Link from "next/link";
import { Input } from "./Input";

export const SignUpForm = () => {
  return (
    <div class="flex flex-col justify-center items-center h-[45rem] w-[50rem]">
      <Title text="Sign Up" />
      <form class=" mt-4 p-8 border rounded-lg border-gray-200 w-[30rem]">
        <div class="mb-4 flex justify-between">
          <Input label="First Name" type="text" />
          <span className="p-4"></span>
          <Input label="Last Name" type="text" />
        </div>
        <div class="mb-4">
          <Input label="Email" type="email" />
        </div>
        <div class="mb-4">
          <Input type="password" label="Password" />
        </div>
        <div class="mb-6">
          <Input type="password" label="Confirm Password" />
        </div>
        <div class="flex w-full justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
