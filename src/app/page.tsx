/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import ReactLoading from "react-loading";
import MetricsGrid from "@/components/dashboard/MetricsGrid";
import GraphSection from "@/components/dashboard/GraphSection";
import { formattedDateMonth } from "@/utils";
import Ecosystem from "@/components/Ecosystem";

const Dashboard = () => {
    // Fetch overall stats
    const { isPending, error, data } = useQuery({
        queryKey: ["stats"],
        queryFn: () => fetch("https://api.zkcross.network/api/v1/stats/stats").then((res) => res.json()),
        staleTime: 60 * 1000,
    });
    const { isPending: isTvlPending, data: tvlData } = useQuery({
        queryKey: ["stats-tvl"],
        queryFn: () => fetch("https://api.zkcross.network/api/v1/stats/tvls").then((res) => res.json()),
        staleTime: 60 * 1000,
    });

    if (isPending && isTvlPending) return <ReactLoading type="bars" color="#818cf8" height={60} width={60} className="m-auto" />;
    if (error) return <div className="m-auto text-xl">An error occurred: {error.message}</div>;

    const statsData = { ...data?.stats, totalTvl: tvlData?.data };

    return (
        <div className="w-full container mx-auto py-4">
            {/* Header Banner */}
            <div className="w-full h-40 rounded-lg mb-6 mt-2 flex items-center justify-center bg-[url(https://gfa.nyc3.digitaloceanspaces.com/testapp/testdir/Banner-Dune.png)] bg-center bg-cover bg-no-repeat"></div>

            {/* Metrics Section */}
            <MetricsGrid statsData={statsData} />

            {/* Graph Sections */}
            <div className="mt-10 flex flex-col gap-6">
                <GraphSection
                    label="Transactions"
                    apiEndpoint="/api/v1/stats/transactions/graph"
                    dataMapping={(i: any) => ({
                        volume: i?.cumulativeTxnCount,
                        date: formattedDateMonth(i?.month, i?.year),
                    })}
                    hoverLabel="Transactions"
                    statsDate={statsData?.date}
                />
                <GraphSection
                    label="Total Revenue"
                    apiEndpoint="/api/v1/stats/revenue/graph"
                    dataMapping={(i: any) => ({
                        volume: i?.cumulativeRevenue,
                        date: formattedDateMonth(i?.month, i?.year),
                    })}
                    hoverLabel="Revenue"
                    statsDate={statsData?.date}
                />
                <GraphSection
                    label="Unique Active Wallets"
                    apiEndpoint="/api/v1/stats/user/graph"
                    dataMapping={(i: any) => ({
                        volume: i?.cumulativeUserCount,
                        date: formattedDateMonth(i?.month, i?.year),
                    })}
                    hoverLabel="User Count"
                    statsDate={statsData?.date}
                />
                <GraphSection
                    label="Volume"
                    apiEndpoint="/api/v1/stats/volume/graph"
                    dataMapping={(i: any) => ({
                        volume: i?.cumulativeVolume,
                        date: formattedDateMonth(i?.month, i?.year),
                    })}
                    hoverLabel="Volume"
                    statsDate={statsData?.date}
                />
            </div>

            {/* Ecosystem */}
            <Ecosystem />
        </div>
    );
};

export default Dashboard;
