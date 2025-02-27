"use client";

import React from "react";
import { motion } from "framer-motion";

import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconHome,
  IconListDetails,
  IconFileCv,
  IconCode,
} from "@tabler/icons-react";

import { socials } from "@/lib/utils";

type Props = {};

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#home",
  },

  {
    title: "Resume",
    icon: (
      <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      const link = document.createElement("a");
      link.href = "/taufeeq-ahmed-resume.pdf";
      link.download = "taufeeq-ahmed-resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
    href: "#",
  },
  {
    title: "Experience",
    icon: (
      <IconListDetails className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  // {
  //   title: "Projects",
  //   icon: (
  //     <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
  //   ),
  //   href: "#",
  // },
  {
    title: "Email",
    icon: (
      <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: socials.email,
  },
  {
    title: "Github",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: socials.github,
  },
  {
    title: "Linkedin",
    icon: (
      <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: socials.linkedin,
  },
];

function NavigationDock({}: Props) {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, delay: 1, type: "spring" }}
      className="flex items-center justify-center z-10 w-fit h-fit mx-auto fixed bottom-4 left-0 right-0"
    >
      <FloatingDock items={links} />
    </motion.div>
  );
}

export default NavigationDock;
