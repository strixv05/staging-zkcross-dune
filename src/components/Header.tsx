/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { ClipboardCheck } from "lucide-react";

function Header() {
    // const [showCheck, setShowCheck] = useState(false);

    // const handleCopy = () => {
    //     navigator.clipboard.writeText(window.location.href);
    //     setShowCheck(true);
    //     setTimeout(() => {
    //         setShowCheck(false);
    //     }, 1000);
    // };

    return (
        <header className="w-full border-b border-gray-900 bg-zinc-950">
            <div className="flex items-center justify-between container py-6 w-full">
                <div className="flex items-center space-x-4">
                    <h1 className="sm:text-xl text-lg font-bold text-zinc-100">STATS - DASHBOARD v1</h1>
                    {/* <nav className="space-x-4">
                                        <a href="#" className="hover:opacity-100 opacity-70">
                                            Create
                                        </a>
                                    </nav> */}
                </div>
                <div className="flex items-center">
                    {/* <div className="relative sm:block hidden">
                                        <Input placeholder="Search" className="w-64 pl-10 border !border-zinc-400" />
                                    </div> */}
                    {/* <Button variant="secondary" className="bg-zinc-800 text-white" onClick={handleCopy}>
                      {showCheck ? <><ClipboardCheck /> URL Copied</>: "Share"}
                    </Button> */}
                    {/* <Button variant="default" className="text-sm" onClick={handleCopy}>
                        {showCheck && <ClipboardCheck />}
                    </Button> */}
                </div>
            </div>
        </header>
    );
}

export default Header;
