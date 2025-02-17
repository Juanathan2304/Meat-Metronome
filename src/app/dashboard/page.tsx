'use client'
import { Pacifico, Quicksand } from "next/font/google";
import Button from "../Button";
import { get } from "http";

const handleClick = async () => {
  await fetch ("/api/GenerateRoomCode",{});
}

const pacif = Pacifico({ weight: "400", subsets: ['latin'] });
const qs = Quicksand({ weight: "400", style: "normal", subsets: ['latin'] })
export default function Home() {
  return (
    <div className={`flex flex-col grow` }>
      <div className={`bg-red-300 border-8 border-white rounded-2xl flex flex-col w-1/2 h-1/2 ${pacif.className} justify-center m-auto p-10`}>
      <div className="flex-grow flex flex-col justify-center text-6xl greeting text-center ">
          <p>Welcome to Meat Metronome. The tool to help you keep the <span className="text-red-600 pun">beats</span> of your "<span className="text-red-600 pun">meating</span>".</p>
        </div>
        <div className="flex flex-row py-4 items-center justify-center justify-evenly text-3xl">
          <Button text="Sign Up" onClick={handleClick}></Button>
          <Button text="Log In" onClick={handleClick}></Button>
        </div>
      </div>
    </div>
  );
}