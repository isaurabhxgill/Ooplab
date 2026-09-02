export type ServiceCategory =
  | "Engineering"
  | "Design"
  | "Intelligence"
  | "Platform"
  | "Advisory";

export type Service = {
  slug: string;
  title: string;
  category: ServiceCategory;
  summary: string;
  deliverables: string[];
  stack: string[];
  /** bootstrap-icons class name */
  icon: string;
};

export const serviceCategories: ServiceCategory[] = [
  "Engineering",
  "Design",
  "Intelligence",
  "Platform",
  "Advisory",
];

export const services: Service[] = [
  /* ---------------------------------------------------------------- Engineering */
  {
    slug: "web-application-development",
    title: "Web Application Development",
    category: "Engineering",
    summary:
      "Production web applications built for speed, accessibility and scale — from dashboards and portals to full multi-tenant SaaS.",
    deliverables: [
      "Server-rendered app with sub-second navigation",
      "Role-based access and multi-tenant data isolation",
      "Component library and CI/CD pipeline",
    ],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
    icon: "bi-window-stack",
  },
  {
    slug: "ios-development",
    title: "iOS Development",
    category: "Engineering",
    summary:
      "Native iPhone and iPad apps that feel like they belong on the platform — fluid, offline-capable and App Store ready.",
    deliverables: [
      "Native SwiftUI application",
      "Offline-first sync and push notifications",
      "TestFlight beta and App Store submission",
    ],
    stack: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
    icon: "bi-apple",
  },
  {
    slug: "android-development",
    title: "Android Development",
    category: "Engineering",
    summary:
      "Native Android apps engineered for the full spread of real devices, not just flagships — tested down to entry-level hardware.",
    deliverables: [
      "Jetpack Compose application",
      "Background work and offline persistence",
      "Play Console release and staged rollout",
    ],
    stack: ["Kotlin", "Jetpack Compose", "Room", "Coroutines"],
    icon: "bi-android2",
  },
  {
    slug: "mobile-application-development",
    title: "Mobile Application Development",
    category: "Engineering",
    summary:
      "One cross-platform codebase shipping to both stores, with native modules wherever the experience genuinely needs them.",
    deliverables: [
      "Shared iOS and Android codebase",
      "Native modules for camera, biometrics and payments",
      "Over-the-air update channel",
    ],
    stack: ["React Native", "Expo", "Flutter", "TypeScript"],
    icon: "bi-phone",
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    category: "Engineering",
    summary:
      "Systems shaped around how your business actually works, for the operations no off-the-shelf product will ever fit.",
    deliverables: [
      "Domain model and technical architecture",
      "Bespoke internal tooling and admin surfaces",
      "Migration from spreadsheets or legacy systems",
    ],
    stack: ["Node.js", "Python", "PostgreSQL", "Redis"],
    icon: "bi-code-slash",
  },
  {
    slug: "api-backend-engineering",
    title: "API & Backend Engineering",
    category: "Engineering",
    summary:
      "The layer everything else depends on: typed, versioned, documented APIs that stay fast as load and team size grow.",
    deliverables: [
      "REST and GraphQL APIs with generated clients",
      "Event-driven services and queue workers",
      "OpenAPI documentation and contract tests",
    ],
    stack: ["Node.js", "Go", "GraphQL", "Kafka"],
    icon: "bi-braces-asterisk",
  },
  {
    slug: "enterprise-systems-integration",
    title: "Enterprise Systems Integration",
    category: "Engineering",
    summary:
      "Connecting ERP, CRM, payments and internal services into one coherent flow, so data stops being re-keyed between systems.",
    deliverables: [
      "Integration architecture and data contracts",
      "Resilient connectors with retry and reconciliation",
      "Audit logging and failure alerting",
    ],
    stack: ["SAP", "Salesforce", "Webhooks", "RabbitMQ"],
    icon: "bi-diagram-3",
  },

  /* -------------------------------------------------------------------- Design */
  {
    slug: "user-experience-design",
    title: "User Experience Design (UED)",
    category: "Design",
    summary:
      "Research, flows and prototypes that settle the hard product questions before a line of production code is written.",
    deliverables: [
      "User research and journey mapping",
      "Interactive prototypes for validation",
      "Usability testing with findings and fixes",
    ],
    stack: ["Figma", "Maze", "Journey mapping", "A/B testing"],
    icon: "bi-compass",
  },
  {
    slug: "ui-design-systems",
    title: "UI Design & Design Systems",
    category: "Design",
    summary:
      "Interface design plus the system behind it — tokens, components and rules, so the tenth screen is as considered as the first.",
    deliverables: [
      "Design system with tokens and components",
      "Light and dark themes, accessibility built in",
      "Figma-to-code component parity",
    ],
    stack: ["Figma", "Storybook", "Tailwind", "Radix"],
    icon: "bi-layers",
  },
  {
    slug: "web-design",
    title: "Web Design",
    category: "Design",
    summary:
      "Marketing sites that carry the brand and convert — fast, responsive, and genuinely distinctive rather than templated.",
    deliverables: [
      "Responsive design across every breakpoint",
      "Motion and interaction specification",
      "CMS-ready page and content models",
    ],
    stack: ["Figma", "Next.js", "GSAP", "Sanity"],
    icon: "bi-brush",
  },
  {
    slug: "brand-visual-identity",
    title: "Brand & Visual Identity",
    category: "Design",
    summary:
      "The identity layer — mark, palette, type and voice — documented well enough that anyone can apply it without you in the room.",
    deliverables: [
      "Logo system and colour architecture",
      "Typography scale and usage rules",
      "Brand guidelines and asset library",
    ],
    stack: ["Illustrator", "Figma", "Type systems", "Guidelines"],
    icon: "bi-palette",
  },

  /* -------------------------------------------------------------- Intelligence */
  {
    slug: "ai-llm-integration",
    title: "AI & LLM Integration",
    category: "Intelligence",
    summary:
      "Language models wired into your product where they earn their place — grounded in your data, evaluated, and cost-controlled.",
    deliverables: [
      "Retrieval pipeline over your own content",
      "Evaluation harness and quality guardrails",
      "Token cost monitoring and caching",
    ],
    stack: ["Claude API", "RAG", "Vector search", "Evals"],
    icon: "bi-cpu",
  },
  {
    slug: "data-engineering-analytics",
    title: "Data Engineering & Analytics",
    category: "Intelligence",
    summary:
      "Pipelines, warehouse and dashboards that make the numbers trustworthy enough to actually decide on.",
    deliverables: [
      "ETL pipelines and warehouse modelling",
      "Product analytics instrumentation",
      "Executive dashboards and alerting",
    ],
    stack: ["BigQuery", "dbt", "Airflow", "Metabase"],
    icon: "bi-database",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    category: "Intelligence",
    summary:
      "Removing the manual steps between systems — the recurring copy-paste work that quietly consumes a team's week.",
    deliverables: [
      "Process audit and automation roadmap",
      "Automated workflows with human approval gates",
      "Exception handling and monitoring",
    ],
    stack: ["Temporal", "n8n", "Webhooks", "Cron"],
    icon: "bi-lightning-charge",
  },

  /* ------------------------------------------------------------------ Platform */
  {
    slug: "cloud-architecture-devops",
    title: "Cloud Architecture & DevOps",
    category: "Platform",
    summary:
      "Infrastructure as code, environments that match, and deploys that are boring — because deploys should be boring.",
    deliverables: [
      "Infrastructure as code across all environments",
      "CI/CD with preview deployments",
      "Observability, logging and on-call alerting",
    ],
    stack: ["AWS", "Terraform", "Docker", "Kubernetes"],
    icon: "bi-cloud",
  },
  {
    slug: "software-testing",
    title: "Software Testing",
    category: "Platform",
    summary:
      "Automated coverage across unit, integration and end-to-end — the safety net that lets a team ship on Friday.",
    deliverables: [
      "Test strategy and coverage targets",
      "End-to-end suites running in CI",
      "Visual regression and load testing",
    ],
    stack: ["Playwright", "Vitest", "k6", "GitHub Actions"],
    icon: "bi-bug",
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance Engineering",
    category: "Platform",
    summary:
      "Threat modelling, hardening and audit trails — built in from the start rather than bolted on before a certification deadline.",
    deliverables: [
      "Threat model and dependency auditing",
      "Authentication, authorisation and encryption review",
      "SOC 2 / GDPR / HIPAA readiness",
    ],
    stack: ["OWASP", "Snyk", "Auth0", "Vault"],
    icon: "bi-shield-check",
  },
  {
    slug: "performance-engineering",
    title: "Performance Engineering",
    category: "Platform",
    summary:
      "Making an existing product measurably faster, with Core Web Vitals and database time as the scoreboard.",
    deliverables: [
      "Performance audit with prioritised findings",
      "Core Web Vitals remediation",
      "Query optimisation and caching strategy",
    ],
    stack: ["Lighthouse", "OpenTelemetry", "Redis", "CDN"],
    icon: "bi-speedometer2",
  },

  /* ------------------------------------------------------------------ Advisory */
  {
    slug: "digital-product-strategy",
    title: "Digital Product Strategy",
    category: "Advisory",
    summary:
      "Turning an ambition into a sequenced roadmap — what to build, in what order, and just as importantly what to leave out.",
    deliverables: [
      "Market and competitor analysis",
      "Product roadmap with release sequencing",
      "Success metrics and measurement plan",
    ],
    stack: ["Discovery", "Roadmapping", "OKRs", "Analytics"],
    icon: "bi-clipboard-data",
  },
  {
    slug: "mvp-rapid-prototyping",
    title: "MVP & Rapid Prototyping",
    category: "Advisory",
    summary:
      "A real, usable product in front of real users in weeks — built to be extended, not thrown away.",
    deliverables: [
      "Working MVP in six to ten weeks",
      "Core flow instrumented for learning",
      "Architecture that survives the next phase",
    ],
    stack: ["Next.js", "Supabase", "Vercel", "Stripe"],
    icon: "bi-rocket-takeoff",
  },
  {
    slug: "technical-due-diligence",
    title: "Technical Due Diligence",
    category: "Advisory",
    summary:
      "An independent read on a codebase before you acquire, invest in, or take ownership of it.",
    deliverables: [
      "Code quality and architecture assessment",
      "Security, licence and dependency risk register",
      "Remediation estimate and team evaluation",
    ],
    stack: ["Static analysis", "Architecture review", "Risk register"],
    icon: "bi-search",
  },
  {
    slug: "managed-support",
    title: "Managed Support & SLA",
    category: "Advisory",
    summary:
      "Ongoing ownership after launch — monitoring, patching and iteration under a response time you can hold us to.",
    deliverables: [
      "Defined response and resolution SLAs",
      "Proactive monitoring and dependency updates",
      "Monthly roadmap and iteration cycle",
    ],
    stack: ["PagerDuty", "Sentry", "Dependabot", "Runbooks"],
    icon: "bi-life-preserver",
  },
];

