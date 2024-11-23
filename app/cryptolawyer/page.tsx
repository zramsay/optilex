"use client";

import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center flex-col flex-grow pt-10">
        <div className="px-5">
          <h1 className="text-center">
            <span className="block text-2xl mb-2">Cryptolawyer</span>
            <span className="block text-4xl font-bold">Join the Global Web3 Legal Network</span>
          </h1>
          <p className="text-center text-lg">
            A community of can-do legal experts dedicated to innovation, results, and the success of Web3 projects.
          </p>
        </div>

        <div className="flex-grow bg-base-100 w-full mt-16 px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            {/* First CTA: Join as a Legal Expert */}
            <div
              onClick={() => router.push("/join-lawyer")}
              className="flex flex-col bg-accent px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl cursor-pointer"
            >
              <h2>For Lawyers</h2>
              <p>Expand your practice, gain Web3 expertise, and collaborate globally.</p>
            </div>

            {/* Second CTA: Offer Technical Support */}
            <div
              onClick={() => router.push("/join-technical-support")}
              className="flex flex-col bg-accent px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl cursor-pointer"
            >
              <h2>For Technical Support Services</h2>
              <p>Provide cutting-edge solutions for Web3 legal and compliance needs.</p>
            </div>

            {/* Third CTA: Find a Legal Professional */}
            <div
              onClick={() => router.push("/find-lawyer")}
              className="flex flex-col bg-accent px-10 py-10 text-center font-bold text-lg text-base-100 items-center max-w-xs rounded-3xl cursor-pointer"
            >
              <h2>For Claimants</h2>
              <p>Access the legal expertise you need to succeed in Web3 disputes and compliance.</p>
            </div>
          </div>
        </div>

        <div className="mt-10 px-5">
          <p className="text-center text-lg">
            By learning about crypto assets, regulations, and actively participating in our community, you can earn <strong>CASE tokens</strong>.
          </p>
          <p className="text-center text-lg mt-2">
            Use these tokens to access premium products and services within the Cryptolawyer network, empowering your journey in Web3.
          </p>
          <p className="text-center mt-6">
            <button
              onClick={() => router.push("/join")}
              className="bg-primary text-base-100 px-6 py-3 rounded-full text-lg font-bold"
            >
              Join the Network Today
            </button>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
