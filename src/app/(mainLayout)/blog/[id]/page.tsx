/* eslint-disable react/no-unescaped-entities */
"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Reusable/Container/Container";
import { IMAGES } from "@/assets";

// Blog post data type
interface BlogPost {
  id: number;
  date: string;
  readTime: string;
  title: string;
  description: string;
  content: string;
  image: string;
  slug: string;
  author?: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  tags?: string[];
}

// Sample blog data - in a real app, this would come from an API or database
const blogPosts: BlogPost[] = [
  {
    id: 1,
    date: "May 15, 2026",
    readTime: "5 min read",
    title: "How Modern Furniture Transforms Small Living Spaces",
    description:
      "Modern homes are becoming more compact, especially in urban areas where space optimization matters the most....",
    content: `
      <p>Modern homes are becoming more compact, especially in urban areas where space optimization matters the most. The challenge of furnishing a small living space while maintaining both functionality and aesthetic appeal has led to innovative solutions in modern furniture design.</p>
      
      <h2>The Rise of Multi-functional Furniture</h2>
      <p>Today's designers are creating pieces that serve multiple purposes without compromising on style. A coffee table that converts into a dining table, a sofa with hidden storage compartments, or a bed that transforms into a home office - these are just a few examples of how modern furniture is revolutionizing small space living.</p>
      
      <p>Multi-functional furniture not only saves space but also reduces clutter, making your home feel more open and organized. The key is choosing pieces that blend seamlessly with your decor while providing practical solutions to everyday challenges.</p>
      
      <h2>Smart Storage Solutions</h2>
      <p>One of the biggest challenges in small spaces is finding adequate storage. Modern furniture addresses this with cleverly integrated storage options. Ottomans with hidden compartments, beds with built-in drawers, and wall-mounted shelving units that utilize vertical space are becoming increasingly popular.</p>
      
      <p>These solutions allow you to keep your belongings organized and out of sight, maintaining a clean, minimalist aesthetic that makes small spaces appear larger.</p>
      
      <h2>Light and Visual Space</h2>
      <p>The choice of furniture also affects how light moves through your space. Modern designs often feature raised legs, allowing light to flow underneath and creating a sense of airiness. Glass and acrylic furniture pieces, while not traditional, can make a room feel more open by allowing visibility through them.</p>
      
      <p>Mirrored surfaces and reflective materials are also effective at bouncing light around the room, creating the illusion of more space. When combined with a neutral color palette, these elements can transform even the smallest apartment into a comfortable, stylish living environment.</p>
    `,
    image: "/blog/modern-furniture.jpg",
    slug: "modern-furniture-transforms-small-living-spaces",
    author: {
      name: "Sarah Johnson",
      bio: "Interior design expert with over 10 years of experience in small space optimization.",
    },
    tags: [
      "Modern Furniture",
      "Small Spaces",
      "Interior Design",
      "Space Optimization",
    ],
  },
  {
    id: 2,
    date: "May 15, 2026",
    readTime: "5 min read",
    title: "How Modern Furniture Transforms Small Living Spaces",
    description:
      "Modern homes are becoming more compact, especially in urban areas where space optimization matters the most....",
    content: `
      <p>Content for the second blog post would go here...</p>
    `,
    image: "/blog/modern-furniture-2.jpg",
    slug: "modern-furniture-transforms-small-living-spaces-2",
    author: {
      name: "Sarah Johnson",
      bio: "Interior design expert",
    },
    tags: ["Modern Furniture", "Small Spaces"],
  },
  {
    id: 3,
    date: "May 14, 2026",
    readTime: "5 min read",
    title: "Choosing the Perfect Wooden Furniture for Your Home",
    description:
      "Wooden furniture has remained one of the most preferred choices for home interiors because of its natural texture & versatile appearance....",
    content: `
      <p>Wooden furniture has remained one of the most preferred choices for home interiors because of its natural texture, durability, and versatile appearance. From solid oak to reclaimed pine, the options are endless when it comes to incorporating wood into your living space.</p>
      
      <h2>Understanding Different Types of Wood</h2>
      <p>Each type of wood brings its own unique characteristics to furniture. Hardwoods like oak, maple, and walnut are known for their durability and rich grain patterns, making them ideal for investment pieces that will last for generations. Softwoods like pine and cedar are more affordable and lightweight, perfect for casual or temporary furnishings.</p>
      
      <h2>Matching Wood Tones with Your Decor</h2>
      <p>The color of your wooden furniture should complement your existing decor. Light woods like ash and birch create an airy, Scandinavian feel, while medium tones like cherry and teak add warmth to traditional settings. Dark woods such as walnut and ebony bring drama and sophistication to modern interiors.</p>
      
      <h2>Caring for Your Wooden Furniture</h2>
      <p>Proper maintenance ensures your wooden furniture remains beautiful for years. Regular dusting, avoiding direct sunlight, and using coasters for drinks are simple habits that protect the finish. Occasional polishing with appropriate products will keep the wood nourished and gleaming.</p>
    `,
    image: "/blog/wooden-furniture.jpg",
    slug: "choosing-perfect-wooden-furniture",
    author: {
      name: "Michael Chen",
      bio: "Woodworking craftsman and furniture designer specializing in sustainable materials.",
    },
    tags: [
      "Wooden Furniture",
      "Home Decor",
      "Interior Design",
      "Sustainability",
    ],
  },
  {
    id: 4,
    date: "May 14, 2026",
    readTime: "5 min read",
    title: "Choosing the Perfect Wooden Furniture for Your Home",
    description:
      "Wooden furniture has remained one of the most preferred choices for home interiors because of its natural texture & versatile appearance....",
    content: `
      <p>Content for the fourth blog post would go here...</p>
    `,
    image: "/blog/wooden-furniture-2.jpg",
    slug: "choosing-perfect-wooden-furniture-2",
    author: {
      name: "Michael Chen",
      bio: "Woodworking craftsman",
    },
    tags: ["Wooden Furniture", "Home Decor"],
  },
];

