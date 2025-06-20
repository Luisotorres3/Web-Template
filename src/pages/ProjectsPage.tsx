import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

// Placeholder project data
const projects = [
  { id: 1, name: "Cosmic Ray Analyzer", description: "A tool for visualizing cosmic ray data from various observatories.", tech: ["React", "D3.js", "Python"] },
  { id: 2, name: "Stellar Navigation UI", description: "Next-generation user interface for interstellar spacecraft.", tech: ["TypeScript", "WebGL", "Rust"] },
  { id: 3, name: "Planet Colonization Sim", description: "A simulation game about establishing a colony on a new planet.", tech: ["C#", "Unity", "Blender"] },
];

const ProjectsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold mb-10 text-center text-purple-600 dark:text-purple-400">{t('projectsTitle')}</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h2 className="text-2xl font-semibold mb-3 text-purple-500 dark:text-purple-400">{project.name}</h2>
            <p className="text-slate-700 dark:text-slate-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map(techName => (
                <span key={techName} className="px-2 py-1 bg-purple-200 dark:bg-purple-700 text-purple-700 dark:text-purple-200 text-xs rounded-full">
                  {techName}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectsPage;
