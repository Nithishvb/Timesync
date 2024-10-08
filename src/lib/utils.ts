import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const parseRequestBody = async (req: Request) => {
  try {
    return await req.json();
  } catch (e) {
    throw new Error("Invalid Data");
  }
};
