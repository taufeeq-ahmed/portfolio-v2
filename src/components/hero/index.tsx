"use client"

import React, { useState } from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { LinkPreview } from '../ui/link-preview'
import "@theme-toggles/react/css/Expand.css"
import { Expand } from "@theme-toggles/react"
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { ThemeToggle } from '../ui/theme-toggle'


type Props = {}

function Hero({ }: Props) {

  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {

    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }

  }

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <TextHoverEffect text="Taufeeq" />
        <p className="
          text-neutral-500 dark:text-neutral-400 text-xl sm:text-5xl mx-auto mb-16 font-semibold
          relative bottom-48 z-[100]
        ">
          Senior Frontend Engineer {" "}
          <LinkPreview url="https://fibr.ai/" className="font-bold">
            @Fibr.ai
          </LinkPreview>{" "}
        </p>
      </BackgroundLines>
    </div>

  )
}

export default Hero
