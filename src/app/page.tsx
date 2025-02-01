'use client'
import { Pacifico, Quicksand } from "next/font/google";
import Button from "./Button";

const handleClick = () => {
  console.log('Clicked')
}

const pacif = Pacifico({ weight: "400", subsets: ['latin'] });
const qs = Quicksand({ weight: "400", style: "normal", subsets: ['latin'] })
export default function Home() {
  return (
    <div className={`flex flex-col flex-grow-1 h-full`}>
      <header className={pacif.className}>
        Meat Metronome
      </header>
      <div className={`bg-red-300 border-4 border-white rounded-2xl flex flex-col w-1/2 h-3/4 ${qs.className} justify-center m-auto my-10 text-3xl p-10`}>
        Welcome to Meat Metronome. The tool to help you keep the beats of your meeting
        <div className="flex flex-row items-center justify-center m-10 justify-evenly">
          <Button text="Sign Up" onClick={handleClick}></Button>
          <Button text="Log In" onClick={handleClick}></Button>
        </div>
      </div>
    </div>
  );
}