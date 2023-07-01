import Head from "next/head";
import { SignUpForm } from "@/forms/SignUpForm";

export default function SignUp() {
  return (
    <>
      <Head>
        <title>Sign Up</title>
        <meta name="google-signin-client_id" content="626908472574-pkrn39o1ded5r8gi2guckphcnpimn4f1.apps.googleusercontent.com"></meta>
      </Head>
      <SignUpForm />
    </>
  );
}
