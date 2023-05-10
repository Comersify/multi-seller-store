import Link from "next/link";
import { Input } from "./Input";
import { Title } from "@/components/Title";

export const LoginForm = () => {
  return (
    <div class="flex flex-col justify-center items-center h-[45rem]">
      <Title text="Login" emoji="&#x1F512;" />
      <form class="w-full mt-4 p-8 max-w-sm border rounded-lg border-gray-200">
        <div class="mb-4">
          <Input label="Username" type="text" placeholder="username" />
        </div>
        <div class="mb-6">
          <Input label="Password" type="password" placeholder="Password" />
        </div>
        <div class="flex items-center justify-between">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <Link
            class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-gray-900 mt-4">
        You don't have an account
        <Link
          class="px-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/signup"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
