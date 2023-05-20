import Link from "next/link";
import { Input } from "@/forms/Input";
import { Title } from "@/components/shared/Title";
import { Button } from "@/components/shared/Buttons";

export const LoginForm = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[40rem]">
      <Title text="Login" emoji="&#x1F512;" />
      <form className="w-full mt-4 p-8 max-w-sm border rounded-lg border-gray-200">
        <div className="mb-4">
          <Input label="Username" type="text" placeholder="username" />
        </div>
        <div className="mb-6">
          <Input label="Password" type="password" placeholder="Password" />
        </div>
        <div className="flex items-center justify-between">
          <Button px="4">Sign In</Button>
          <Link
            className="align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <p className="text-gray-900 mt-4">
        You don't have an account
        <Link
          className="px-2 inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
          href="/signup"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};
