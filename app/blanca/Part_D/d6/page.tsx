"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function D6() {
  const [input, setInput] = useState('');
  const router = useRouter();

  const handleChange = (e) => setInput(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('d6Input', input);
    router.push('/blanca/Part_D/d7');
  };

  return (
    <div>
      <div className="max-w-2xl mx-auto mb-12">
        <h1 className="text-2xl font-semibold text-left">
          Information about the crypto-asset project, especially past and future milestones of the project
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            id="input-d-6"
            value={input}
            onChange={handleChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-black"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
