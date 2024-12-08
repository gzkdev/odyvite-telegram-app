import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const augusta = localFont({
  src: "./fonts/Augusta.ttf",
  variable: "--font-augusta",
});

const gemfontOne = localFont({
  src: "./fonts/GemFont One.ttf",
  variable: "--font-gemfont-one",
});

const greekFreak = localFont({
  src: "./fonts/Greek-Freak.ttf",
  variable: "--font-greek-freak",
});

const greekRegular = localFont({
  src: "./fonts/Greek-Regular.ttf",
  variable: "--font-greek-regular",
});

const xtra = localFont({
  src: "./fonts/Xtra.ttf",
  variable: "--font-xtra",
});

export const metadata: Metadata = {
  title: "Odyvite App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${augusta.variable} ${gemfontOne.variable} ${greekFreak.variable} ${greekRegular.variable} ${xtra.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
