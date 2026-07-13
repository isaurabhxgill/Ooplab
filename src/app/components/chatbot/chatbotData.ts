// ─────────────────────────────────────────────────────────────────────────────
// Ooplab Chatbot — Static Q&A Data
// Edit this file to update questions and answers without touching any UI code.
// ─────────────────────────────────────────────────────────────────────────────

export interface ChatbotQA {
  id: string;
  question: string;
  answer: string;
  /** If true, renders a "Contact Us" CTA button after the answer. */
  showContactButton?: boolean;
}

export const WELCOME_MESSAGE =
  "Hi! 👋 Welcome to Ooplab. How can we help you today?";

export const chatbotQAs: ChatbotQA[] = [
  {
    id: "what-is-ooplab",
    question: "What is Ooplab?",
    answer:
      "Ooplab is a digital product studio that helps startups and enterprises build scalable web applications, mobile apps, AI-powered tools, and enterprise systems. We combine engineering excellence with thoughtful design to deliver products that perform — and products that grow.",
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "We offer a full spectrum of digital services:\n\n• Web Application Development\n• Mobile App Development (iOS & Android)\n• AI Integrations & Automation\n• UI/UX Design\n• Cloud Solutions & Infrastructure\n• Enterprise Systems & Backend Platforms\n\nEvery engagement is tailored to your goals — whether you're an early-stage startup or a scaling enterprise.",
  },
  {
    id: "products",
    question: "What products have you built?",
    answer:
      "We've shipped three flagship products:\n\n🚗 CarzPark — An AI-powered vehicle privacy & safety platform using smart QR tags and spam-protected messaging.\n\n📊 BharatExit — A verified marketplace for Indian micro-SaaS businesses with escrow, NDA-gated deal rooms, and automated metrics.\n\n🎪 EventSync — A real-time event staffing platform with GPS check-in, WhatsApp broadcasts, and UPI payouts for 12,400+ volunteers.",
  },
  {
    id: "custom-software",
    question: "Do you build custom software?",
    answer:
      "Absolutely. Custom software is at the heart of what we do. We work closely with you to understand your business model, users, and technical requirements — then architect and build a solution from the ground up. No templates, no shortcuts.",
  },
  {
    id: "technologies",
    question: "What technologies do you use?",
    answer:
      "Our stack is chosen for performance, reliability, and long-term maintainability:\n\n• Frontend: React, Next.js, TypeScript, Tailwind CSS\n• Mobile: React Native, Swift, Kotlin\n• Backend: Node.js, Python, Go\n• AI/ML: OpenAI, LangChain, custom model integrations\n• Cloud: AWS, GCP, Vercel, Firebase\n• Database: PostgreSQL, MongoDB, Redis\n\nWe adapt our stack to best fit each project's needs.",
  },
  {
    id: "start-project",
    question: "How can I start a project with Ooplab?",
    answer:
      "Getting started is simple:\n\n1. Reach out via our Contact page or book a consultation.\n2. We'll schedule a discovery call to understand your vision.\n3. Our team prepares a tailored proposal with scope, timeline, and cost.\n4. Once aligned, we kick off with a structured sprint-based delivery model.\n\nMost projects go from first call to delivery in 4–12 weeks.",
    showContactButton: true,
  },
  {
    id: "see-work",
    question: "Where can I see your work?",
    answer:
      "You can explore our products directly on this website — visit the Products section for in-depth case studies on CarzPark, BharatExit, and EventSync. Each case study covers the problem, the solution, and the key features we shipped.",
  },
  {
    id: "contact",
    question: "How can I contact Ooplab?",
    answer:
      "We'd love to hear from you! You can reach us through our Contact page to send a message, or book a consultation call directly. Our team typically responds within one business day.",
    showContactButton: true,
  },
];
