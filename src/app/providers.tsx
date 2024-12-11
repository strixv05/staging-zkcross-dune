"use client";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function Provider({ children }: { children: ReactNode }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
            <ToastContainer />
        </>
    );
}
