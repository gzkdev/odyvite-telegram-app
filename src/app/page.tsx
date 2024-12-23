// import Link from "next/link";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="after:bg-curtain relative left-0 isolate h-full bg-welcome bg-cover bg-center after:absolute after:top-0 after:-z-10 after:h-full after:w-full">
      <div className="max-w-screen-xs relative mx-auto flex h-full flex-col items-center justify-between px-6 pb-24 pt-8 font-greek-freak">
        {/* <div className="flex flex-col items-center text-center">
          <Image
            alt="Ithaca"
            src="/images/ithaca-logo.png"
            width={196}
            height={64}
            className="translate-x-4 translate-y-6"
          />

          <div className="text-shadow text-3xl uppercase">Presents</div>

          <div className="text-shadow mt-12 text-balance text-8xl">
            Odyssey of Fate
          </div>
        </div>

        <Link href="/" className="fantasy-btn p-3 text-3xl uppercase">
          Begin Trial
        </Link> */}
      </div>
    </div>
  );
}
