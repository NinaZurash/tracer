import { motion } from "framer-motion";

import React from "react";

export default function Title() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex flex-col items-center gap-10">
        <motion.h1
          className="text-center  text-3xl font-extrabold sm:text-6xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Tracer Framework
        </motion.h1>
        <motion.h2
          className="max-w-2xl text-center text-xl font-medium sm:text-2xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          3-Dimensional Framework for Visualizing the ATLAS Detector
        </motion.h2>
      </div>
      <motion.div
        className="flex flex-col items-center justify-center px-4 text-lg font-medium sm:flex-row"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.15,
        }}
      >
        {/* <Button
          variant="outline"
          className="bg-foreground px-12 py-6 text-xl text-white"
          onClick={() => window.open("https://gitlab.cern.ch/tracer")}
        >
          GitLab
        </Button> */}
      </motion.div>
    </div>
  );
}
