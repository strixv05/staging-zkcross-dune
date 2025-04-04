/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

const blockchains = [
    {
        name: "Hive zkCrossDEX",
        logo: "https://cryptologos.cc/logos/hive-hive-logo.png?v=040",
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://spliterlands.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://spliterlands.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Liquidity Pools</li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://bscscan.com/address/0xe434f06f44700a41fa4747be53163148750a6478#tokentxns" target="_blank" rel="noopener noreferrer">
                        SPS BSC
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://etherscan.io/address/0xe434f06f44700a41fa4747be53163148750a6478#tokentxns" target="_blank" rel="noopener noreferrer">
                        SPS ETH
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://bscscan.com/address/0x14ae856ab69f157f8ac05b8a1482d9c31478fb47#tokentxns" target="_blank" rel="noopener noreferrer">
                        DEC BSC
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://etherscan.io/address/0x14ae856ab69f157f8ac05b8a1482d9c31478fb47#tokentxns" target="_blank" rel="noopener noreferrer">
                        DEC ETH
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://api2.splinterlands.com/players/balances?username=zkcn-bsc" target="_blank" rel="noopener noreferrer">
                        HIVE BSC
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://api2.splinterlands.com/players/balances?username=zkcn-eth" target="_blank" rel="noopener noreferrer">
                        HIVE ETH
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
            </ul>
        ),
    },
    {
        name: "Tezos zkCrossDEX",
        logo: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=040",
        content: (
            <ul className="flex flex-col gap-1">
                {/* <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://spliterlands.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://spliterlands.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li> */}
                <li className="text-sm font-semibold text-gray-400 mt-3">Bridge Infra</li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://etherscan.io/address/0x03aC0cBa06b16eC79A4a5ea5949e47aE6C53ECd2" target="_blank" rel="noopener noreferrer">
                        ETH
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://polygonscan.com/address/0x03aC0cBa06b16eC79A4a5ea5949e47aE6C53ECd2" target="_blank" rel="noopener noreferrer">
                        Polygon
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://tzkt.io/KT1ENtxQpJzr7MA3CqCNyEink6UT9Yd1f3jg/operations" target="_blank" rel="noopener noreferrer">
                        Tezos
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
            </ul>
        ),
    },
    {
        name: "Partisia zkCrossDEX",
        logo: "https://assets.coingecko.com/coins/images/24898/large/Group_15910.png?1710864310",
    },
    { name: "Stellar zkCrossDEX", logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=040", isInvert: true },
    { name: "Arbitrum zkCrossDEX", logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=040" },
];

function Ecosystem() {
    return (
        <div className="mt-6 mb-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold">Ecosystem</h3>
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-full">
                {blockchains.map((item, index) => (
                    <Card
                        key={index}
                        aria-label={item?.name}
                        className={cn(
                            "relative group rounded-md border border-zinc-200 bg-white text-zinc-950 shadow dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-400 overflow-hidden",
                            "flex flex-col gap-3 items-center justify-center text-center px-4 w-full py-12 text-xl filter hover:brightness-110 transition-all duration-200 ease-in-out"
                        )}
                    >
                        <div className="flex gap-3">
                            <img src={item?.logo} alt={item?.name} className={cn("w-8 h-8", item?.isInvert && "filter invert")} />
                            <p>{item?.name}</p>
                        </div>
                        {item?.content}
                        <img
                            src={item?.logo}
                            alt={item?.name}
                            className={cn("absolute pointer-events-none select-none z-0 bottom-[-20%] left-[-10%] w-44 h-44 opacity-15 filter blur group-hover:scale-125 group-hover:left-[0%] group-hover:bottom-[-10%] transition-all duration-300", item?.isInvert && "filter invert")}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Ecosystem;
