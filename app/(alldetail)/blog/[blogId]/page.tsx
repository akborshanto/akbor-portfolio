// app/blog/[id]/page.jsx

import Link from "next/link";

const BlogDetail = async ({ params }) => {
  const blogs = [
    {
      id: "1",
      title: "Understanding React Hooks",
      date: "March 15, 2024",
      description:
        "A complete guide to useState, useEffect, and custom hooks with real-world examples. Learn how to manage state, side effects, and create reusable logic using custom hooks to level up your React skills.",
    },
    {
      id: "2",
      title: "Mastering Tailwind CSS Layouts",
      date: "April 2, 2024",
      description:
        "Tips and tricks to create responsive and modern layouts using Tailwind CSS. We cover Flexbox, Grid, utility classes, and dark mode to build beautiful UIs faster.",
    },
    {
      id: "3",
      title: "How to Build Fullstack Apps with MERN",
      date: "April 20, 2024",
      description:
        "Learn how to build scalable fullstack applications using MongoDB, Express, React, and Node.js. A project-based guide with user auth, CRUD operations, and deployment.",
    },
  ];

  const blogId = params.blogId;
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 text-2xl text-red-600 font-semibold">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <h1 className="text-4xl font-bold text-indigo-600 mb-4">{blog.title}</h1>
          <p className="text-sm text-gray-500 mb-6">Published on {blog.date}</p>
          <div className="border-t border-gray-200 pt-6">
            <p className="text-lg leading-relaxed">{blog.description}</p>
          </div>

          <div className="mt-10">
            <Link href="/">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2 rounded-md transition">
                ← Back to Blog
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
