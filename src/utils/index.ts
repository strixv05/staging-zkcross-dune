/* eslint-disable @typescript-eslint/no-explicit-any */
import { RefObject, useEffect } from "react";

const userLocale = typeof window !== "undefined" ? (navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language) : "en-US";

export const numberFormatter = new Intl.NumberFormat(userLocale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 9,
});

export const formatAddress = (address: string): string => {
    return `${address.slice(0, 4)}…${address.slice(address.length - 4, address.length)}`;
};

export const formatNumber = {
    format: (val?: number, precision?: number) => {
        if (!val && val !== 0) {
            return "--";
        }

        if (precision !== undefined) {
            return val.toFixed(precision);
        } else {
            return numberFormatter.format(val);
        }
    },
};

export function formatCommaStd(input: number) {
    const formatter = new Intl.NumberFormat("en-US", {
        style: "decimal",
        maximumFractionDigits: 2, // Adjust based on how many decimal places you need
    });

    return formatter.format(Number(Math.floor(input)));
}

export function formatCompactNumber(number: number): string {
    if (number < 1000) {
        return number.toString();
    } else if (number < 1000000) {
        return (number / 1000).toFixed(1) + 'K';
    } else if (number < 1000000000) {
        return (number / 1000000).toFixed(1) + 'M';
    } else {
        return (number / 1000000000).toFixed(1) + 'B';
    }
}

export function shortenAddress(address: string, chars = 4): string {
    return `${address.slice(0, chars)}...${address.slice(-chars)}`;
}

export const isMobile = () => typeof window !== "undefined" && screen && screen.width <= 480;

export const detectedSeparator = formatNumber.format(1.1).substring(1, 2);

export function useOutsideClick(ref: RefObject<HTMLElement>, handler: (e: MouseEvent) => void) {
    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const listener = (event: any) => {
            // Do nothing if clicking ref's element or descendent elements
            if (!ref.current || ref.current.contains(event.target)) {
                return;
            }
            handler(event);
        };
        document.addEventListener("mouseup", listener);
        return () => {
            document.removeEventListener("mouseup", listener);
        };
    }, [ref, handler]);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebouncedEffect(fn: any, deps: any[], time: number) {
    const dependencies = [...deps, fn, time];
    useEffect(() => {
        const timeout = setTimeout(fn, time);
        return () => {
            clearTimeout(timeout);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}

export function getRelativeTime(date: string | Date) {
    const now: any = new Date();
    const givenDate: any = new Date(date);
    const diffInMs = now - givenDate; // Difference in milliseconds

    const diffInMinutes = Math.floor(diffInMs / 60000); // Convert to minutes
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    // Calculate the difference in months
    const diffInMonths = now.getMonth() - givenDate.getMonth() + 12 * (now.getFullYear() - givenDate.getFullYear());

    if (diffInMonths > 0) {
        return `${diffInMonths}mon`; // If it's more than a month ago, show months
    } else if (diffInDays > 0) {
        return `${diffInDays}d`;
    } else if (diffInHours < 24) {
        return `${diffInHours}h`;
    } else {
        return `${diffInMinutes}min`; // Less than a day ago, show minutes
    }
}

export function formattedDateMonth(month: number, year: number) {
    // Create a date object to format the month name
    const date = new Date(year, month - 1); // month is zero-based in JS
    const monthName = date.toLocaleString("en-US", { month: "short" }); // Get short month name (e.g., "Apr")
    return `${monthName} ${year}`;
}
