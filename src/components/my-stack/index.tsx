import React from "react";
import StackIcon from "tech-stack-icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const techStack = [
  "js",
  "typescript",
  "tailwindcss",
  "reactjs",
  "nextjs",
  "redux",
  "webpack",
  "webassembly",
  "nodejs",
  "mongodb",
  "postgresql",
  "postman",
  "mysql",
  "vscode",
  "spring",
  "docker",
  "kubernetes",
  "git",
  "gitlab",
  "aws",
  "eslint",
  "firebase",
  "npm2",
  "supabase",
  "zod",
];

type Props = {};

function MyStack({}: Props) {
  return (
    <div className="my-stack bg-white p-8 py-20">
      <h3 className="font-bold text-7xl text-black mb-12 text-center">
        My Tech Stack
      </h3>
      <div className="max-w-2xl mx-auto flex flex-wrap gap-8 justify-center">
        <TooltipProvider>
          {techStack.map((tech) => (
            <Tooltip key={tech}>
              <TooltipTrigger>
                <button className="cursor-default">
                  <StackIcon name={tech} className="w-16 h-16" />
                </button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="capitalize">{tech}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
}

export default MyStack;
