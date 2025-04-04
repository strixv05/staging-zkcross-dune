/* eslint-disable @next/next/no-img-element */
import React from "react";
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { SquareArrowOutUpRight } from "lucide-react";

const getExplorerUrl = (address: string, network: "ETH" | "BSC" | "POL" | "ARB" | "BASE" | "OP" | "AVA" | "PARTI" | "TEZO" | "STELLAR"): string => {
    const explorerUrls: { [key: string]: string } = {
        ETH: `https://etherscan.io/address/${address}`,
        BSC: `https://bscscan.com/address/${address}#tokentxns`,
        POL: `https://polygonscan.com/address/${address}`,
        ARB: `https://arbiscan.io/address/${address}`,
        BASE: `https://basescan.org/address/${address}`,
        OP: `https://optimistic.etherscan.io/address/${address}`,
        AVA: `https://snowtrace.io/address/${address}`,
        PARTI: `https://browser.partisiablockchain.com/contracts/${address}?tab=transactions`,
        TEZO: `https://tzkt.io/${address}/operations`,
        STELLAR: `https://stellar.expert/explorer/public/contract/${address}`,
    };

    return explorerUrls[network] || address;
};

const blockchains = [
    {
        name: "Hive zkCrossDEX",
        logo: "https://cryptologos.cc/logos/hive-hive-logo.png?v=040",
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://splinterlands.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://splinterlands.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Liquidity Pools</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xe434f06f44700a41fa4747be53163148750a6478", "BSC")} target="_blank" rel="noopener noreferrer">
                            SPS BSC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xe434f06f44700a41fa4747be53163148750a6478", "ETH")} target="_blank" rel="noopener noreferrer">
                            SPS ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x14ae856ab69f157f8ac05b8a1482d9c31478fb47", "BSC")} target="_blank" rel="noopener noreferrer">
                            DEC BSC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x14ae856ab69f157f8ac05b8a1482d9c31478fb47", "ETH")} target="_blank" rel="noopener noreferrer">
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
            </ul>
        ),
    },
    {
        name: "Tezos",
        logo: "https://cryptologos.cc/logos/tezos-xtz-logo.png?v=040",
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://bridge.dogami.com" target="_blank" rel="noopener noreferrer">
                        https://bridge.dogami.com
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Bridge Infra</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x03aC0cBa06b16eC79A4a5ea5949e47aE6C53ECd2", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x03aC0cBa06b16eC79A4a5ea5949e47aE6C53ECd2", "POL")} target="_blank" rel="noopener noreferrer">
                            Polygon
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("KT1ENtxQpJzr7MA3CqCNyEink6UT9Yd1f3jg", "TEZO")} target="_blank" rel="noopener noreferrer">
                            Tezos
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                </ul>
            </ul>
        ),
    },
    {
        name: "Partisia zkCrossDEX",
        logo: "https://assets.coingecko.com/coins/images/24898/large/Group_15910.png?1710864310",
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://partisia.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://partisia.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Bridge Infra</li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("027a0073c08310ea9a7d4e2bc8087bfac1d32a789b", "PARTI")} target="_target" rel="noopener noreferrer">
                        Partisia - Create pool
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("02d49eeeebbf51706a66e6b54de87f7af1100bfd0c", "PARTI")} target="_target" rel="noopener noreferrer">
                        Partisia on-chain swap - Liquidity pool
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 mt-3">EVM Lock to Partisia Deposit</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x80705283D1E2CaA3fB126f1262aeC6C260C7c205", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x80705283D1E2CaA3fB126f1262aeC6C260C7c205", "BSC")} target="_blank" rel="noopener noreferrer">
                            BSC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x80705283D1E2CaA3fB126f1262aeC6C260C7c205", "POL")} target="_blank" rel="noopener noreferrer">
                            POL
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                </ul>
                <li className="text-sm text-gray-400 mt-3">Partisia Lock to EVM</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("043b1822925da011657f9ab3d6ff02cf1e0bfe0146", "PARTI")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("04c73a37ec8db48b86a2d76c978d4117e2282017ec", "PARTI")} target="_blank" rel="noopener noreferrer">
                            ETH USDT
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("04bcac555ce8397e120384fad0e148793a19ed980f", "PARTI")} target="_blank" rel="noopener noreferrer">
                            POL
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("04adfe4aaacc824657e49a59bdc8f14df87aa8531a", "PARTI")} target="_blank" rel="noopener noreferrer">
                            POL USDC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("044bd689e5fe2995d679e946a2046f69f022be7c10", "PARTI")} target="_blank" rel="noopener noreferrer">
                            BNB
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    {/* <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("04c6f51974709939e7551e905d2d4b650ec9b9f192", "PARTI")} target="_blank" rel="noopener noreferrer">
                            WMPC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li> */}
                </ul>
                <li className="text-sm text-gray-400 mt-3">Partisia to EVM Withdraw</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xF393D008077c97F2632FA04a910969aC58f88E3C", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x74C0a1946d10FaF9048E9AC59D1401Bbbfc54cA4", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH USDT
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xe98670C2cBAfB2205BC99eBE33093233F7f07CC1", "POL")} target="_blank" rel="noopener noreferrer">
                            POL
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x4c4ECb1EFb3BC2a065af1F714B60980a6562C26f", "POL")} target="_blank" rel="noopener noreferrer">
                            POL USDC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x05Ee4Eee70452dD555Ecc3f997ea03C6fba29AC1", "BSC")} target="_blank" rel="noopener noreferrer">
                            BNB
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    {/* <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x36a0e44c73e5a6a7727817377c0127f320a9456e", "ETH")} target="_blank" rel="noopener noreferrer">
                            WMPC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li> */}
                </ul>
            </ul>
        ),
    },
    {
        name: "Stellar zkCrossDEX",
        logo: "https://cryptologos.cc/logos/stellar-xlm-logo.png?v=040",
        isInvert: true,
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://stellar.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://stellar.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Bridge Infra</li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("CA4KMAVQYUCKGS6C74HWN4M2VOLZJUAPK3DTHB5XJSHYAWHGLKJZYKDH", "STELLAR")} target="_blank" rel="noopener noreferrer">
                        Stellar Lock to EVM
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a
                        className="flex gap-2 items-center hover:text-gray-300 transition-all"
                        href="https://lab.stellar.org/endpoints/liquidity-pools?$=network$id=mainnet&label=Mainnet&horizonUrl=https:////horizon.stellar.org&rpcUrl=&passphrase=Public%20Global%20Stellar%20Network%20/;%20September%202015;;"
                        target="_target"
                        rel="noopener noreferrer"
                    >
                        Stellar on-chain - (Stellar Liquidity pools)
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 mt-3">EVM Lock to Stellar</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xbE121263691552E8a981a13FBeaB4FAf84FA6cdD", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xbE121263691552E8a981a13FBeaB4FAf84FA6cdD", "BSC")} target="_blank" rel="noopener noreferrer">
                            BSC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x21568459854Adcda462F6D9C11ce4F157Dc70f93", "POL")} target="_blank" rel="noopener noreferrer">
                            POL
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x21568459854Adcda462F6D9C11ce4F157Dc70f93", "ARB")} target="_blank" rel="noopener noreferrer">
                            ARB
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x19F3D4308E48a26F531D3235BE9aa1393E4Da194", "BASE")} target="_blank" rel="noopener noreferrer">
                            BASE
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x866d20476C1F85eAF2062c1303C201b2e08b8973", "OP")} target="_blank" rel="noopener noreferrer">
                            OP
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x19F3D4308E48a26F531D3235BE9aa1393E4Da194", "AVA")} target="_blank" rel="noopener noreferrer">
                            AVA
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                </ul>
            </ul>
        ),
    },
    {
        name: "Arbitrum zkCrossDEX",
        logo: "https://cryptologos.cc/logos/arbitrum-arb-logo.png?v=040",
        content: (
            <ul className="flex flex-col gap-1">
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href="https://arb.zkcross.exchange" target="_blank" rel="noopener noreferrer">
                        https://arb.zkcross.exchange
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm font-semibold text-gray-400 mt-3">Bridge Infra</li>
                <li className="text-sm text-gray-400 flex justify-center">
                    <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x21568459854Adcda462F6D9C11ce4F157Dc70f93", "ARB")} target="_blank" rel="noopener noreferrer">
                        Arbitrum on-chain and lock
                        <SquareArrowOutUpRight className="size-3" />
                    </a>
                </li>
                <li className="text-sm text-gray-400 mt-3">EVM Lock to Arbitrum</li>
                <ul className="grid grid-cols-3 [&>li]:px-2 [&>li]:border [&>li]:border-zinc-800 [&>li]:rounded">
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xbE121263691552E8a981a13FBeaB4FAf84FA6cdD", "ETH")} target="_blank" rel="noopener noreferrer">
                            ETH
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0xbE121263691552E8a981a13FBeaB4FAf84FA6cdD", "BSC")} target="_blank" rel="noopener noreferrer">
                            BSC
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x21568459854Adcda462F6D9C11ce4F157Dc70f93", "POL")} target="_blank" rel="noopener noreferrer">
                            POL
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x21568459854Adcda462F6D9C11ce4F157Dc70f93", "ARB")} target="_blank" rel="noopener noreferrer">
                            ARB
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x19f3d4308e48a26f531d3235be9aa1393e4da194", "BASE")} target="_blank" rel="noopener noreferrer">
                            BASE
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x866d20476C1F85eAF2062c1303C201b2e08b8973", "OP")} target="_blank" rel="noopener noreferrer">
                            OP
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                    <li className="text-sm text-gray-400 flex justify-center">
                        <a className="flex gap-2 items-center hover:text-gray-300 transition-all" href={getExplorerUrl("0x19f3d4308e48a26f531d3235be9aa1393e4da194", "AVA")} target="_blank" rel="noopener noreferrer">
                            AVA
                            <SquareArrowOutUpRight className="size-3" />
                        </a>
                    </li>
                </ul>
            </ul>
        ),
    },
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
                            "flex flex-col gap-3 items-center justify-start text-center px-4 w-full py-12 text-xl filter hover:brightness-110 transition-all duration-200 ease-in-out"
                        )}
                    >
                        <div className="flex gap-3 items-center justify-center mb-2">
                            <img src={item?.logo} alt={item?.name} className={cn("w-8 h-8", item?.isInvert && "filter invert")} />
                            <p>{item?.name}</p>
                        </div>
                        {item?.content}
                        <img
                            src={item?.logo}
                            alt={item?.name}
                            className={cn(
                                "absolute pointer-events-none select-none z-0 bottom-[-20%] left-[-10%] w-44 h-44 opacity-15 filter blur group-hover:scale-125 group-hover:left-[0%] group-hover:bottom-[-10%] transition-all duration-300",
                                item?.isInvert && "filter invert"
                            )}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Ecosystem;
