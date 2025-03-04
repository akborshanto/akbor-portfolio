"use client"

import Image from "next/image"
import { ArrowDown } from "lucide-react"
import { motion, useAnimation, type Variants } from "framer-motion"
import { useEffect, useState } from "react"

// Animated Text Components
const TypedText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const letters = Array.from(text)

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: delay },
    }),
  }

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.div className={className} variants={container} initial="hidden" animate="visible">
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

const GradientText = ({ text, className }: { text: string; className?: string }) => {
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 5,
        ease: "linear",
        repeat: Number.POSITIVE_INFINITY,
      },
    })
  }, [controls])

  return (
    <motion.h1
      className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-300% ${className}`}
      animate={controls}
      style={{ backgroundSize: "300%" }}
    >
      {text}
    </motion.h1>
  )
}

const RevealText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
          delay,
        }}
      >
        {text}
      </motion.div>
    </div>
  )
}

const AnimatedRole = ({ roles }: { roles: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [roles.length])

  return (
    <div className="h-[40px] overflow-hidden relative">
      {roles.map((role, index) => (
        <motion.h2
          key={role}
          className="text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 absolute"
          initial={{ y: 50, opacity: 0 }}
          animate={{
            y: index === currentIndex ? 0 : -50,
            opacity: index === currentIndex ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          {role}
        </motion.h2>
      ))}
    </div>
  )
}

export default function Hero() {
  const roles = ["MERN Stack Developer", "Frontend Specialist", "React Developer", "UI/UX Enthusiast"]

  return (
    <section
      id="hero"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-indigo-900 dark:to-purple-900"
    >
      {/* Animated Gradient */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 animate-gradient-x"></div>
      </div>

      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Animated Name with Gradient */}
            <GradientText text="AKBOR SHANTO" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6" />

            {/* Animated Role that changes */}
            <AnimatedRole roles={roles} />

            {/* Typed Description */}
            <div className="mb-8 h-[120px] md:h-[100px]">
              <TypedText
                text="Crafting exceptional digital experiences with modern web technologies. Specialized in building scalable full-stack applications using React, Redux, TypeScript, Next.js, MongoDB, Node Js and Tailwind CSS."
                className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto lg:mx-0"
                delay={0.5}
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <motion.a
                href="/resume/resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                Download Resume
              </motion.a>

       {/*        <motion.button
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                
                transition={{ delay: 1.4 }}
              >
                Learn More
                <ArrowDown className="w-4 h-4" />
              </motion.button> */}
            </div>
          </motion.div>

          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 dark:from-blue-600 dark:to-purple-600 rounded-3xl opacity-50"
                animate={{ rotate: [6, 8, 6] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 dark:from-purple-600 dark:to-blue-600 rounded-3xl opacity-50"
                animate={{ rotate: [-6, -8, -6] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              ></motion.div>
              <motion.div
                className="relative rounded-2xl h-full w-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <Image src="/image/akbor.png" alt="akbor shanto" fill className="object-cover h-full w-full" priority />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button

 onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="text-gray-600 dark:text-gray-400 flex flex-col items-center"
        >
          <span className="text-sm mb-2inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl ">                Learn More</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.button>
    </section>
  )
}

