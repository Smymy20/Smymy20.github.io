document.getElementById('year').textContent = new Date().getFullYear();

/* Mobile nav toggle */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a =>
  a.addEventListener('click', () => navLinks.classList.remove('open'))
);

/* Skills */
const skills = [
  "Python", "C++", "SQL", "PyTorch", "TensorFlow", "Keras", "Scikit-learn",
  "NLP", "RAG", "Computer Vision", "LLM Fine-tuning (QLoRA / Unsloth)",
  "FAISS", "ChromaDB", "Pinecone", "OpenCV", "Hugging Face",
  "Convex Optimization (CVXPY)", "Docker", "AWS", "GCP", "OCI", "Git", "Streamlit"
];
const skillsGrid = document.getElementById('skillsGrid');
skills.forEach(s => {
  const span = document.createElement('span');
  span.textContent = s;
  skillsGrid.appendChild(span);
});

/* Projects — replace github/demo links with your real repo/demo URLs */
const projects = [
  {
    title: "Multi-PDF RAG Chatbot",
    desc: "A Retrieval-Augmented Generation system for querying and chatting across multiple PDF documents using vector search and LLMs.",
    tech: ["Python", "LangChain/RAG", "FAISS", "LLMs"],
    github: "https://github.com/YOUR-USERNAME/multi-pdf-rag-chatbot",
    demo: "#"
  },
  {
    title: "Traffic Signal Timing Optimization",
    desc: "AI-driven simulation model using evolutionary algorithms to optimize traffic flow at intersections.",
    tech: ["Python", "Evolutionary Algorithms"],
    github: "https://github.com/YOUR-USERNAME/traffic-signal-optimization",
    demo: "#"
  },
  {
    title: "LLM Quiz & Concept Generator",
    desc: "Fine-tuned Qwen models with QLoRA/Unsloth to auto-generate quizzes and concept explanations; adapters published on Hugging Face.",
    tech: ["QLoRA", "Unsloth", "Qwen", "Hugging Face"],
    github: "https://github.com/YOUR-USERNAME/llm-quiz-generator",
    demo: "#"
  },
  {
    title: "Automated Face Recognition Attendance System",
    desc: "Combined classical computer vision (SIFT, corner detection, segmentation) with PCA Eigenfaces + SVM to detect and log attendance.",
    tech: ["OpenCV", "SIFT", "PCA", "SVM"],
    github: "https://github.com/YOUR-USERNAME/face-recognition-attendance",
    demo: "#"
  },
  {
    title: "Extractive Text Summarization Pipeline",
    desc: "Comparative pipeline analyzing frequency-based TF-IDF vs. semantic BERT embeddings for extractive summarization.",
    tech: ["TF-IDF", "BERT", "NLP"],
    github: "https://github.com/YOUR-USERNAME/text-summarization-pipeline",
    demo: "#"
  },
  {
    title: "Exam Variance Optimization",
    desc: "Convex optimization project built with CVXPY to minimize student score variance across exam versions.",
    tech: ["CVXPY", "Convex Optimization"],
    github: "https://github.com/YOUR-USERNAME/exam-variance-optimization",
    demo: "#"
  }
];

const projectsGrid = document.getElementById('projectsGrid');
projects.forEach(p => {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="tech">${p.tech.map(t => `<span>${t}</span>`).join('')}</div>
    <div class="card-links">
      <a href="${p.github}" target="_blank">GitHub &rarr;</a>
      <a href="${p.demo}" target="_blank">Live Demo &rarr;</a>
    </div>
  `;
  projectsGrid.appendChild(card);
});

/* Education / Experience timeline */
const timelineItems = [
  {
    title: "B.Sc. Computer Science — Artificial Intelligence",
    meta: "Helwan University, Cairo, Egypt",
    desc: "Undergraduate studies focused on AI, with a competitive programming background via ICPC (graph theory, dynamic programming, optimization)."
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    meta: "Certification",
    desc: "Foundational certification covering OCI's AI services and infrastructure."
  },
  {
    title: "NVIDIA Deep Learning Institute — Summer Training Program",
    meta: "35-hour program, with ITI",
    desc: "Covered AI for All: From Basics to GenAI Practice, Building LLM Applications with Prompt Engineering, and Augment Your LLM Using RAG."
  },
  {
    title: "NLP Track",
    meta: "National Telecommunication Institute (NTI)",
    desc: "Applied NLP training program."
  }
];
const timeline = document.getElementById('timeline');
timelineItems.forEach(t => {
  const item = document.createElement('div');
  item.className = 'timeline-item';
  item.innerHTML = `<h3>${t.title}</h3><p class="meta">${t.meta}</p><p>${t.desc}</p>`;
  timeline.appendChild(item);
});

/* Contact form (front-end only — connect to Formspree/EmailJS to actually send) */
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  document.getElementById('form-msg').textContent =
    "Thanks! Your message has been noted. (Connect this form to Formspree or EmailJS to actually receive messages.)";
  this.reset();
});
