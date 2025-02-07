"use client";

import { useEffect, useState } from "react";

import { getMessage, getMessages } from "./api/getMessage";

import PostType from "./Interfaces/Post";

import Image from "next/image";
import { Spinner } from "flowbite-react";
import { ETIBCard } from "./Components/ETIBCard";
import { Poster } from "./Components/Poster";


export default function Home() {
  const [messages, setMessages] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      await getMessages().then((res) => setMessages(res.reverse()));
    };
    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <span className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 bg-white p-4 w-[50%]">
          <Poster />
        </span>
        {
          messages.length > 0
            ? messages.map((message: any, index: number) => {
              console.log(message);
              return <ETIBCard key={index} content={message.message.content} date={new Date(message.message.date)} />;
            })
            :
            <Spinner aria-label="Default status example" />
        }
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
