export const personal = {
  name: "Shikhar Verma",
  firstName: "Shikhar",
  lastName: "Verma",
  title: "Computer Science Engineer & Software Developer",
  tagline: "Building scalable, data-driven software with AI/ML and cloud-native architecture.",
  email: "shikharverma2311@gmail.com",
  phone: "+91 8887537698",
  location: "Greater Noida, Uttar Pradesh, India",
  linkedin: "https://www.linkedin.com/in/shikhar-verma07",
  awsCertUrl:
    "https://drive.google.com/file/d/1M_62gCrFaVVpIR0gPfnhvqaEL-K1VFaP/view?usp=sharing",
  summary:
    "Computer Science and Engineering undergraduate with internship experience at Aditya Birla Group and the Ministry of New and Renewable Energy, Government of India. Strong foundation in data structures, algorithms, object-oriented programming, system design, automation, and full-stack development using C++, Python, Java, and modern web technologies. Built real-world projects including an IRCTC automation system and ChronoGann, an AI/ML and Generative AI-powered market research platform. AWS Cloud Foundations certified, with knowledge of cloud architecture, deployment workflows, and services including EC2, S3, and IAM.",
};

export const heroSubtitles = [
  "Full-Stack & Backend Developer",
  "AI/ML & Generative AI Enthusiast",
  "AWS Certified Cloud Practitioner",
  "Ministry of MNRE Intern Alumni",
];

export const experience = [
  {
    id: "aditya-birla-intern",
    role: "IT Intern",
    company: "Aditya Birla Group",
    location: "Renukoot, Uttar Pradesh",
    period: "June 2026 - Present",
    type: "Industry Internship",
    highlights: [
      "Designing and developing ChronoGann, a quantitative time-cycle analysis platform.",
      "Assisted in troubleshooting software issues, ensuring minimal disruption to daily operations.",
      "Implementing data visualization, backtesting, and analytical tools for market research.",
    ],
  },
  {
    id: "mnre-intern",
    role: "Software Engineer Intern",
    company: "Ministry of New and Renewable Energy",
    location: "Delhi, India",
    period: "Jul 2025 - Sep 2025",
    type: "Government Internship",
    highlights: [
      "Performed software testing, bug identification, and validation to improve application reliability and functionality.",
      "Assisted in gathering requirements, documenting technical specifications, and planning future software enhancements aligned with organizational objectives.",
      "Maintained and updated software applications, web pages, and databases to improve system stability, usability, and performance.",
      "Collaborated with cross-functional teams to analyze workflows, troubleshoot issues, and support ongoing software development initiatives.",
      "Contributed to application maintenance, data management, and process optimization to enhance operational efficiency.",
    ],
  },
];

export const education = {
  degree: "B.Tech - Computer Science and Engineering (CSE)",
  institution: "Bennett University",
  location: "Greater Noida",
  period: "Aug 2024 - Aug 2028",
  gpa: "8.54 / 10",
  highlights: [
    "In Tech Team AWS Cloud Solutions",
    "Received Scholarship on JEE MAINS score",
    "Currently completing course in Computer Science",
  ],
};

