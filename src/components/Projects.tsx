import { motion } from "framer-motion";

import { PROJECTS } from "#/constants/projects";

import Project from "./Project";

export default function Projects() {
  return (
    <>
      <motion.section
        className="grid grid-cols-1 gap-6 text-center md:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
      >
        {PROJECTS.map((project, idx) => (
          <Project
            key={idx}
            title={project.title}
            description={project.description}
            imageUrl={project.imagePreview}
            route={project.route}
            width={project.width}
          />
        ))}
      </motion.section>
    </>
  );
}
