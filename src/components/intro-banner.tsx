import Image from "next/image";

type IntroBannerProps = {
  showBanner: boolean;
  setShowBanner: (value: boolean) => void;
};

export default function IntroBanner({
  setShowBanner,
  showBanner,
}: IntroBannerProps) {
  if (!showBanner) return null;

  return (
    <div className="after:bg-curtain fixed left-0 isolate z-20 h-full bg-welcome bg-cover bg-center after:absolute after:top-0 after:-z-10 after:h-full after:w-full">
      <div className="max-w-screen-xs relative mx-auto flex h-full flex-col items-center justify-between px-6 pb-24 pt-8 font-greek-freak">
        <div className="flex flex-col items-center text-center">
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

        <button
          onClick={() => setShowBanner(false)}
          className="fantasy-btn p-3 text-3xl uppercase"
        >
          Begin Trial
        </button>
      </div>
    </div>
  );
}
