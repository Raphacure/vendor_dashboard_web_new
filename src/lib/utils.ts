import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const debounce = <T extends unknown[]>(
  callback: (...args: T) => void,
  delay: number
) => {
  let timeout: NodeJS.Timeout;
  return (...args: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export const truncateText = (text: string, maxLength: number) => {
  if (!text) return "N/A"; // Handle missing text
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};
