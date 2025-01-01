"use client";

import React from "react";

import { BackgroundLines } from "../ui/background-lines";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { LinkPreview } from "../ui/link-preview";

type Props = {};

function Hero({}: Props) {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="h-scrren sm:h-full flex flex-col justify-center items-center z-10">
        <div className="w-full">
          <TextHoverEffect text="Taufeeq" />
        </div>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg px-8 sm:px-16 sm:text-5xl mx-auto mb-16 font-semibold text-center">
          Senior Frontend Engineer (SDE-II){" "}
          <LinkPreview url="https://hydden.com/" className="font-bold">
            @Hydden
          </LinkPreview>{" "}
        </p>
      </div>
    </BackgroundLines>
  );
}

export default Hero;
