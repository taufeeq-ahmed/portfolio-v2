"use client"

import React, { useState } from 'react'
import { BackgroundLines } from '../ui/background-lines'
import { TextHoverEffect } from '../ui/text-hover-effect'
import { LinkPreview } from '../ui/link-preview'


type Props = {}

function Hero({ }: Props) {

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <TextHoverEffect text="Taufeeq" />
        <p className="
          text-neutral-500 dark:text-neutral-400 text-xl sm:text-5xl mx-auto mb-16 font-semibold
          relative bottom-48 z-[100] text-center
        ">
          Senior Frontend Engineer (SDE-II) {" "}
          <LinkPreview url="https://hydden.com/" className="font-bold">
            @Hydden
          </LinkPreview>{" "}
        </p>
      </BackgroundLines>
    </div>

  )
}

export default Hero
