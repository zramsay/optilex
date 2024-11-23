"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";
import { useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";

const ClaimCase = () => {
  const { address } = useAccount();
  const router = useRouter();

  const { data: caseTokenSymbol } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "symbol",
  });

  const { data: caseTokenBalance } = useScaffoldReadContract({
    contractName: "CaseToken",
    functionName: "balanceOf",
    args: [address],
  });

  const { writeContractAsync: writeVendorAsync } = useScaffoldWriteContract("Vendor");

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        {/* Optilex Title and Description (Not in a Box) */}
        <div className="px-5">
          <h1 className="text-center text-4xl font-bold">Optilex</h1>
          <p className="text-center text-lg mt-2">
            Automated Legal Resources for Web3 Platforms
          </p>
        </div>

        {/* Section: Earn CASE Tokens */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-accent border-8 border-accent rounded-xl p-6 mt-10 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">EARN CASE Tokens</h2>
          <p className="text-lg text-center mt-2">
            Complete tasks with the following tools to earn CASE tokens:
          </p>

          {/* Token Trials */}
          <div className="flex flex-col items-center bg-base-300 rounded-lg p-4 w-full mb-4">
            <h3 className="text-lg font-bold">Token Trials</h3>
            <p className="text-sm text-center">An educational game about the global crypto legal system.</p>
            <button
              className="btn btn-primary text-black mt-2"
              onClick={() => router.push("/token-trials")}
            >
              Start Token Trials
            </button>
          </div>

          {/* Blanca */}
          <div className="flex flex-col items-center bg-base-300 rounded-lg p-4 w-full">
            <h3 className="text-lg font-bold">Blanca</h3>
            <p className="text-sm text-center">Generate MiCA-compliant disclosures and earn CASE.</p>
            <button
              className="btn btn-primary text-black mt-2"
              onClick={() => router.push("/blanca")}
            >
              Launch Blanca
            </button>
          </div>
        </div>

        {/* Section: Purchase with CASE Tokens */}
        <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-accent border-8 border-accent rounded-xl p-6 mt-10 w-full max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold">GET Premium Tools</h2>
          <p className="text-lg text-center mt-2">
            Use your CASE tokens to unlock premium Web3 tools:
          </p>

          {/* Seamlex */}
          <div className="flex flex-col items-center bg-base-300 rounded-lg p-4 w-full mb-4">
            <h3 className="text-lg font-bold">Seamlex</h3>
            <p className="text-sm text-center">Comprehensive suite of operational Web3 contracts.</p>
            <button
              className="btn btn-primary text-black mt-2"
              onClick={() => router.push("/seamlex")}
            >
              Get Seamlex
            </button>
          </div>

          {/* Avert */}
          <div className="flex flex-col items-center bg-base-300 rounded-lg p-4 w-full">
            <h3 className="text-lg font-bold">Avert</h3>
            <p className="text-sm text-center">Risk management and compliance suite for Web3.</p>
            <button
              className="btn btn-primary text-black mt-2"
              onClick={() => router.push("/avert")}
            >
              Get Avert
            </button>
          </div>
        </div>

        {/* CASE Token Balance Display */}
        {caseTokenBalance && (
          <div className="text-center mt-6">
            <p>Your CASE Token Balance: {caseTokenBalance.toString()} {caseTokenSymbol}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default ClaimCase;
