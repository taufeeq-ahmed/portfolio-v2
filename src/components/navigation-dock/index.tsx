"use client";

import React from 'react'

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


import { socials } from '@/lib/utils';

type Props = {}

const links = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },

  {
    title: "Resume",
    icon: (
      <IconFileCv className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    onClick: () => {
      // TODO: add resume 
      alert("Resume");
    },
    href: "#",
  },
  {
    title: "Experience",
    icon: (
      <IconListDetails className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
  {
    title: "Projects",
    icon: (
      <IconCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#",
  },
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
    <div className="flex items-center justify-center w-fit sm:w-full sm:h-fit fixed bottom-24 right-4 sm:bottom-4 sm:left-0 sm:right-0 ">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  )
}

export default NavigationDock