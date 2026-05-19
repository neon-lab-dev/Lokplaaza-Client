/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "@/components/Reusable/Container/Container";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { IMAGES } from "@/assets";

// Blog post data type
interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  description: string;
  image: any;
  slug: string;
}

// Sample blog data
const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "May 15, 2026",
    readTime: "5 min read",
    title: "How Modern Furniture Transforms Small Living Spaces",
    description:
      "Modern homes are becoming more compact, especially in urban areas where space optimization matters the most....",
    image: IMAGES.bedroom,
    slug: "modern-furniture-transforms-small-living-spaces",
  },
  {
    id: 2,
    date: "May 15, 2026",
    readTime: "5 min read",
    title: "How Modern Furniture Transforms Small Living Spaces",
    description:
      "Modern homes are becoming more compact, especially in urban areas where space optimization matters the most....",
    image: IMAGES.adaptability,
    slug: "modern-furniture-transforms-small-living-spaces-2",
  },
  {
    id: 3,
    date: "May 14, 2026",
    readTime: "5 min read",
    title: "Choosing the Perfect Wooden Furniture for Your Home",
    description:
      "Wooden furniture has remained one of the most preferred choices for home interiors because of its natural texture & versatile appearance....",
    image: IMAGES.GotInspiration,
    slug: "choosing-perfect-wooden-furniture",
  },
  {
    id: 4,
    date: "May 14, 2026",
    readTime: "5 min read",
    title: "Choosing the Perfect Wooden Furniture for Your Home",
    description:
      "Wooden furniture has remained one of the most preferred choices for home interiors because of its natural texture & versatile appearance....",
    image: IMAGES.costEffective,
    slug: "choosing-perfect-wooden-furniture-2",
  },
];

const Blog = () => {
  return (
    <Container>
      {/* Breadcrumb Section */}
      <div className="py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-medium">Blogs</span>
        </div>
      </div>

      {/* Page Title */}
      <div className="py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Blogs</h1>
        <p className="text-gray-500 mt-2">
          Insights, stories, and trends from our experts
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-16">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            {/* Blog Image */}
            <Link href={`/blog/${post.id}`} className="block overflow-hidden">
              <div className="relative h-56 w-full bg-gray-200">
                
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Blog Content */}
            <div className="p-6">
              {/* Date and Read Time */}
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <time dateTime={post.date}>{post.date}</time>
                <span className="w-1 h-1 bg-gray-400 rounded-full"></span>
              </div>

              {/* Title */}
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                <Link
                  href={`/blog/${post.id}`}
                  className="hover:text-primary transition-colors line-clamp-2"
                >
                  {post.title}
                </Link>
              </h2>

              {/* Description */}
              <p className="text-gray-600 mb-4 line-clamp-3">{post.description}</p>

              {/* Read More Link */}
              <Link
                href={`/blog/${post.id}`}
                className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all duration-300"
              >
                Read More
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </Container>
  );
};

export default Blog;