import { Project, Experience, Blog } from "./types";

export const PERSONAL_INFO = {
  name: "Rijan Shrestha",
  title: "",
  bio: "Building intelligent systems and pixel-perfect interfaces. Specializing in deep learning, speech synthesis, and modern web applications.",
  location: "Kathmandu, Nepal",
  email: "csaijspy@gmail.com",
  phone: "9865271896",
  github: "https://github.com/Rijan-Joshi",
  linkedin:
    "https://www.linkedin.com/in/rijan-shrestha-6a72b3299/?skipRedirect=true",
  portfolio: "#",
};

export const PROJECTS: Project[] = [
  {
    id: "0",
    title: "Research Paper / Architecture Implementation & Experimentation",
    description: `From-scratch implementation of neural network architectures and research papers. Every component (layer, optimizer, training loop, etc.) is built using NumPy (for low-level ops) or PyTorch Tensors (for CUDA/auto-differentiation).`,
    techStack: [
      "Python",
      "NumPy",
      "Deep Learning",
      "Machine Learning",
      "PyTorch",
      "Matplotlib",
    ],
    link: "#",
    github: "https://github.com/Rijan-Joshi/Paper-Reproduction",
  },
  {
    id: "1",
    title: "Redis-like In-Memory DB",
    description:
      "A high-performance custom Redis server implementation in Python. Features concurrent client handling via TCP, primary-replica replication, transaction support, and RDB persistence mechanisms.",
    techStack: ["Python", "TCP/IP", "Asyncio", "Distributed Systems"],
    link: "#",
    github:
      "https://github.com/Rijan-Joshi/Rijan-Joshi-codecrafters-redis-python",
  },
  {
    id: "3",
    title: "Voice Cloner",
    description:
      "A voice cloning system that combines MeloTTS and OpenVoice to generate high-quality, natural-sounding voice from text using voice cloning technology.",
    techStack: ["TensorFlow", "Deep Learning", "Python", "NLP"],
    link: "#",
    github: "https://github.com/Rijan-Joshi",
  },
  {
    id: "2",
    title: "RNN Music Composer",
    description:
      "Generative AI model utilizing Recurrent Neural Networks (RNN) to predict and compose original sheet music in ABC notation. Trained on a dataset of folk tunes to generate coherent musical structures.",
    techStack: ["TensorFlow", "Deep Learning", "Python", "NLP"],
    link: "#",
    github: "https://github.com/Rijan-Joshi",
  },

  {
    id: "4",
    title: "Job Finder Mobile App",
    description:
      "A cross-platform mobile application for job searching with a focus on UX. Features advanced filtering, easy application flows, and a modern, responsive interface built with React Native.",
    techStack: ["React Native", "Expo", "Redux", "Mobile UI"],
    link: "#",
    github: "https://github.com/Rijan-Joshi/JobSearch",
  },
  {
    id: "5",
    title: "Rock Paper Scissors Game",
    description:
      "A simple and fun rock paper scissors game built with React. Features a modern, responsive interface built with React.",
    techStack: ["React", "HTML", "CSS", "JavaScript"],
    link: "https://rock-paper-scissors-by-rijan.netlify.app/",
    github: "https://github.com/Rijan-Joshi",
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: "1",
    role: "AI/ML Intern",
    company: "Next Wave AI",
    period: "Feb 2025 – June 2025",
    location: "Remote",
    logo: "/assets/NXT.jpeg",
    description: [
      "Optimized 10+ deep learning models for speech, emotion, and personality recognition.",
      "Implemented state-of-the-art research papers on depression detection and voice analysis.",
      "Built a Voice Cloning System using OpenVoice and MeloTTS for high-fidelity speech synthesis.",
      "Developed a resume generator pipeline converting YAML data to formatted PDFs.",
    ],
  },
  {
    id: "2",
    role: "Data Science Fellow",
    company: "SSRC (Datacamp)",
    period: "Feb 2025 – Present",
    location: "Remote",
    logo: "/assets/SSRC.jpeg",
    description: [
      "Completed 5+ comprehensive data science projects involving cleaning, visualization, and statistical modeling.",
      "Mastered advanced machine learning workflows and data analysis techniques.",
    ],
  },
  {
    id: "3",
    role: "UI/UX Designer",
    company: "StatDuck",
    period: "Apr 2024 – Jun 2024",
    location: "Remote",
    logo: "/assets/statduck.jpeg",
    description: [
      "Designed intuitive Web3 interfaces for an AI-powered analytics platform using Figma.",
      "Prototyped and resolved complex UI/UX challenges using no-code tools like Bubble, improving user retention.",
    ],
  },
];

