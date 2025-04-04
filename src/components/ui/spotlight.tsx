"use client";

import { cn } from "@/lib/utils";
import React, { useRef, useState, MouseEvent, useContext, createContext } from "react";
interface MousePosition {
    x: number | null;
    y: number | null;
}

interface SpotlightProps {
    children: React.ReactNode;
    className?: string;
    ProximitySpotlight?: boolean;
    HoverFocusSpotlight?: boolean;
    CursorFlowGradient?: boolean;
}
interface SpotlightItemProps {
    children: React.ReactNode;
    className?: string;
}

interface SpotLightContextType {
    ProximitySpotlight: boolean;
    HoverFocusSpotlight: boolean;
    CursorFlowGradient: boolean;
}

const SpotLightContext = createContext<SpotLightContextType | undefined>(undefined);
export const useSpotlight = () => {
    const context = useContext(SpotLightContext);
    if (!context) {
        throw new Error("useSpotlight must be used within a SpotlightProvider");
    }
    return context;
};
export const Spotlight = ({ children, className, ProximitySpotlight = true, HoverFocusSpotlight = false, CursorFlowGradient = true }: SpotlightProps) => {
    return (
        <SpotLightContext.Provider
            value={{
                ProximitySpotlight,
                HoverFocusSpotlight,
                CursorFlowGradient,
            }}
        >
            <div className={cn(className, "group relative z-10 rounded-md grid gap-2 ")}>{children}</div>
        </SpotLightContext.Provider>
    );
};
export function SpotLightItem({ children, className }: SpotlightItemProps) {
    const { HoverFocusSpotlight, ProximitySpotlight, CursorFlowGradient } = useSpotlight();
    const boxWrapper = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [mousePosition, setMousePosition] = React.useState<MousePosition>({
        x: null,
        y: null,
    });
    React.useEffect(() => {
        const updateMousePosition = (ev: globalThis.MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);

    const [overlayColor, setOverlayColor] = useState({ x: 0, y: 0 });
    const handleMouseMove = ({ currentTarget, clientX, clientY }: MouseEvent) => {
        const { left, top } = currentTarget.getBoundingClientRect();

        const x = clientX - left;
        const y = clientY - top;

        setOverlayColor({ x, y });
    };
    // console.log(overlayColor)

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => CursorFlowGradient && setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={boxWrapper}
            className={cn(className, " relative rounded-lg justify-center items-center p-[2px] bg-[#ffffff15] overflow-hidden")}
        >
            {isHovered && (
                <div
                    className="pointer-events-none absolute opacity-0 z-50 rounded-xl w-full h-full group-hover:opacity-100  transition duration-300 "
                    style={{
                        background: `
            radial-gradient(
              250px circle at ${overlayColor.x}px ${overlayColor.y}px,
              rgb(85, 62, 202, 0.2),
              transparent 80%
            )
          `,
                    }}
                />
            )}
            {HoverFocusSpotlight && (
                <div
                    className="absolute opacity-0 group-hover:opacity-100 z-10 inset-0 bg-fixed rounded-lg"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #ffffff76 0%,transparent 20%,transparent) fixed `,
                    }}
                ></div>
            )}
            {ProximitySpotlight && (
                <div
                    className="absolute inset-0 z-0  bg-fixed rounded-lg"
                    style={{
                        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgb(85, 62, 202, 0.8) 0%,transparent 20%,transparent) fixed`,
                    }}
                ></div>
            )}
            {children}
        </div>
    );
}

type SpotlightCardProps = {
    children: React.ReactNode;
    className?: string;
};

export function SpotlightCard({ children, className = "" }: SpotlightCardProps) {
    return (
        <div
            className={`relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden ${className}`}
        >
            {children}
        </div>
    );
}
