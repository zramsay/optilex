"use client";

import { useRouter } from "next/navigation";

const TokenTrials = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Token Trials</span>
            <span className="block text-4xl font-bold">Learn and Earn in Web3</span>
          </h1>
          <p className="text-center text-lg">
            An interactive educational game about crypto regulations. Earn CASE tokens as you play.
          </p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/token-trials/easy/1")}
              className="btn btn-primary text-lg text-black px-6 py-3 rounded-full"
            >
              Start Token Trials and Earn CASE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TokenTrials;
