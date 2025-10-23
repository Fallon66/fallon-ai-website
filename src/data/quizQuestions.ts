export interface QuizOption {
  text: string;
  points: number;
  tag?: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  type: 'single' | 'text';
  options?: QuizOption[];
  category?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How many unread emails do you have right now?",
    type: 'single',
    options: [
      { text: "Under 50", points: 2 },
      { text: "50-500", points: 4 },
      { text: "500-5000", points: 6 },
      { text: "What's an inbox zero?", points: 10 }
    ]
  },
  {
    id: 2,
    question: "When you hear 'AI automation,' you think:",
    type: 'single',
    options: [
      { text: "Scary robot overlords", points: 2 },
      { text: "ChatGPT?", points: 4 },
      { text: "I've tried tools but got stuck", points: 8 },
      { text: "I'm already using Zapier/Make but want more", points: 10 }
    ]
  },
  {
    id: 3,
    question: "How many hours/week do you spend on repetitive tasks?",
    type: 'single',
    options: [
      { text: "Under 5", points: 2 },
      { text: "5-10", points: 6 },
      { text: "10-20", points: 8 },
      { text: "I live in email/admin hell", points: 10 }
    ]
  },
  {
    id: 4,
    question: "Are you neurodivergent (ADHD, autism, etc)?",
    type: 'single',
    category: 'context',
    options: [
      { text: "Yes", points: 0 },
      { text: "No", points: 0 },
      { text: "Suspected but not diagnosed", points: 0 }
    ]
  },
  {
    id: 5,
    question: "What's your biggest time drain?",
    type: 'single',
    options: [
      { text: "Email management", points: 0, tag: "email" },
      { text: "Social media/content", points: 0, tag: "content" },
      { text: "Lead generation", points: 0, tag: "leads" },
      { text: "Meeting notes/admin", points: 0, tag: "admin" }
    ]
  },
  {
    id: 6,
    question: "Have you tried AI tools before?",
    type: 'single',
    options: [
      { text: "Never", points: 2 },
      { text: "Played with ChatGPT", points: 4 },
      { text: "Built some workflows", points: 8 },
      { text: "I'm in deep but need help", points: 10 }
    ]
  },
  {
    id: 7,
    question: "How comfortable are you with tech?",
    type: 'single',
    options: [
      { text: "I barely use my phone", points: 2 },
      { text: "I can google things", points: 6 },
      { text: "I'm pretty tech-savvy", points: 8 },
      { text: "I code/build stuff", points: 10 }
    ]
  },
  {
    id: 8,
    question: "What would free up 10 hours/week let you do?",
    type: 'single',
    options: [
      { text: "Actually work ON my business", points: 0, tag: "growth" },
      { text: "Spend time with family", points: 0, tag: "life" },
      { text: "Finally start that project", points: 0, tag: "creative" },
      { text: "Sleep, honestly", points: 0, tag: "burnout" }
    ]
  },
  {
    id: 9,
    question: "Why haven't you automated yet?",
    type: 'single',
    options: [
      { text: "Don't know where to start", points: 0, tag: "confusion" },
      { text: "Tried but got overwhelmed", points: 0, tag: "complexity" },
      { text: "Too expensive", points: 0, tag: "cost" },
      { text: "Don't trust AI", points: 0, tag: "trust" }
    ]
  },
  {
    id: 10,
    question: "If I could automate ONE thing for you right now, what would it be?",
    type: 'text'
  }
];

export interface QuizResult {
  title: string;
  description: string;
  cta: string;
  ctaLink: string;
  minScore: number;
  maxScore: number;
}

export const quizResults: QuizResult[] = [
  {
    title: "You're Managing (For Now)",
    description: "You're keeping things under control, but there's potential to free up even more time. AI automation could be your secret weapon for the future.",
    cta: "Join waitlist for tips",
    ctaLink: "#newsletter",
    minScore: 0,
    maxScore: 30
  },
  {
    title: "You're Ready for AI",
    description: "You're starting to feel the squeeze of repetitive tasks. You're at the perfect stage to introduce AI automation and see immediate results.",
    cta: "Join pilot waitlist",
    ctaLink: "#newsletter",
    minScore: 31,
    maxScore: 60
  },
  {
    title: "You NEED This Yesterday",
    description: "Time is your scarcest resource right now. AI automation isn't a nice-to-have anymore - it's essential. Let's get you back in control.",
    cta: "Apply for pilot (priority)",
    ctaLink: "#newsletter",
    minScore: 61,
    maxScore: 80
  },
  {
    title: "Welcome to the Chaos Club",
    description: "You're drowning in tasks and you know it. The good news? You're exactly who AI automation was built for. Let's turn this chaos into calm.",
    cta: "Skip the line - book call",
    ctaLink: "#newsletter",
    minScore: 81,
    maxScore: 100
  }
];
