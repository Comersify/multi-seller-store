import { ArrowDownIcon, ArrowUpIcon } from "@/components/shared/Icons";
import { Title } from "@/components/shared/Title";
import Head from "next/head";
import { useState } from "react";

const Question = ({ question, id, action }) => {
  return (
    <div
      onClick={() => action(id)}
      style={{ transition: " 0.1s" }}
      className={`cursor-pointer w-[500px] rounded-md ${
        question == id && "mb-4"
      } border border-gray-200 py-4 px-6 text-gray-900 shadow-sm`}
    >
      <div className="flex items-center justify-between">
        <p className="text-md font-bold">How can i get my monney back ?</p>
        <div className="p-[6px] hover:bg-gray-100 rounded-full">
          {question != id ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </div>
      </div>
      <p
        style={{ transition: " 0.2s" }}
        className={`mt-4 ${question != id && "hidden"} transition-shadow`}
      >
        lorem ipsum dollar something otherwise help fin ooutfite{" "}
      </p>
    </div>
  );
};

export default function FAQ() {
  const [question, setQuestion] = useState(null);
  const handleOpenQuestion = (id) => {
    if (question == id) setQuestion(null);
    else setQuestion(id);
  };
  return (
    <>
      <Head>
        <title>FAQ</title>
      </Head>
      <main className="h-[70vh] flex flex-col items-center mt-16 justify-start">
        <Title text={"FAQs"} />
        <div className="mt-6">
          <Question id={0} question={question} action={handleOpenQuestion} />
          <Question id={1} question={question} action={handleOpenQuestion} />
          <Question id={2} question={question} action={handleOpenQuestion} />
          <Question id={3} question={question} action={handleOpenQuestion} />
          <Question id={4} question={question} action={handleOpenQuestion} />
          <Question id={5} question={question} action={handleOpenQuestion} />
          <Question id={6} question={question} action={handleOpenQuestion} />
        </div>
      </main>
    </>
  );
}