const BlogDetails = () => {
  const params = useParams();
  const id = params?.id as string;

  // Find the blog post by id (convert to number for comparison)
  const blogPost = blogPosts.find((post) => post.id === parseInt(id));

  // Handle case when blog post is not found
  if (!blogPost) {
    return (
      <Container>
        <div className="min-h-[60vh] flex flex-col items-center justify-center py-16">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Blog Post Not Found
            </h2>
            <p className="text-gray-500 mb-6">
              The blog post you're looking for doesn't exist or has been moved.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blogs
            </Link>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Breadcrumb */}
      <div className="py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span className="text-gray-400">›</span>
          <Link href="/blog" className="hover:text-primary transition-colors">
            Blogs
          </Link>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800 font-medium line-clamp-1">
            {blogPost.title}
          </span>
        </div>
      </div>

      {/* Blog Content */}
      <article className="py-8">
        {/* Header */}
        <header className="mb-8">
          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {blogPost.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {blogPost.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {blogPost.date}
            </span>
            <span className="flex items-center gap-1">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {blogPost.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative w-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl overflow-hidden mb-8">
            <Image src={IMAGES.bedroom} alt=""/>
          </div>
        </header>
        {/* Blog Body */}
        {/* <div
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-headings:font-bold prose-p:text-gray-600 prose-a:text-primary prose-strong:text-gray-800 prose-li:text-gray-600"
          dangerouslySetInnerHTML={{ __html: blogPost.content }}
        /> */}
        <p>
          Modern homes are becoming more compact, especially in urban areas
          where space optimization matters the most. The challenge of furnishing
          a small living space while maintaining both functionality and
          aesthetic appeal has led to innovative solutions in modern furniture
          design.
        </p>{" "}
        <br />
        <h2>The Rise of Multi-functional Furniture</h2>
        <p>
          Today's designers are creating pieces that serve multiple purposes
          without compromising on style. A coffee table that converts into a
          dining table, a sofa with hidden storage compartments, or a bed that
          transforms into a home office - these are just a few examples of how
          modern furniture is revolutionizing small space living.
        </p>
        <br />
        <p>
          Multi-functional furniture not only saves space but also reduces
          clutter, making your home feel more open and organized. The key is
          choosing pieces that blend seamlessly with your decor while providing
          practical solutions to everyday challenges.
        </p>
        <br />
        <h2>Smart Storage Solutions</h2>
        <p>
          One of the biggest challenges in small spaces is finding adequate
          storage. Modern furniture addresses this with cleverly integrated
          storage options. Ottomans with hidden compartments, beds with built-in
          drawers, and wall-mounted shelving units that utilize vertical space
          are becoming increasingly popular.
        </p>
        <br />
        <p>
          These solutions allow you to keep your belongings organized and out of
          sight, maintaining a clean, minimalist aesthetic that makes small
          spaces appear larger.
        </p>
        <br />
        <h2>Light and Visual Space</h2>
        <p>
          The choice of furniture also affects how light moves through your
          space. Modern designs often feature raised legs, allowing light to
          flow underneath and creating a sense of airiness. Glass and acrylic
          furniture pieces, while not traditional, can make a room feel more
          open by allowing visibility through them.
        </p>
        <br />
        <p>
          Mirrored surfaces and reflective materials are also effective at
          bouncing light around the room, creating the illusion of more space.
          When combined with a neutral color palette, these elements can
          transform even the smallest apartment into a comfortable, stylish
          living environment.
        </p>
      </article>
    </Container>
  );
};

export default BlogDetails;
