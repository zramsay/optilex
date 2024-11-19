"use client";

import { useRouter } from "next/navigation";

const Avert = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Avert</span>
            <span className="block text-4xl font-bold">Proactive Risk Management for Web3</span>
          </h1>
          <p className="text-center text-lg">
            Manage your Web3 risks with confidence using Avert’s compliance and risk tools.
          </p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Automated Compliance</h2>
              <p>Track regulations in real-time.</p>
            </div>
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Risk Assessment Tools</h2>
              <p>Identify and mitigate threats.</p>
            </div>
            <div className="flex flex-col bg-base-300 px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl">
              <h2>Incident Response Protocols</h2>
              <p>Ensure quick and effective action.</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => router.push("/purchase-avert")}
              className="btn btn-primary text-lg px-6 py-3 rounded-full"
            >
              Purchase Avert with CASE Tokens
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Avert;