export const BLOGS: Blog[] = [
  {
    id: "b1",
    title: "The State of Voice Cloning in 2025",
    date: "August 15, 2025",
    excerpt:
      "Exploring the ethical implications and technical advancements in OpenVoice and MeloTTS.",
    url: "/blog/b1",
    tags: ["AI", "Voice Synthesis", "Ethics"],
    content: `
      <p>Voice cloning technology has seen rapid advancements in the past year, moving from experimental research to production-ready systems. In this post, I explore the architecture behind tools like OpenVoice and MeloTTS.</p>
      
      <h3>The Rise of Zero-Shot Cloning</h3>
      <p>Traditionally, TTS systems required hours of fine-tuning. New models can now clone a voice with just a few seconds of reference audio. This is achieved through advanced speaker embedding extraction and flow-matching techniques.</p>
      
      <h3>Ethical Considerations</h3>
      <p>With great power comes great responsibility. The ability to clone voices raises significant concerns regarding deepfakes and consent. As developers, we must implement watermarking and verification standards to ensure safe usage.</p>
      
      <h3>Technical Implementation</h3>
      <p>During my internship at Next Wave AI, I implemented a pipeline that separates tone, color, and rhythm. This allows for fine-grained control over the generated speech, making it sound more natural and less robotic compared to previous generations.</p>
    `,
  },
  // {
  //   id: "b2",
  //   title: "Designing for Web3: A UX Perspective",
  //   date: "July 02, 2025",
  //   excerpt:
  //     "How to simplify blockchain complexity through intuitive component design and visual feedback.",
  //   url: "/blog/b2",
  //   tags: ["UI/UX", "Web3", "Design Systems"],
  //   content: `
  //     <p>Web3 applications are notorious for their steep learning curve. Wallet connections, gas fees, and transaction hashes are foreign concepts to most users. As UI/UX designers, our job is to abstract this complexity.</p>

  //     <h3>Masking Complexity</h3>
  //     <p>At StatDuck, we focused on "progressive disclosure." Users shouldn't see a raw hexadecimal address unless they explicitly ask for it. Instead, we use visual avatars (like Blockies) and human-readable aliases.</p>

  //     <h3>Feedback Loops</h3>
  //     <p>Blockchain transactions are slow. To prevent user frustration, the interface must provide constant, reassuring feedback. We utilized optimistic UI updates to make the application feel instant, even while the transaction was confirming in the background.</p>
  //   `,
  // },
  // {
  //   id: "b3",
  //   title: "Building a Redis Clone from Scratch",
  //   date: "June 10, 2025",
  //   excerpt:
  //     "Lessons learned implementing TCP protocols and replication strategies in Python.",
  //   url: "/blog/b3",
  //   tags: ["Systems Programming", "Python", "Database"],
  //   content: `
  //     <p>There is no better way to understand how a database works than to build one yourself. I recently undertook the "Build Your Own Redis" challenge, and here is what I learned.</p>

  //     <h3>The RESP Protocol</h3>
  //     <p>Redis uses the REdis Serialization Protocol (RESP). It's human-readable yet efficient. Implementing the parser was the first hurdle, requiring careful handling of CRLF terminators and various data types like Simple Strings and Bulk Strings.</p>

  //     <h3>Handling Concurrency</h3>
  //     <p>I chose to use Python's \`asyncio\` library to handle concurrent connections. This allows the server to handle thousands of requests without the overhead of threading, mimicking Redis's single-threaded event loop architecture.</p>

  //     <h3>Replication</h3>
  //     <p>Implementing master-slave replication involved sending a handshake command stream. The most challenging part was ensuring data consistency during the initial synchronization phase (RDB file transfer).</p>
  //   `,
  // },
];

export const EDUCATION = [
  {
    institution: "Kathmandu Model Secondary School",
    degree: "+2, Physical Stream with Computer Science",
    year: "2023",
    gpa: "3.91/4.0",
  },
];

export const SKILLS = {
  certifications: [
    "CS50 AI with Python – Harvard (edX)",
    "District Mathematics Olympiad",
    "Datacamp certificates",
  ],
  technologies: [
    "Python",
    "JavaScript (React, Next.js)",
    "TensorFlow",
    "GitHub",
    "Seaborn",
    "PostgreSQL",
    "Prisma",
  ],
  core: ["Deep Learning", "Machine Learning", "Data Analysis", "UI/UX Design"],
  interests: ["Football", "Chess", "Traveling", "Movies"],
};
