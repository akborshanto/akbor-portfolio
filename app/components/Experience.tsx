"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Briefcase, Calendar, Globe, MapPin, X } from "lucide-react"

// Define the experience type
type Experience = {
  company: string
  Technology: string
  period: string
  role: string
  responsibilities: string[]
  image: string
}

export default function ExperienceCards() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Sample data - replace with your actual data
  const [experiences] = useState<Experience[]>([
    {
        company: "Quick Bites",
        Technology: " Next JS | React JS | Socket.io | Node JS | Express JS | NextAuth.JS | MongoDB | Tailwind CSS",
        period: "2024 Decembar",
        links: [
          { name: "Live Link || ", url: "https://quick-bites-tau.vercel.app/" },
          { name: "GitHub Client   ", url: "https://github.com/sojibislam9878/quick_bites" },
          
        ],
        responsibilities: [
          "Secure Payment Integration: Seamlessly integrated SSLCommerz to enable safe, encrypted online transactions,  enhancing customer trust and convenience",
  
          "Real-Time Support: Developed a responsive live chat system using Socket.io, enabling instant  between users and administrators to improve support and engagement.",
          "Implementing secure backend systems with Node.js and Express",
          "Dynamic Discount Management: Built an intuitive coupon and discount module that allows administrators to create, update, and deactivate promotions, enhancing customer retention and sale. ",
        ],
      image: "/projectImg/p1.png",
    },
    {
        company: "FitnessQuest ",
        Technology: "React JS | Node JS | Express JS | JWT | MongoDB | Tailwind CSS",
        period: "2024 - Present",
        links: [
          { name: "Live Link || ", url: "https://workout-03.web.app/" },
          { name: "GitHub Client|| ", url: "https://github.com/akborshanto/workout-client" },
          { name: " GitHub Server  ", url: "https://github.com/akborshanto/workout-server" },
        ],
        responsibilities: [
          "Secure Payment Integration: Seamlessly integrated SSLCommerz to enable safe, encrypted online transactions, enhancing customer trust and convenience.",
          "Comprehensive Admin Panel: A user-friendly admin panel for managing trainers, user requests, and overall platform operations.",
          "Created responsive interfaces with React.js and Redux",
          "ISeamless Booking Process: An intuitive booking experience guiding users from trainer selection to secure payment",
          "Built-in Communication Channels: Enable smooth interactions between users, trainers, and admins for better collaboration and support.",
        ],
      image: "/projectImg/p2.png",
    },
    {
        company: " NaturalCraft",
        Technology: "React JS | Node JS | Express JS  MongoDB | Tailwind CSS",
        period: "2024 ",
        links: [
          { name: "Live Link || ", url: "https://naturalcraft-7d1c8.web.app/" },
          { name: "GitHub Client ||", url: "https://github.com/akborshanto/natural-craft-client" },
          { name: "GitHub Server ", url: "https://github.com/akborshanto/natural-craft-server" },
        ],
        responsibilities: [
          "Efficient Product Management: Enabled users to add, modify, and manage their crafted products efficiently.",
          "Advanced Authentication: Secured user interactions through advanced authentication mechanisms.",
          "Amplified User-Generated Content: Highlighted user-generated content to amplify reach and visibility for handcrafted creations.",
      
        ],
      image: "/projectImg/p3.png",
    },
  ])

  const openImageModal = (image: string) => {
    setSelectedImage(image)
    // Prevent body scrolling when modal is open
    document.body.style.overflow = "hidden"
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    // Restore body scrolling
    document.body.style.overflow = "auto"
  }

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 dark:text-white">Work Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 hover:shadow-2xl relative overflow-hidden group"
            >
              <div className="flex flex-col-reverse md:flex-row-reverse">
                {/* Content side */}
                <div className="w-full md:w-2/3 p-8 relative z-10">
                  <div
                    className="absolute top-0 right-0 w-32 h-32 bg-blue-200 dark:bg-blue-700 rounded-bl-full z-0 opacity-50 
                    transition-transform duration-300 group-hover:scale-110"
                  ></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-semibold mb-2 dark:text-white flex items-center">
                      {exp.company === "Freelance" ? <Globe className="w-6 h-6 mr-2 text-blue-500" /> : null}
                      {exp.company}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                      <MapPin className="w-4 h-4 mr-2" />
                      {exp.Technology}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {exp.period}
                    </p>
                    <p className="text-xl font-medium mb-4 dark:text-gray-200 flex items-center">
                      <Briefcase className="w-5 h-5 mr-2" />

                      {exp.links.map((link, index) => (
    <a
      key={index}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      {link.name}
    </a>
  ))}
                      {exp.role}
                    </p>
                    <ul className="list-none space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-700 dark:text-gray-300 flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* Image side */}
                <div
                  className="w-full md:w-1/3 h-64 md:h-auto relative cursor-pointer overflow-hidden"
                  onClick={() => openImageModal(exp.image)}
                >
                  <motion.img
                    src={exp.image || "/placeholder.svg"}
                    alt={`${exp.company} visual`}
                    className="w-full h-full object-cover transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:bg-gradient-to-l" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-black/60 text-white px-4 py-2 rounded-full">Click to zoom</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className="relative max-w-4xl max-h-[90vh] w-full"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 text-white rounded-full p-2 transition-colors"
                onClick={closeImageModal}
              >
                <X className="w-6 h-6" />
              </button>
              <motion.img
                src={selectedImage}
                alt="Enlarged view"
                className="w-full h-full object-contain rounded-lg"
                layoutId="expandedImage"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

