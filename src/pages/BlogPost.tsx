import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2 } from 'lucide-react';
import { blogPosts, getCategoryClasses } from '../data/blogPosts';
import BlogCard from '../components/BlogCard';
import Newsletter from '../components/Newsletter';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-fallon-teal/5 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-fallon-teal font-semibold hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Get related posts (same category, exclude current post)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-fallon-teal/5">
      {/* Back Button */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-fallon-teal transition-colors font-semibold"
          >
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
        </div>
      </div>

      {/* Article Header */}
      <article className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Category Badge */}
          <div className="mb-6">
            <span className={`${getCategoryClasses(post.category)} px-5 py-2 rounded-full text-sm font-semibold inline-block`}>
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Excerpt */}
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-12 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2 text-gray-500">
              <Calendar size={20} />
              <span className="text-lg">
                {new Date(post.date).toLocaleDateString('en-GB', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </span>
            </div>
            <div className="flex items-center gap-2 text-gray-500">
              <Clock size={20} />
              <span className="text-lg">{post.readTime} read</span>
            </div>
            <button className="ml-auto flex items-center gap-2 text-gray-600 hover:text-fallon-teal transition-colors font-semibold">
              <Share2 size={20} />
              <span>Share</span>
            </button>
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="bg-fallon-lavender/10 border-l-4 border-fallon-lavender p-8 rounded-r-xl mb-12">
              <p className="text-2xl font-semibold text-gray-900 mb-0">
                {post.content}
              </p>
              <p className="text-lg text-gray-600 mt-4 mb-0">
                Charlotte will write the full post content here. This placeholder shows where the article will appear.
              </p>
            </div>

            {/* Table of Contents Placeholder */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-12 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">In This Post</h2>
              <ul className="space-y-3 text-lg text-gray-600">
                <li className="hover:text-fallon-teal transition-colors cursor-pointer">
                  → Section 1: [Charlotte will add]
                </li>
                <li className="hover:text-fallon-teal transition-colors cursor-pointer">
                  → Section 2: [Charlotte will add]
                </li>
                <li className="hover:text-fallon-teal transition-colors cursor-pointer">
                  → Section 3: [Charlotte will add]
                </li>
              </ul>
            </div>

            {/* Content Sections Placeholder */}
            <div className="space-y-8 mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                This is where Charlotte's engaging, personality-filled content will live. Each post will include:
              </p>

              <ul className="space-y-4 text-xl text-gray-700">
                <li>✅ Real stories and experiences</li>
                <li>✅ Actionable takeaways</li>
                <li>✅ ADHD-friendly formatting (short paragraphs, bullet points, visual breaks)</li>
                <li>✅ Charlotte's signature voice (honest, funny, relatable)</li>
              </ul>

              <div className="bg-gradient-to-r from-fallon-teal/10 to-fallon-lavender/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Takeaway</h3>
                <p className="text-xl text-gray-700 mb-0">
                  Each post will have highlighted key insights like this, making it easy for readers to scan and remember the important bits.
                </p>
              </div>
            </div>
          </div>

          {/* Author CTA */}
          <div className="mt-16 bg-gradient-to-r from-fallon-teal to-fallon-lavender rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-bold mb-4">Want help automating your chaos?</h3>
            <p className="text-xl mb-6 opacity-90">
              Book a free discovery call and let's talk about building AI systems that actually work for your brain.
            </p>
            <Link
              to="/"
              className="inline-block bg-white text-fallon-teal px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300"
            >
              Book Discovery Call
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="pb-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
              More from {post.category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((relatedPost) => (
                <BlogCard key={relatedPost.id} post={relatedPost} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <Newsletter />
    </div>
  );
}
