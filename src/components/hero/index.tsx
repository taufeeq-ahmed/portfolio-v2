"use client"

import React, { useState } from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { LinkPreview } from '../ui/link-preview'
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import { useTheme } from 'next-themes'
import { ThemeToggle } from '../ui/theme-toggle'


type Props = {}

function Hero({ }: Props) {



  return (
    <div className="h-[40rem] flex flex-col pt-20 items-center justify-center">
      <TextHoverEffect text="Taufeeq" />
      <p className="text-neutral-500 dark:text-neutral-400 text-xl sm:text-5xl mx-auto mb-10 relative bottom-8 font-semibold">
        Senior Frontend Engineer {" "}
        <LinkPreview url="https://fibr.ai/" className="font-bold">
          @Fibr.ai
        </LinkPreview>{" "}
      </p>
      <ThemeToggle />
    </div>

  )
}

export default Hero