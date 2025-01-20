"use client";

import { Loader2 } from "lucide-react";
import { useState, useEffect } from "react";

export default function Loading() {
    const [loadingText, setLoadingText] = useState("Please wait...");

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoadingText("This is taking longer than usual. Please hold on...");
        }, 10000); // 10 seconds

        // Cleanup the timer on unmount to avoid memory leaks
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className="container z-30 h-[calc(100vh-5rem)] w-screen backdrop-blur text-lg font-medium flex flex-col justify-center items-center gap-5">
            <Loader2 size={40} className="animate-spin" />
            {loadingText}
        </div>
    );
};

