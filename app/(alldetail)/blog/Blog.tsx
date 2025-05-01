"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const blogs = [
  {
    id:"1",
    title: "Understanding React Hooks",
    date: "March 15, 2024",
    description: "A complete guide to useState, useEffect, and custom hooks with real-world examples.",
 
  },
  { id:"2",
    title: "Mastering Tailwind CSS Layouts",
    date: "April 2, 2024",
    description: "Tips and tricks to create responsive and modern layouts using Tailwind CSS.",
    
  },
  {id:"3",
    title: "How to Build Fullstack Apps with MERN",
    date: "April 20, 2024",
    description: "Learn how to build scalable fullstack applications using MongoDB, Express, React, and Node.js.",
    
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-12">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {blog.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{blog.date}</p>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{blog.description}</p>
              <Link
                href={`/blog/${blog.id}`}
                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
              >
                Read more →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
