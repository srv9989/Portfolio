export type ProjectKind = "featured" | "early";

export type Project = {
  title: string;
  slug: string;
  kind: ProjectKind;
  label: string;
  year: string;
  headline: string;
  summary: string;
  stack: string[];
  metrics?: string[];
  liveUrl?: string;
  repoUrl?: string;
  status: "Live" | "Case Study" | "Archive";
  widgetSize: "large" | "medium" | "small";
};

export const featuredProjects: Project[] = [
  {
    title: "Stack Overflow Prototype",
    slug: "stack-overflow-prototype",
    kind: "featured",
    label: "Distributed Q&A System",
    year: "2025",
    headline: "A containerized Q&A platform built around APIs, services, and event flow.",
    summary:
      "Built a full-stack Q&A prototype using Go APIs, Node.js services, MongoDB, Kafka, Docker, and Kubernetes.",
    stack: ["Go", "Node.js", "MongoDB", "Kafka", "Docker", "Kubernetes"],
    metrics: ["100+ concurrent users", "1K+ requests/day", "35% lower service latency"],
    repoUrl: "https://github.com/srv9989/Stack-Overflow",
    status: "Case Study",
    widgetSize: "large",
  },
  {
    title: "Cloud-Native Service Mesh",
    slug: "cloud-native-service-mesh",
    kind: "featured",
    label: "Infrastructure System",
    year: "2025",
    headline: "A service-mesh experiment focused on traffic routing, observability, and resilience.",
    summary:
      "Deployed Envoy sidecars in Kubernetes, built Go components for service discovery, and monitored system health with Prometheus.",
    stack: ["Go", "Kubernetes", "Envoy", "Prometheus", "gRPC", "Bash"],
    metrics: ["Dynamic routing", "TLS termination", "99.9% test uptime"],
    status: "Case Study",
    widgetSize: "large",
  },
  {
    title: "Eye AI Diagnosis App",
    slug: "eye-ai-diagnosis-app",
    kind: "featured",
    label: "AI Workflow",
    year: "2025",
    headline: "A multimodal AI pipeline combining vision, voice, and language models.",
    summary:
      "Built an AI-powered diagnostic workflow using ResNet, Whisper, Gemini Pro, LangChain, and voice-driven interaction.",
    stack: ["PyTorch", "ResNet", "LangChain", "Whisper", "Gemini Pro"],
    metrics: ["92% validation accuracy", "60% faster interpretation", "Voice-driven AI agent"],
    status: "Case Study",
    widgetSize: "large",
  },
];

export const earlyBuilds: Project[] = [
  {
    title: "MERN Notes App",
    slug: "mern-notes-app",
    kind: "early",
    label: "First Live Build",
    year: "2020",
    headline: "An early full-stack CRUD app that marked the start of my deployment journey.",
    summary:
      "A learning-stage MERN application focused on frontend-backend connection, CRUD flow, and live deployment.",
    stack: ["MongoDB", "Express", "React", "Node.js"],
    liveUrl: "https://mern-notes-app-1-sduh.onrender.com/",
    status: "Archive",
    widgetSize: "small",
  },
  {
    title: "PERN Todo",
    slug: "pern-todo",
    kind: "early",
    label: "Backend Foundation",
    year: "2020",
    headline: "An early backend-focused app exploring PostgreSQL-backed CRUD workflows.",
    summary:
      "A deployed PERN application focused on API behavior, PostgreSQL persistence, and full-stack data flow.",
    stack: ["PostgreSQL", "Express", "React", "Node.js"],
    liveUrl: "https://pern-todo-xi.vercel.app",
    status: "Archive",
    widgetSize: "small",
  },
];

export const projects = [...featuredProjects, ...earlyBuilds];