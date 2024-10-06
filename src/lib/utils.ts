import { clsx, type ClassValue } from "clsx"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
