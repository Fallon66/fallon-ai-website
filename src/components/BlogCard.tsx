import { Link } from 'react-router-dom';
import { Clock, Calendar } from 'lucide-react';
import { BlogPost, getCategoryClasses } from '../data/blogPosts';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`} className="block group">
      <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 h-full border border-gray-100 hover:glass-card">
        <div className="flex items-center gap-3 mb-4">
          <span className={`${getCategoryClasses(post.category)} px-4 py-1.5 rounded-full text-sm font-semibold transition-transform duration-300 group-hover:scale-110`}>
            {post.category}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-fallon-teal transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-gray-600 text-lg mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <div className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-fallon-teal">
            <Calendar size={16} />
            <span>{new Date(post.date).toLocaleDateString('en-GB', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            })}</span>
          </div>
          <div className="flex items-center gap-1.5 transition-colors duration-300 group-hover:text-fallon-teal">
            <Clock size={16} />
            <span>{post.readTime}</span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <span className="text-fallon-teal font-semibold group-hover:underline inline-flex items-center gap-2">
            Read more <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
