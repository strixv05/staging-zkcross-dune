/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import MetricCard from "@/components/MetricCard";
import VolumeChart from "@/components/VolumeChart";
import { formatCommaStd, formattedDateMonth, getRelativeTime } from "@/utils";
import ReactLoading from "react-loading";
import { useQuery } from "@tanstack/react-query";

const Dashboard = () => {
    const { isPending, error, data } = useQuery({
        queryKey: ["duneDetailStats"],
        queryFn: () => Promise.all([fetch("https://api.zkcross.network/api/v1/stats/stats").then((res) => res.json()), fetch("https://api.zkcross.network/api/v1/stats/graphs").then((res) => res.json())]),
        staleTime: 60 * 1000,
    });

    const statsData = data?.[0]?.stats;
    const graphData = data?.[1]?.data;

    console.log("stats data", statsData, graphData);

    const metrics = [
        {
            title: "Volume",
            value: statsData?.totalVolume ? `${formatCommaStd(statsData?.totalVolume)} USD` : "130,728,591 USD",
            subtitle: "Volume",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
        },
        {
            title: "Transactions",
            value: statsData?.totalTxn ? `${formatCommaStd(statsData?.totalTxn)}` : "236,310",
            subtitle: "Transactions",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
        },
        {
            title: "Unique Active Wallets",
            value: statsData?.totalUser ? `${formatCommaStd(statsData?.totalUser)}` : "39,908",
            subtitle: "Unique Active Wallets",
            lastUpdated: statsData?.date ? getRelativeTime(statsData?.date) : "1d",
        },
        {
            title: "Tokens Transferred",
            value: "22,994,324,358",
            subtitle: "Tokens Transferred",
            lastUpdated: "2mon",
        },
        {
            title: "Revenue",
            value: "$259,521",
            subtitle: "Revenue",
            lastUpdated: "1mon",
        },
        {
            title: "Grants",
            value: "$650,000",
            subtitle: "Grants",
            lastUpdated: "1d",
        },
    ];

    if (isPending) return <ReactLoading type={"bars"} color={"#818cf8"} height={60} width={60} className="m-auto size-[60px]" />;

    if (error) return <div className="m-auto text-xl">{"An error has occurred: " + error.message}</div>;

    return (
        <div className="w-full container mx-auto py-4">
            {/* Header with logo */}
            <div className="w-full h-40 rounded-lg mb-6 mt-2 flex items-center justify-center bg-[url(https://gfa.nyc3.digitaloceanspaces.com/testapp/testdir/Banner-Dune.png)] bg-center bg-cover bg-no-repeat"></div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5">
                {metrics.map((metric, index) => (
                    <MetricCard key={index} title={metric.title} value={metric.value} subtitle={metric.subtitle} lastUpdated={metric.lastUpdated} />
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4">
                <VolumeChart label="Transactions" data={graphData?.map((i: any) => ({ volume: i?.cumulativeTxnCount, date: formattedDateMonth(i?.month, i?.year) }))} date={statsData?.date} />
                <VolumeChart label="Unique Active Wallets" data={graphData?.map((i: any) => ({ volume: i?.cumulativeUserCount, date: formattedDateMonth(i?.month, i?.year) }))} date={statsData?.date} />
                <VolumeChart label="Volume" data={graphData?.map((i: any) => ({ volume: i?.cumulativeVolume, date: formattedDateMonth(i?.month, i?.year) }))} date={statsData?.date} />
            </div>
        </div>
    );
};

export default Dashboard;
