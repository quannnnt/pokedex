import Image from "next/image";
import { Pokedex } from './components/pokedex'

export default function Home() {

  return (
    <main className="w-screen h-full flex flex-col items-center text-white">
      <Pokedex />
    </main>
  );
}
