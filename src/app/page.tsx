"use client";

import IntroBanner from "@/components/intro-banner";
import { useState } from "react";

export default function Home() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <IntroBanner setShowBanner={setShowBanner} showBanner={showBanner} />
      <div className="after:bg-curtain relative left-0 isolate z-10 h-full bg-welcome bg-cover bg-center after:absolute after:top-0 after:-z-10 after:h-full after:w-full">
        <div className="max-w-screen-xs relative mx-auto flex h-full flex-col items-center justify-between px-6 pb-24 pt-8 font-greek-freak"></div>
      </div>
    </>
  );
}
