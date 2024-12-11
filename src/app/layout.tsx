import "./globals.css";
import Providers from "./providers";
import { ReactNode } from "react";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Header from "@/components/Header";

const ibmFont = IBM_Plex_Sans({ weight: ["300", "400", "700", "600", "500"], subsets: ["latin"] });

export const metadata = {
    title: "zkCross Network | Stats Dashboard",
    description: "Official zkCross Stats Dune Dashboard v1",
    icons: { icon: "https://zkcross.network/Logo.png" },
    keywords: ["Blockchain", "DeFi", "Cross-chain Swap", "Crypto"],
    metadataUrl: new URL("https://zkcross.network/"),
    openGraph: {
        title: "zkCross Network: Pioneering DeFi Interoperability",
        url: "https://zkcross.network/",
        description: "zkCross Network is a cross-chain interoperability protocol & DeFi Infra provider powering one-click liquidity transfer across blockchains.",
        images: "https://zkcross.nyc3.cdn.digitaloceanspaces.com/link_preview.png",
        imageWidth: "1200",
        imageHeight: "750",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        url: "https://zkcross.network/",
        title: "zkCross Network: Pioneering DeFi Interoperability",
        description: "zkCross Network is a cross-chain interoperability protocol & DeFi Infra provider powering one-click liquidity transfer across blockchains.",
        images: "https://zkcross.nyc3.cdn.digitaloceanspaces.com/link_preview.png",
    },
};

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
                        <Header />
                        <div className="w-screen flex flex-col overflow-x-hidden h-full flex-1">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}
