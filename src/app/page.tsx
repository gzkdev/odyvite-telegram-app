// import Link from "next/link";
// import Image from "next/image";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex h-[100svh] w-full flex-col items-center justify-between pb-20 pt-8 text-center">
        {/* <div className="flex flex-col items-center text-center">
          <Image
            alt="Ithaca"
            src="/images/ithaca-logo.png"
            width={196}
            height={64}
            className="pointer-events-none translate-x-4"
          />
          <div className="text-shadow -translate-y-6 font-greek-freak text-3xl uppercase">
            Presents
          </div>
          <div className="text-shadow mt-12 max-w-96 font-greek-freak text-8xl">
            Odyssey of Fate
          </div>
        </div>

        <Link href="/prologue" className="fantasy p-3 text-3xl uppercase">
          Begin Trial
        </Link> */}
        <div>Ithaca Odyssey App</div>

        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus,
          iste qui. Id, quae laudantium? Aliquam vel ipsa esse nesciunt in!
        </div>

        <Button className="px-10 py-4 outline">Start Game </Button>
      </div>
    </>
  );
}
