"use client";

import React from "react";
import { TextGenerateEffect } from "../ui/text-generate-effect";

function About() {
  const words = `In 2014, Nova Launcher hooked me on customizing themes, turning my phone into a creative playground. That spark led me to HTML, CSS, and JavaScript. Fast forward to now, I’m a Full Stack Engineer.`;

  return (
    <div className="h-[60vh] px-8 sm:px-16 sm:h-[80vh] bg-white border flex items-center">
      <TextGenerateEffect words={words} className="max-w-2xl mx-auto" />
    </div>
  );
}

export default About;
