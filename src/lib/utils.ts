import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const socials = {
  github: "https://github.com/taufeeq-ahmed",
  linkedin: "https://www.linkedin.com/in/io-taufeeq-ahmed/",
  email: "mailto:io.taufeeq.ahmed@gmail.com",
};
