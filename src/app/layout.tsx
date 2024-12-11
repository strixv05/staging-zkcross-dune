import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const ibmFont = IBM_Plex_Sans({ weight: ["300", "400", "700", "600", "500"], subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn(ibmFont.className, "w-screen overflow-x-hidden dark")}>
                <Providers>
                    <div className="flex items-center justify-items-center min-h-screen w-screen bg-black text-white flex-col overflow-x-hidden">
                        <Header/>
                        <div className="w-screen flex flex-col overflow-x-hidden h-full flex-1">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
