"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from the app router
import { Container } from "@/components/nextly-components/Container";
import Image from "next/image";
import AirtableModal from "@/components/nextly-components/AirtableModal"; // Import AirtableModal
import { useAccount } from "wagmi"; // Make sure to import useAccount

// Import your SVG images
import bitcoinLogo from "../../public/img/brands/bitcoin.svg";
import ethereumLogo from "../../public/img/brands/ethereum.svg";
import avalancheLogo from "../../public/img/brands/avalanche.svg";
import cardanoLogo from "../../public/img/brands/cardano.svg";
import solanaLogo from "../../public/img/brands/solana.svg";

export const Hero = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter(); // Initialize useRouter

  const { address: connectedAddress } = useAccount(); // Extract the connected wallet address

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const handleButtonClick1 = () => {
    if (connectedAddress) {
      // If wallet is connected, redirect to Token Trial
      router.push("/easy/1");
    } else {
      // Otherwise, alert user to connect their wallet
      alert("Please connect your wallet.");
    }
  };

  const handleButtonClick2 = () => {
    if (connectedAddress) {
      // If wallet is connected, redirect to Blanca
      router.push("Part_A/a1");
    } else {
      // Otherwise, alert user to connect their wallet
      alert("Please connect your wallet.");
    }
  };

  return (
    <>
      <Container className="flex flex-wrap justify-center items-center text-center">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-black lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
               Cryptolawyer.net
            </h1>
            
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl dark:text-gray-300">
              The legal support network for web3 companies
            </p>

            {/* Add Button to Launch Token Trials Academy */}
            <div>
              <button
                onClick={handleButtonClick1}
                className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-blue-700"
              >
                Resources
              </button>
            </div>
            <div>
              <button
                onClick={handleButtonClick2}
                className="mt-4 px-6 py-2 bg-yellow-500 text-black rounded-full hover:bg-blue-700"
              >
                Community
              </button>
            </div>
          </div>
        </div>
      </Container>

      
    </>
  );
};