export type EngagementModel = {
  name: string;
  tagline: string;
  description: string;
  bestFor: string;
  points: string[];
  icon: string;
};

export const engagementModels: EngagementModel[] = [
  {
    name: "Dedicated Squad",
    tagline: "An embedded team",
    description:
      "A cross-functional squad — engineering, design and QA — working as an extension of your team on a monthly basis.",
    bestFor: "Funded teams with a continuous roadmap",
    points: [
      "Fixed monthly capacity",
      "Your tools, your rituals, your board",
      "Scale the squad up or down each quarter",
    ],
    icon: "bi-people",
  },
  {
    name: "Fixed-Scope Build",
    tagline: "A defined outcome",
    description:
      "A specified deliverable against an agreed timeline and price, with milestones and acceptance criteria written up front.",
    bestFor: "Well-defined projects with a hard deadline",
    points: [
      "Priced and scoped before we start",
      "Milestone-based delivery and payment",
      "Handover package and documentation",
    ],
    icon: "bi-bounding-box",
  },
  {
    name: "Fractional CTO",
    tagline: "Senior ownership, part-time",
    description:
      "Technical leadership without a full-time hire — architecture decisions, hiring, vendor selection and code review.",
    bestFor: "Early-stage teams without a senior technical lead",
    points: [
      "Architecture and technology decisions",
      "Engineering hiring and interviewing",
      "Code review and delivery oversight",
    ],
    icon: "bi-person-workspace",
  },
];

export type ProcessStep = {
  phase: string;
  title: string;
  duration: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    phase: "01",
    title: "Discover",
    duration: "1–2 weeks",
    description:
      "We map the problem, the users and the constraints, and agree what success will be measured by.",
  },
  {
    phase: "02",
    title: "Design",
    duration: "2–4 weeks",
    description:
      "Flows, interfaces and a clickable prototype — validated with real users before engineering begins.",
  },
  {
    phase: "03",
    title: "Build",
    duration: "6–16 weeks",
    description:
      "Two-week sprints with a working, deployed increment at the end of each one. Nothing is a surprise at the end.",
  },
  {
    phase: "04",
    title: "Launch",
    duration: "1–2 weeks",
    description:
      "Hardening, load testing, store submission and a monitored rollout with a rehearsed rollback plan.",
  },
  {
    phase: "05",
    title: "Scale",
    duration: "Ongoing",
    description:
      "Iteration against real usage data, performance work, and capacity that grows with the product.",
  },
];
