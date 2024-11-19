"use client";

import { useAccount } from "wagmi";
import { useRouter } from "next/navigation";

const Home = () => {
  const { address: connectedAddress } = useAccount();
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Optilex</span>
            <span className="block text-4xl font-bold">Unlock Legal Innovation for Web3</span>
          </h1>
          <p className="text-center text-lg">Seamless Legal Services and Tools for Web3 Pioneers</p>
          <p className="text-center text-lg">Empowering compliance, security, and growth</p>
        </div>

        <div className="flex-grow w-full mt-16 px-8 py-12">
          {/* Main Resources Box */}
          <div className="flex flex-col items-center bg-base-100 shadow-lg shadow-accent border-8 border-accent rounded-xl p-6 w-full max-w-2xl mx-auto">
            <h2 className="text-xl font-bold">Resources</h2>
            <p className="text-lg mt-2">Access tools to accelerate Web3 platform success</p>
            <p className="text-lg">Use CASE tokens for secure and private access</p>
            <button
              onClick={() => router.push("/resources")}
              className="btn btn-primary text-black mt-4"
            >
              Explore Resources
            </button>
          </div>

          {/* Secondary CTAs as Buttons */}
          <div className="flex justify-center items-center gap-6 mt-10">
            <button
              onClick={() => router.push("/cryptolawyer")}
              className="btn btn-secondary text-lg text-black"
            >
              Community
            </button>
            <button
              onClick={() => router.push("/whitepaper")}
              className="btn btn-secondary text-lg text-black"
            >
              Whitepaper
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
