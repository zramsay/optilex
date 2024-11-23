"use client";

import { useRouter } from "next/navigation";

const Blanca = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Blanca</span>
            <span className="block text-4xl font-bold">Your MiCA Compliance Companion</span>
          </h1>
          <p className="text-center text-lg">
            Generate MiCA-compliant disclosures with ease and earn CASE tokens.
          </p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/blanca/Part_A/a1")}
              className="btn btn-primary text-lg text-black px-6 py-3 rounded-full"
            >
              Launch Blanca and Earn CASE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blanca;
