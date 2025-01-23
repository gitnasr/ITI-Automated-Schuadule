import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import moment from "moment-timezone";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ITI Intake 45 Schedule",
  description: "An Automated Service for ITI Intake 45 Schedule",
  applicationName:"mySchedule",
  manifest: "/manifest.ts",
  
 
};
moment.tz.setDefault("Africa/Cairo");
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <footer className='text-center text-sm font-black font-mono fixed bottom-5 left-0 right-0'>
				<span>Made with ❤️ @ ITI Alexandria Labs by</span>
				<a
					className=' decoration-sky-500 underline decoration-2	 ml-1'
					href='https://github.com/gitnasr'
					referrerPolicy='no-referrer'
					target='_blank'>
					NASR
				</a>

        <span className='mx-1'>| <a className="underline decoration-white "
        referrerPolicy='no-referrer'
					target='_blank'
          href="https://docs.google.com/spreadsheets/d/15niRN3yDfeglOy4UPiYB7UrpOxhp83slN4BJcD2HAvs"
        
        >Sheet URL</a></span>
			</footer>
      </body>
    </html>
  );
}
