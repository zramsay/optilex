"use client";

import { useRouter } from "next/navigation";

const Seamlex = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Seamlex</span>
            <span className="block text-4xl font-bold">Operational Web3 Contracts, Simplified</span>
          </h1>
          <p className="text-center text-lg">
            Streamline your Web3 operations with a suite of customizable smart contracts.
          </p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Dynamic Smart Contracts</h2>
              <p>Governance, staking, token sales, and more.</p>
            </div>
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Legal Compliance by Design</h2>
              <p>Contracts that meet regulatory standards.</p>
            </div>
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Seamless Integration</h2>
              <p>Deploy with ease to save time and resources.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/purchase-seamlex")}
              className="btn btn-primary text-lg px-6 py-3 rounded-full"
            >
              Purchase Seamlex with CASE Tokens
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Seamlex;
