import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="after:bg-opaque fixed isolate flex h-full w-full flex-col items-center justify-between overflow-hidden bg-welcome bg-cover bg-center pb-20 pt-8 font-bold text-white after:absolute after:-z-10 after:h-full after:w-full">
      <div className="flex flex-col items-center text-center">
        <Image
          alt="Ithaca"
          src="/images/ithaca-logo.png"
          width={196}
          height={64}
          className="translate-x-4"
        />
        <div className="text-shadow -translate-y-6 font-greek-freak text-3xl uppercase">
          Presents
        </div>
        <div className="text-shadow mt-12 max-w-96 font-greek-freak text-8xl">
          Odyssey of Fate
        </div>
      </div>

      <Link href="/" className="fantasy p-3 text-3xl uppercase">
        Begin Trial
      </Link>
    </div>
  );
}
