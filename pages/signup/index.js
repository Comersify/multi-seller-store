import Head from "next/head";
import { SignUpForm } from "@/forms/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
      </Head>
      <SignUpForm />
    </>
  );
}
