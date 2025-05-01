"use client"

import { motion } from "framer-motion"
import { Code, Database, Server, Layout, GitBranch, Terminal, Layers, Cpu, Globe, Workflow } from "lucide-react"
import AnimatedSectionHeader from "./AnimatedSectionHeader"

const SkillIcon = ({ icon: Icon, color }: { icon: any; color: string }) => (
  <div className={`p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg`}>
    <Icon className={`w-6 h-6 ${color}`} />
  </div>
)
const skills = [
  {
    icon: Code,
    name: "HTML & CSS",
    tech: "HTML5, CSS3",
    description:
      "Structuring and styling websites with semantic HTML and modern CSS techniques.",
    color: "text-pink-500",
  },
  {
    icon: Layout,
    name: "Tailwind CSS",
    tech: "Tailwind Utility-First Framework",
    description:
      "Creating responsive and modern UI with fast and customizable Tailwind CSS utilities.",
    color: "text-sky-500",
  },
  {
    icon: Code,
    name: "JavaScript",
    tech: "ES6+",
    description:
      "Building dynamic and interactive functionalities with modern JavaScript syntax and features.",
    color: "text-yellow-400",
  },
  {
    icon: Code,
    name: "React.js",
    tech: "Hooks, JSX, Components",
    description:
      "Developing fast and reusable components using modern React best practices.",
    color: "text-blue-500",
  },
  {
    icon: Workflow,
    name: "Next.js",
    tech: "App Router, SSR, SSG",
    description:
      "Building scalable web applications with powerful features like SSR and routing in Next.js.",
    color: "text-black dark:text-white",
  },
  {
    icon: Server,
    name: "Node.js",
    tech: "Runtime Environment",
    description:
      "Building scalable backend services and APIs using non-blocking event-driven architecture.",
    color: "text-green-500",
  },
  {
    icon: Cpu,
    name: "Express.js",
    tech: "Web Framework",
    description:
      "Creating robust and lightweight RESTful APIs with Express.js for server-side logic.",
    color: "text-gray-500",
  },
  {
    icon: Database,
    name: "MongoDB",
    tech: "NoSQL Database",
    description:
      "Designing and managing flexible database schemas using MongoDB and Mongoose.",
    color: "text-green-700",
  },
  {
    icon: GitBranch,
    name: "Version Control",
    tech: "Git & GitHub",
    description:
      "Tracking code changes and collaborating on projects with Git and GitHub.",
    color: "text-orange-500",
  },
]


export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <a href="https://storyset.com/education">Education illustrations by Storyset</a>
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"></div>

      {/* Skill Illustrations */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="skill-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M50 30 L50 70 M30 50 L70 50" stroke="currentColor" strokeWidth="2" />
            </pattern>
          </defs>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#skill-pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <AnimatedSectionHeader title="Skills & Expertise" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <SkillIcon icon={skill.icon} color={skill.color} />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{skill.tech}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 text-sm">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