export const projects = [
  {
    id: "chronogann",
    title: "ChronoGann",
    subtitle: "AI/ML-Powered Quantitative Time-Cycle Analysis Platform",
    period: "Apr 2026 - Jun 2026",
    category: "AI/ML",
    description:
      "Quantitative market research platform inspired by W.D. Gann's time-cycle theory for stocks, indices, forex, commodities, and crypto. Features cycle projection, convergence detection, historical backtesting, ML-based confidence scoring, and GenAI-generated research summaries.",
    tech: [
      "Next.js",
      "FastAPI",
      "Python",
      "PostgreSQL",
      "AWS Lambda",
      "Machine Learning",
      "Generative AI",
    ],
    highlights: [
      "Implemented cycle projection, convergence detection, and historical backtesting to identify potential market reaction zones.",
      "Added ML-based confidence scoring and GenAI-generated research summaries for cycle behavior and market context.",
      "Designed a cost-efficient serverless architecture using AWS Lambda, FastAPI, and PostgreSQL.",
    ],
    github: "https://github.com/Shikhar2818/chronogann",
    demo: "#",
    featured: true,
  },
  {
    id: "digital-psychological-intervention",
    title: "Digital Psychological Intervention Platform",
    subtitle: "Student Mental Health Support Platform",
    period: "GitHub Project",
    category: "Full Stack",
    description:
      "Comprehensive mental health support platform for college students with counselling bookings, mental health screenings, educational resources, and AI-powered chat support.",
    tech: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "MongoDB",
      "Docker",
    ],
    highlights: [
      "Built role-based student, counsellor, and admin workflows with protected routes and JWT authentication.",
      "Implemented PHQ-9 and GAD-7 screening flows with severity analysis and anonymized admin analytics.",
      "Added counselling bookings, multilingual resources, email notifications, and chatbot-ready support flows.",
    ],
    github:
      "https://github.com/Shikhar2818/Digital-Psychological-Intervention-Platform",
    demo: "#",
    featured: false,
  },
  {
    id: "pdf-hub",
    title: "PDF Hub",
    subtitle: "PDF Tools SaaS Platform",
    period: "GitHub Project",
    category: "Full Stack",
    description:
      "Production-grade PDF tools SaaS foundation with authenticated dashboards, usage limits, file history, billing-ready APIs, storage abstraction, and worker-based PDF processing.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "FastAPI",
    ],
    highlights: [
      "Designed protected account, dashboard, history, files, billing, and settings routes using Auth.js.",
      "Integrated Prisma data models for users, tool runs, file assets, usage counters, and billing hooks.",
      "Connected a Python FastAPI worker pipeline for PDF jobs including merge, split, OCR, and AI-ready tools.",
    ],
    github: "https://github.com/Shikhar2818/pdf-hub",
    demo: "#",
    featured: false,
  },
  {
    id: "irctc-automation",
    title: "IRCTC Ticket Booking Automation",
    subtitle: "End-to-End Web Automation System",
    period: "Jan 2025 - Mar 2025",
    category: "Automation",
    description:
      "End-to-end IRCTC ticket booking automation covering login, train search, quota/class selection, and passenger data entry with OCR-based captcha handling and modular architecture.",
    tech: ["Python", "Selenium", "WebDriver", "Tesseract OCR"],
    highlights: [
      "Built an end-to-end IRCTC ticket booking automation system covering login, train search, quota/class selection, and passenger data entry.",
      "Improved reliability with dynamic element handling, explicit waits, and exception management for asynchronous web pages.",
      "Integrated OCR-based captcha handling and designed a modular structure for easier debugging and maintenance.",
    ],
    github: "#",
    demo: "https://youtu.be/vWGo01reMkU?si=TbT4nZyhFYtWlVKc",
    demoLabel: "Watch Demo",
    disclaimer:
      "This project was built strictly for personal testing and learning purposes. It has not violated IRCTC policies, is not publicly available, and is not intended for commercial or unauthorized use.",
    featured: true,
  },
];

export const projectCategories = ["All", "AI/ML", "Full Stack", "Automation"];

export const skillCategories = [
  {
    id: "languages",
    title: "Programming Languages",
    icon: "Code2",
    color: "emerald",
    skills: ["Python", "Java", "C++", "JavaScript", "Go"],
  },
  {
    id: "frameworks-libraries",
    title: "Frameworks & Libraries",
    icon: "Brain",
    color: "blue",
    skills: [
      "FastAPI",
      "Django",
      "Selenium",
      "NumPy",
      "Pandas",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    icon: "Globe",
    color: "violet",
    skills: ["React", "AstroJS", "Tailwind CSS", "REST APIs"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Cloud",
    color: "cyan",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    id: "cloud-tools",
    title: "Cloud & Tools",
    icon: "Layers",
    color: "emerald",
    skills: ["AWS", "Docker", "Git", "GitHub"],
  },
  {
    id: "core-cs",
    title: "Core CS",
    icon: "Layers",
    color: "blue",
    skills: [
      "Data Structures & Algorithms",
      "OOP",
      "Software Testing",
      "System Design",
    ],
  },
];

export const certificates = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    url: "https://drive.google.com/file/d/1M_62gCrFaVVpIR0gPfnhvqaEL-K1VFaP/view?usp=sharing",
    verified: true,
  },
  {
    name: "Modern Database Systems",
    issuer: "Academic / Professional",
    verified: false,
  },
  {
    name: "Quantitative Research",
    issuer: "Academic / Professional",
    verified: false,
  },
  {
    name: "Investment Banking",
    issuer: "Academic / Professional",
    verified: false,
  },
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shikhar-verma07",
    icon: "Linkedin",
  },
  {
    name: "Email",
    url: "mailto:shikharverma2311@gmail.com",
    icon: "Mail",
  },
  {
    name: "AWS Certificate",
    url: "https://drive.google.com/file/d/1M_62gCrFaVVpIR0gPfnhvqaEL-K1VFaP/view?usp=sharing",
    icon: "Award",
  },
];

export const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/projects", label: "Projects" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];
