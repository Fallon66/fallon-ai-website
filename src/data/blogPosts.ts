export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  category: 'AI Automation' | 'ADHD Productivity' | 'Building in Public';
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "20000-emails-to-inbox-zero",
    title: "How I Cleared 20,000 Emails in 5 Days (No, Really)",
    excerpt: "The system that saved my sanity and transformed my ADHD email overwhelm into an automated workflow that actually works.",
    category: "ADHD Productivity",
    date: "2025-10-23",
    readTime: "8 min",
    content: "[Placeholder - Charlotte will write this post]"
  },
  {
    id: 2,
    slug: "why-ai-tools-fail-adhd-brains",
    title: "Why Most AI Tools Fail ADHD Brains",
    excerpt: "And how to build ones that don't. The neuroscience behind AI tools that actually work for executive dysfunction.",
    category: "AI Automation",
    date: "2025-10-22",
    readTime: "6 min",
    content: "[Placeholder - Charlotte will write this post]"
  },
  {
    id: 3,
    slug: "10-person-pilot-experiment",
    title: "Building in Public: My 10-Person Pilot Experiment",
    excerpt: "Testing before charging a penny. What I learned from giving away my services for free (and why you should too).",
    category: "Building in Public",
    date: "2025-10-21",
    readTime: "5 min",
    content: "[Placeholder - Charlotte will write this post]"
  }
];

// Helper function to get category colors
export const getCategoryColor = (category: BlogPost['category']): string => {
  switch (category) {
    case 'AI Automation':
      return 'teal';
    case 'ADHD Productivity':
      return 'coral';
    case 'Building in Public':
      return 'lavender';
    default:
      return 'gray';
  }
};

// Helper function to get Tailwind classes for category badges
export const getCategoryClasses = (category: BlogPost['category']): string => {
  switch (category) {
    case 'AI Automation':
      return 'bg-fallon-teal text-white';
    case 'ADHD Productivity':
      return 'bg-fallon-coral text-white';
    case 'Building in Public':
      return 'bg-fallon-lavender text-white';
    default:
      return 'bg-gray-200 text-gray-800';
  }
};
