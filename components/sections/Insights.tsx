"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

// --- Types & Interfaces ---

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl: string;
  slug: string; // URL-friendly string for linking
}

// --- Mock Data (Replace with API or CMS fetch later) ---

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Remote Work: Hybrid Models in 2026",
    excerpt: "Explore how companies are adapting to hybrid work environments and what it means for talent acquisition strategies.",
    category: "Workplace Trends",
    author: "Sarah Jenkins",
    date: "Feb 08, 2026",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800",
    slug: "future-of-remote-work-2026",
  },
  {
    id: 2,
    title: "5 Skills Every Tech Recruiter Looks For",
    excerpt: "Beyond coding languages, soft skills are becoming the deciding factor for top-tier engineering roles. Here's what matters.",
    category: "Career Advice",
    author: "David Chen",
    date: "Jan 25, 2026",
    readTime: "4 min read",
    imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800",
    slug: "5-skills-tech-recruiters-look-for",
  },
  {
    id: 3,
    title: "Scaling Your Startup Team: A Founder's Guide",
    excerpt: "When is the right time to hire your first HR manager? We break down the growth stages of successful startups.",
    category: "Leadership",
    author: "Manya (Founder)",
    date: "Jan 10, 2026",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800",
    slug: "scaling-startup-team-guide",
  },
];

const InsightsSection: React.FC = () => {
  return (
    <section id="insights" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">
              Knowledge Hub
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
              Latest Insights & Career Trends
            </h3>
            <p className="text-gray-600 mt-4 text-lg">
              Expert advice on hiring, job hunting, and the future of work.
            </p>
          </div>

          <Link 
            href="/blog" 
            className="hidden md:flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors group"
          >
            View all articles
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Metadata */}
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {post.readTime}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer / Author */}
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                       <User className="w-4 h-4 text-gray-500" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">{post.author}</span>
                  </div>
                  
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="text-blue-600 text-sm font-semibold flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    Read
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View All Button (Only visible on small screens) */}
        <div className="mt-10 text-center md:hidden">
           <Link 
            href="/blog" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default InsightsSection;