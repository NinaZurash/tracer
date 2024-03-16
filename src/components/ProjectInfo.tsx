import { motion } from "framer-motion";

import Link from "next/link";

import { useState } from "react";

import { Button } from "./ui/button";

export type Contributor = {
  name: string;
  role: string;
};

interface Props {
  title: string;
  subTitle: string;
  groupName: string;
  useCase: string;
  openSource: boolean;
  sourceUrl: string | null;
  contributors: Contributor[];
}

export default function ProjectInfo({
  title,
  subTitle,
  groupName,
  useCase,
  openSource,
  sourceUrl,
  contributors,
}: Props) {
  const [isContributorsOpen, setIsContributorsOpen] = useState(false);

  const toggleContributors = () => {
    setIsContributorsOpen(!isContributorsOpen);
  };

  return (
    <motion.div
      className="flex w-full flex-col gap-4 pr-0 lg:w-96 lg:pr-8"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 0.1,
      }}
    >
      <div>
        <Button className="p-0" variant="link">
          <Link href="/">
            <span>← Back to Home</span>
          </Link>
        </Button>
      </div>
      <h1 className="text-3xl font-extrabold uppercase sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p>{subTitle}</p>
      <div className="tex flex w-full flex-col items-center text-xs">
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2 ">
          <span>Created for</span>
          <span>{groupName}</span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>Publisher</span>
          <span>NEC</span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>Use Case</span>
          <span>{useCase}</span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>Repository</span>
          <span>{openSource ? "Open Source" : "Closed"}</span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>License</span>
          <span>{openSource ? "Apache" : "None"}</span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>Repository access</span>
          <span>
            {sourceUrl ? (
              <Link href={sourceUrl} className="text-indigo-700 underline">
                {sourceUrl}
              </Link>
            ) : (
              "None"
            )}
          </span>
        </div>
        <div className="flex w-full items-center justify-between border border-transparent border-t-border py-2">
          <span>Contributors</span>
          <Button
            className="-mr-2 text-blue-500"
            variant="ghost"
            size="sm"
            onClick={toggleContributors}
          >
            {isContributorsOpen ? "Hide" : "Show"}
          </Button>
        </div>
        {isContributorsOpen && (
          <ul className="w-full">
            {contributors.map((contributor) => (
              <li className="flex w-full justify-between" key={contributor.name}>
                <span> {contributor.name}</span>
                <span className="text-muted-foreground">{contributor.role}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
