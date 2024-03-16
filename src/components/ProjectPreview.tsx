"use client";

import Image from "next/image";

import { useEffect, useRef, useState } from "react";
import Skeleton from "react-loading-skeleton";

import { Button } from "./ui/button";

interface Props {
  imgUrl: string | null;
  appUrl: string | null;
  sourceUrl: string | null;
  videoUrl: string | null;
}

export default function ProjectPreview({
  imgUrl,
  appUrl,
  sourceUrl,
  videoUrl,
}: Props) {
  const [isLoading, setIsLoading] = useState(true);
  const [demoClicked, setDemoClicked] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current && videoRef.current.readyState === 4) {
      handleImageLoad();
    }
  }, [videoUrl]);
  const handleImageLoad = () => setIsLoading(false);
  const handleDemoClick = () => {
    setDemoClicked(true);
  };

  return (
    <div className="flex flex-col border border-transparent px-0 lg:border-l-border lg:px-8">
      <div className="relative h-[400px] overflow-hidden rounded-md shadow-md">
        {isLoading && <Skeleton className="absolute h-full w-full" />}
        {!demoClicked && imgUrl && (
          <Image
            src={imgUrl}
            width={700}
            height={400}
            alt="project"
            className="left-0 top-0 h-full w-full object-fill lg:w-[700px]"
            onLoadingComplete={handleImageLoad}
          />
        )}
        {demoClicked && videoUrl && (
          <video
            ref={videoRef}
            src={videoUrl}
            className="left-0 top-0 h-full w-full object-fill lg:w-[700px]"
            onLoadedData={handleImageLoad}
            controls
            autoPlay
          />
        )}
        {demoClicked && (
          <div>
            <Button
              onClick={() => {
                setDemoClicked(false);
              }}
              className="absolute right-0 top-0 bg-red-800"
            >
              Exit
            </Button>
          </div>
        )}
        {!demoClicked && (
          <div className="absolute bottom-2 left-2 flex items-center gap-2">
            {appUrl && (
              <Button
                variant="outline"
                className="p-5 text-black hover:bg-primary hover:text-white"
                onClick={() => window.open(appUrl)}
              >
                View App
              </Button>
            )}
            {sourceUrl && (
              <Button
                variant="outline"
                className="p-5 text-black hover:bg-primary hover:text-white"
                onClick={() => window.open(sourceUrl)}
              >
                View Code
              </Button>
            )}
            {videoUrl && (
              <Button
                variant="outline"
                className="p-5 text-black hover:bg-primary hover:text-white"
                onClick={handleDemoClick}
              >
                Demo
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
