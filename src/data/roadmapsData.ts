import { CareerRoadmap } from '../types';

export const careerRoadmapsData: CareerRoadmap[] = [
  // 1. TECHNOLOGY CAREER PATHS
  {
    id: 'frontend-dev',
    title: 'Frontend Developer',
    category: 'Technology Career Paths',
    shortDescription: 'Build intuitive, responsive, and high-performance user interfaces for modern web applications.',
    longDescription: 'A Frontend Developer specializes in creating the visual and interactive components of websites and web applications that users interact with directly. Master modern semantic HTML, responsive CSS, dynamic JavaScript, component-based React architecture, client routing, and state management.',
    difficulty: 'Beginner',
    estimatedDuration: '4 - 6 months',
    skillsSummary: ['HTML5', 'CSS3', 'JavaScript', 'Git & GitHub', 'React 19', 'TypeScript', 'REST APIs', 'Deployment'],
    popularRoles: ['Frontend Engineer', 'React Developer', 'UI Engineer', 'Web Developer'],
    relatedOpportunityTags: ['Frontend', 'Web Development', 'React', 'Hackathons'],
    steps: [
      {
        id: 'fe-step-1',
        title: 'HTML & Semantic Web',
        description: 'Master the structural foundation of the web, semantic elements, accessibility, forms, and validation.',
        skillId: 'html',
        topics: ['HTML5 Document Structure', 'Semantic Elements (header, nav, article)', 'Forms & Validation', 'Web Accessibility (a11y)'],
        estimatedWeeks: '2 weeks'
      },
      {
        id: 'fe-step-2',
        title: 'CSS3 & Modern Layouts',
        description: 'Style beautiful user interfaces with Flexbox, CSS Grid, media queries, and responsive web design.',
        skillId: 'css',
        topics: ['Box Model & Specificity', 'Flexbox & CSS Grid', 'Media Queries & Mobile-First', 'Tailwind CSS / CSS Variables'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'fe-step-3',
        title: 'JavaScript Fundamentals & DOM',
        description: 'Program dynamic client-side interactions, event listeners, asynchronous operations, and DOM manipulation.',
        skillId: 'javascript',
        topics: ['ES6+ Syntax & Data Types', 'DOM Manipulation & Events', 'Fetch API & Promises', 'Async/Await & Error Handling'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'fe-step-4',
        title: 'Git & Version Control',
        description: 'Track source code revisions, collaborate on GitHub, create pull requests, and contribute to repositories.',
        skillId: 'git-github',
        topics: ['Git Init, Commit, Branch', 'Merging & Conflict Resolution', 'GitHub Pull Requests', 'Open Source Workflows'],
        estimatedWeeks: '1 week'
      },
      {
        id: 'fe-step-5',
        title: 'React & Component Architecture',
        description: 'Construct modular, component-driven single-page web applications with React 19, hooks, and state management.',
        skillId: 'react',
        topics: ['Components, JSX & Props', 'useState & useEffect Hooks', 'Context API & Custom Hooks', 'Vite & Build Tooling'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'fe-step-6',
        title: 'TypeScript for Frontend',
        description: 'Add static type checking to eliminate runtime errors and scale large frontend applications safely.',
        skillId: 'typescript',
        topics: ['Interfaces & Type Aliases', 'Typing React Props & Hooks', 'Generics & Utility Types', 'tsconfig.json'],
        estimatedWeeks: '2 weeks'
      },
      {
        id: 'fe-step-7',
        title: 'REST API Integration',
        description: 'Consume real backend endpoints, handle loading and error states, pagination, and caching.',
        skillId: 'rest-apis',
        topics: ['HTTP Headers & Status Codes', 'Data Fetching with Axios/Fetch', 'Loading Skeletons & Errors', 'TanStack Query / SWR'],
        estimatedWeeks: '2 weeks'
      },
      {
        id: 'fe-step-8',
        title: 'Production Projects & Deployment',
        description: 'Ship full-featured responsive web applications to production with Vercel, Netlify, or Cloud Run.',
        skillId: 'react',
        topics: ['Capstone Portfolio Projects', 'Lighthouse Performance Optimization', 'CI/CD Deployment Pipelines', 'Live Production Demos'],
        estimatedWeeks: '3 weeks'
      }
    ]
  },
  {
    id: 'backend-dev',
    title: 'Backend Developer',
    category: 'Technology Career Paths',
    shortDescription: 'Engineer robust server architectures, databases, authentication, and high-throughput REST APIs.',
    longDescription: 'Backend developers build and maintain the core logic, databases, APIs, and background services that power web and mobile applications behind the scenes. Learn server-side programming in Node.js, Python, or Java, master SQL and NoSQL databases, implement secure authentication, and architect scalable microservices.',
    difficulty: 'Intermediate',
    estimatedDuration: '5 - 7 months',
    skillsSummary: ['Programming (Node/Python/Java)', 'OOP & DSA', 'SQL & Databases', 'REST APIs', 'Authentication', 'Docker', 'Projects'],
    popularRoles: ['Backend Engineer', 'API Developer', 'Node.js Developer', 'Java Software Engineer'],
    relatedOpportunityTags: ['Backend', 'API', 'Database', 'Microservices'],
    steps: [
      {
        id: 'be-step-1',
        title: 'Programming Language Mastery',
        description: 'Develop strong proficiency in Node.js (JavaScript/TypeScript), Python, or Java with OOP principles.',
        skillId: 'nodejs-express',
        topics: ['Control Flow & Data Structures', 'OOP (Classes, Inheritance)', 'Modules & Asynchronous I/O', 'Error Handling'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'be-step-2',
        title: 'Data Structures & Algorithms',
        description: 'Optimize time and memory performance for business logic, queues, caches, and search operations.',
        skillId: 'dsa',
        topics: ['Complexity (Big-O)', 'Hash Maps, Stacks, Queues', 'Trees & Graph Traversals', 'Sorting & Searching Algorithms'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'be-step-3',
        title: 'Relational & NoSQL Databases',
        description: 'Design normalized schemas, write high-performance SQL queries, and manage document datastores.',
        skillId: 'sql-postgres',
        topics: ['PostgreSQL & MySQL Relational Models', 'Indexes & Query Optimization', 'Transactions & ACID properties', 'MongoDB NoSQL Modeling'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'be-step-4',
        title: 'RESTful API Architecture',
        description: 'Architect scalable web services following REST guidelines, status codes, and modular controllers.',
        skillId: 'rest-apis',
        topics: ['Routing & Middleware Pipelines', 'Request Validation & Sanitization', 'Swagger / OpenAPI Documentation', 'Rate Limiting & CORS'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'be-step-5',
        title: 'Authentication & Security',
        description: 'Secure application endpoints with JSON Web Tokens (JWT), session cookies, password hashing, and role-based access control (RBAC).',
        skillId: 'nodejs-express',
        topics: ['Password Hashing with Bcrypt', 'JWT Token Creation & Verification', 'OAuth2 Social Logins', 'Role-Based Access Control (RBAC)'],
        estimatedWeeks: '2 weeks'
      },
      {
        id: 'be-step-6',
        title: 'Containerization & Cloud Deployment',
        description: 'Containerize backend services with Docker, manage environment variables, and deploy to cloud platforms.',
        skillId: 'docker',
        topics: ['Dockerfiles & Image Optimization', 'Docker Compose (App + Database)', 'Linux Server Management', 'Cloud Deployment'],
        estimatedWeeks: '3 weeks'
      }
    ]
  },
  {
    id: 'fullstack-dev',
    title: 'Full Stack Developer',
    category: 'Technology Career Paths',
    shortDescription: 'Master the end-to-end stack from pixel-perfect frontends to robust databases and cloud backends.',
    longDescription: 'Full Stack Developers bridge the gap between user experience and server-side engineering. Capable of building complete web applications independently, they are among the most sought-after talent in startups and tech companies worldwide.',
    difficulty: 'Intermediate',
    estimatedDuration: '6 - 8 months',
    skillsSummary: ['HTML/CSS/JS', 'React', 'Node.js/Express', 'PostgreSQL/MongoDB', 'REST APIs', 'Git', 'Deployment'],
    popularRoles: ['Full Stack Engineer', 'MERN Stack Developer', 'Software Engineer', 'Founding Engineer'],
    relatedOpportunityTags: ['Full Stack', 'MERN', 'Hackathons', 'Startups'],
    steps: [
      {
        id: 'fs-step-1',
        title: 'Frontend Foundations',
        description: 'HTML5, modern CSS3, responsive layouts, and ES6+ JavaScript.',
        skillId: 'html',
        topics: ['Semantic HTML', 'CSS Flexbox/Grid', 'JavaScript ES6+', 'DOM Manipulation'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'fs-step-2',
        title: 'Interactive Frontend with React',
        description: 'Component architecture, state management, and modern UI libraries.',
        skillId: 'react',
        topics: ['React 19 Components', 'Hooks & State', 'Tailwind CSS', 'Client-side Routing'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'fs-step-3',
        title: 'Backend & Server Logic',
        description: 'Node.js and Express server creation, modular routing, and middlewares.',
        skillId: 'nodejs-express',
        topics: ['Express.js Server Architecture', 'Middleware Pipelines', 'REST Endpoints', 'Environment Configuration'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'fs-step-4',
        title: 'Databases & ORM',
        description: 'Data modeling with PostgreSQL and MongoDB using Drizzle, Prisma, or Mongoose.',
        skillId: 'sql-postgres',
        topics: ['PostgreSQL & MongoDB', 'Schema Migrations & ORMs', 'CRUD Operations', 'Relational Joins & Indexes'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'fs-step-5',
        title: 'Authentication & Security',
        description: 'Implement secure login, session tokens, JWTs, and authorization.',
        skillId: 'rest-apis',
        topics: ['JWT Authentication', 'Protected Routes', 'CORS & Cookie Security', 'Input Validation'],
        estimatedWeeks: '2 weeks'
      },
      {
        id: 'fs-step-6',
        title: 'End-to-End Capstones & Deployment',
        description: 'Build complete production-grade applications and deploy live.',
        skillId: 'docker',
        topics: ['SaaS Multi-tenant Project', 'E-commerce Platform Project', 'Docker & Cloud Deployment', 'CI/CD Pipelines'],
        estimatedWeeks: '4 weeks'
      }
    ]
  },
  {
    id: 'software-dev',
    title: 'Software Developer (SDE)',
    category: 'Technology Career Paths',
    shortDescription: 'Core computer science fundamentals, DSA, object-oriented software engineering, and system design.',
    longDescription: 'The classic Software Development Engineer (SDE) path focused on computational rigor, data structures, algorithms, system design principles, and problem-solving required by leading technology companies and product firms.',
    difficulty: 'Intermediate',
    estimatedDuration: '6 - 9 months',
    skillsSummary: ['Basics', 'Programming (C++/Java/Python)', 'DSA', 'Git', 'OOP & OS', 'System Design', 'Interview Prep'],
    popularRoles: ['SDE-1', 'Software Engineer', 'Systems Engineer', 'Application Developer'],
    relatedOpportunityTags: ['SDE', 'Competitive Programming', 'DSA', 'Product Companies'],
    steps: [
      {
        id: 'sde-step-1',
        title: 'Programming Core (C++ / Java / Python)',
        description: 'Master variables, memory allocation, pointers/references, functions, and standard libraries.',
        skillId: 'java',
        topics: ['Standard Template Library / Java Collections', 'Memory Management', 'Pointers / References', 'Recursion'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'sde-step-2',
        title: 'Data Structures & Algorithms (DSA)',
        description: 'Extensive algorithmic problem solving across 300+ LeetCode problems.',
        skillId: 'dsa',
        topics: ['Arrays, Strings & Two Pointers', 'Linked Lists, Stacks & Queues', 'Trees, Heaps & Graphs', 'Dynamic Programming & Backtracking'],
        estimatedWeeks: '10 weeks'
      },
      {
        id: 'sde-step-3',
        title: 'Computer Science Core Subjects',
        description: 'Operating Systems, DBMS, Computer Networks, and Object-Oriented Software Design.',
        skillId: 'linux-os',
        topics: ['OS: Processes, Threads, Deadlocks', 'DBMS: Normalization & Transactions', 'CN: OSI Model, TCP/IP, DNS', 'OOP Design Patterns (SOLID)'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'sde-step-4',
        title: 'Full Lifecycle Projects',
        description: 'Build non-trivial software engineering projects with database and API integration.',
        skillId: 'git-github',
        topics: ['Version Control on GitHub', 'Architecting Modular Services', 'Automated Unit Testing', 'System Benchmarking'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'sde-step-5',
        title: 'System Design & Technical Interviews',
        description: 'Low-Level Design (LLD), High-Level Design (HLD) concepts, and mock interview practice.',
        skillId: 'rest-apis',
        topics: ['Scalability & Load Balancing', 'Caching & Message Queues', 'Database Sharding', 'Behavioral & Technical Rounds'],
        estimatedWeeks: '4 weeks'
      }
    ]
  },
  {
    id: 'ai-engineer',
    title: 'AI Engineer & Generative AI',
    category: 'Technology Career Paths',
    shortDescription: 'Build AI-native applications leveraging Large Language Models, embeddings, vector databases, and RAG.',
    longDescription: 'AI Engineering focuses on operationalizing AI models into production software. From fine-tuning models to building autonomous agents, multimodal workflows, and vector-search pipelines, this is the frontier of modern software innovation.',
    difficulty: 'Advanced',
    estimatedDuration: '5 - 7 months',
    skillsSummary: ['Python', 'Machine Learning', 'Deep Learning', 'Transformers', 'Generative AI', 'RAG & Vectors', 'Deployment'],
    popularRoles: ['AI Engineer', 'Generative AI Developer', 'LLM Application Engineer', 'AI Solutions Architect'],
    relatedOpportunityTags: ['AI', 'Generative AI', 'LLMs', 'Hackathons'],
    steps: [
      {
        id: 'ai-step-1',
        title: 'Python for AI & Math Foundations',
        description: 'Advanced Python, NumPy, linear algebra, and multivariable calculus.',
        skillId: 'python',
        topics: ['Linear Algebra & Matrices', 'Calculus & Gradient Descent', 'Python Object-Oriented Coding', 'Vectorized Operations'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ai-step-2',
        title: 'Machine Learning Core',
        description: 'Supervised & unsupervised learning models, evaluation metrics, and scikit-learn.',
        skillId: 'machine-learning',
        topics: ['Regression & Classification', 'Ensemble Trees (Random Forest, XGBoost)', 'Hyperparameter Tuning', 'Validation Techniques'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ai-step-3',
        title: 'Deep Learning & Neural Networks',
        description: 'Build neural networks with PyTorch, backpropagation, and CNNs.',
        skillId: 'deep-learning',
        topics: ['Multi-Layer Perceptrons', 'Backpropagation & Optimizers', 'PyTorch Tensors & Training Loops', 'Computer Vision / NLP Basics'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'ai-step-4',
        title: 'Generative AI & Transformer Models',
        description: 'Attention mechanisms, LLMs, prompt engineering, and API integrations.',
        skillId: 'gen-ai',
        topics: ['Transformer Architecture', 'Prompt Engineering Patterns', 'Tokenization & Context Windows', 'Multimodal Models'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ai-step-5',
        title: 'RAG & Vector Search Systems',
        description: 'Build Retrieval-Augmented Generation systems using vector databases.',
        skillId: 'gen-ai',
        topics: ['Vector Embeddings', 'Vector Stores (Chroma, Pinecone)', 'Hybrid Search & Reranking', 'LangChain / LlamaIndex'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ai-step-6',
        title: 'AI Deployment & Autonomous Agents',
        description: 'Deploy AI applications to production with streaming, caching, and eval frameworks.',
        skillId: 'docker',
        topics: ['AI Agent Frameworks', 'Latency & Token Cost Optimization', 'Model Serving with FastAPI & Docker', 'Safety & Guardrails'],
        estimatedWeeks: '3 weeks'
      }
    ]
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    category: 'Technology Career Paths',
    shortDescription: 'Extract actionable insights from complex datasets using statistics, machine learning, and predictive modeling.',
    longDescription: 'Data Scientists combine mathematical theory, statistical inference, programming, and machine learning to analyze large datasets and extract predictive insights that drive business decisions.',
    difficulty: 'Intermediate',
    estimatedDuration: '6 - 8 months',
    skillsSummary: ['Python', 'Statistics', 'SQL', 'Data Wrangling (Pandas)', 'Machine Learning', 'Data Storytelling', 'Projects'],
    popularRoles: ['Data Scientist', 'Statistical Modeler', 'Decision Scientist', 'Quantitative Analyst'],
    relatedOpportunityTags: ['Data Science', 'Kaggle', 'Machine Learning', 'Analytics'],
    steps: [
      {
        id: 'ds-step-1',
        title: 'Mathematics & Inferential Statistics',
        description: 'Probability distributions, hypothesis testing, p-values, confidence intervals, and Bayesian thinking.',
        skillId: 'python',
        topics: ['Descriptive vs Inferential Stats', 'Normal, Binomial, Poisson Distributions', 'Hypothesis Testing (A/B Testing, ANOVA)', 'Covariance & Correlation'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ds-step-2',
        title: 'SQL & Data Extraction',
        description: 'Extract, clean, and aggregate enterprise data with complex SQL queries.',
        skillId: 'sql-postgres',
        topics: ['Multi-table Joins & Subqueries', 'Window Functions & CTEs', 'Data Aggregation & Grouping', 'Data Warehousing Basics'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ds-step-3',
        title: 'Data Wrangling with Pandas & NumPy',
        description: 'Clean messy data, handle nulls, engineer features, and perform exploratory data analysis (EDA).',
        skillId: 'pandas-numpy',
        topics: ['Data Cleaning & Imputation', 'Feature Engineering & Encodings', 'Exploratory Data Analysis (EDA)', 'Time Series & Outlier Detection'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ds-step-4',
        title: 'Machine Learning & Predictive Modeling',
        description: 'Train supervised models to make high-accuracy predictions.',
        skillId: 'machine-learning',
        topics: ['Linear & Logistic Regression', 'Decision Trees, Random Forest & XGBoost', 'Clustering & Dimensionality Reduction', 'Cross-Validation & AUC-ROC'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'ds-step-5',
        title: 'Data Storytelling & Visualization',
        description: 'Communicate findings effectively through charts, presentations, and dashboards.',
        skillId: 'data-viz',
        topics: ['Seaborn & Matplotlib Visualization', 'Interactive Visuals with Plotly', 'Executive Summaries & Insights', 'Business ROI Quantification'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ds-step-6',
        title: 'End-to-End Capstones & Kaggle',
        description: 'Compete in Kaggle competitions and publish verifiable data science case studies.',
        skillId: 'machine-learning',
        topics: ['Kaggle Notebooks & Kernels', 'Real-world Churn/Fraud/Sales Datasets', 'Model Explainability (SHAP/LIME)', 'GitHub Case Study Writeups'],
        estimatedWeeks: '4 weeks'
      }
    ]
  },
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    category: 'Technology Career Paths',
    shortDescription: 'Transform raw company data into dashboards, reports, and clear business growth recommendations.',
    longDescription: 'Data Analysts bridge business and technology by organizing data, identifying trends, building visual dashboards (Power BI / Tableau), and helping leadership teams make data-driven decisions.',
    difficulty: 'Beginner',
    estimatedDuration: '3 - 5 months',
    skillsSummary: ['Excel', 'SQL', 'Statistics', 'Python (Pandas)', 'Power BI / Tableau', 'Dashboards'],
    popularRoles: ['Business Data Analyst', 'BI Analyst', 'Product Analyst', 'Operations Analyst'],
    relatedOpportunityTags: ['Data Analytics', 'Power BI', 'SQL', 'Consulting'],
    steps: [
      {
        id: 'da-step-1',
        title: 'Advanced Microsoft Excel & Google Sheets',
        description: 'Formulas, VLOOKUP/XLOOKUP, Pivot Tables, Conditional Formatting, and financial modeling.',
        skillId: 'data-viz',
        topics: ['XLOOKUP, INDEX-MATCH', 'Pivot Tables & Pivot Charts', 'What-If Analysis & Goal Seek', 'Excel Macros & Data Validation'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'da-step-2',
        title: 'SQL for Data Analysis',
        description: 'Query relational databases to extract business metrics and operational performance data.',
        skillId: 'sql-postgres',
        topics: ['SELECT, WHERE, ORDER BY', 'GROUP BY & Aggregations', 'INNER, LEFT, RIGHT JOINs', 'Case Statements & Subqueries'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'da-step-3',
        title: 'Business Intelligence (Power BI & Tableau)',
        description: 'Build interactive executive dashboards, DAX measures, and automated reporting systems.',
        skillId: 'data-viz',
        topics: ['Power BI Data Modeling', 'DAX Measures & Calculated Columns', 'Interactive Filters & Slicers', 'Tableau Visual Best Practices'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'da-step-4',
        title: 'Python for Automated Analytics',
        description: 'Automate repetitive reporting and clean large datasets with Pandas and Seaborn.',
        skillId: 'pandas-numpy',
        topics: ['Pandas Series & DataFrames', 'Automating CSV/Excel Ingestion', 'Matplotlib & Seaborn Visuals', 'Exporting Automated Reports'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'da-step-5',
        title: 'Business Acumen & Real Case Studies',
        description: 'Solve real-world business challenges: Cohort retention, customer acquisition costs, sales forecasting.',
        skillId: 'data-viz',
        topics: ['Key Business Metrics (CAC, LTV, Churn)', 'A/B Testing Interpretation', 'Dashboard Portfolio Creation', 'Presenting Insights to Stakeholders'],
        estimatedWeeks: '3 weeks'
      }
    ]
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity Analyst',
    category: 'Technology Career Paths',
    shortDescription: 'Protect digital assets, audit security postures, test vulnerabilities, and respond to threats.',
    longDescription: 'Cybersecurity professionals safeguard networks, applications, and cloud infrastructures against unauthorized access, data breaches, and cyber attacks.',
    difficulty: 'Intermediate',
    estimatedDuration: '6 - 8 months',
    skillsSummary: ['Networking', 'Linux', 'Security Fundamentals', 'Ethical Hacking', 'Security Tools', 'Certifications'],
    popularRoles: ['Security Analyst (SOC)', 'Penetration Tester', 'Information Security Officer', 'Cyber Defense Specialist'],
    relatedOpportunityTags: ['Cybersecurity', 'CTF', 'Ethical Hacking', 'InfoSec'],
    steps: [
      {
        id: 'cs-step-1',
        title: 'Computer Networks & Protocols',
        description: 'TCP/IP stack, OSI model, packet analysis with Wireshark, DNS, and subnetting.',
        skillId: 'cybersecurity-basics',
        topics: ['OSI 7 Layers & IP Addressing', 'TCP vs UDP, DNS, DHCP, HTTP/S', 'Packet Inspection with Wireshark', 'Routing & Firewalls'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'cs-step-2',
        title: 'Linux Systems & Bash Scripting',
        description: 'Command line operations, file permissions, shell automation, and security hardening.',
        skillId: 'linux-os',
        topics: ['Linux CLI & User Permissions', 'System Logs & Process Monitoring', 'Bash Scripting for Automation', 'SSH & Key Management'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'cs-step-3',
        title: 'Cybersecurity Fundamentals & Cryptography',
        description: 'CIA triad, threat vectors, symmetric/asymmetric encryption, and hashing.',
        skillId: 'cybersecurity-basics',
        topics: ['CIA Triad & Security Policies', 'AES, RSA, SHA-256 Cryptography', 'PKI & SSL/TLS Certificates', 'Identity & Access Management (IAM)'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'cs-step-4',
        title: 'Web Application Security & OWASP Top 10',
        description: 'Understand and defend against SQL injection, XSS, CSRF, and broken access controls.',
        skillId: 'cybersecurity-basics',
        topics: ['OWASP Top 10 Vulnerabilities', 'Burp Suite & Proxy Interception', 'SQL Injection & XSS Exploits', 'Defensive Remediation'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'cs-step-5',
        title: 'Hands-on CTFs & Certifications',
        description: 'Compete in Capture The Flag (CTF) competitions and prepare for CompTIA Security+ or CEH.',
        skillId: 'cybersecurity-basics',
        topics: ['TryHackMe & HackTheBox Labs', 'Network Scanning with Nmap', 'Incident Response Playbooks', 'CompTIA Security+ Prep'],
        estimatedWeeks: '5 weeks'
      }
    ]
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineer',
    category: 'Technology Career Paths',
    shortDescription: 'Automate software delivery, orchestrate containers, and architect scalable cloud infrastructure.',
    longDescription: 'DevOps engineers bridge software development and IT operations to shorten the systems development life cycle and provide continuous delivery with high software quality.',
    difficulty: 'Intermediate',
    estimatedDuration: '5 - 7 months',
    skillsSummary: ['Linux', 'Git', 'CI/CD Pipelines', 'Docker', 'Kubernetes', 'AWS/Cloud', 'Monitoring'],
    popularRoles: ['DevOps Engineer', 'Cloud Infrastructure Engineer', 'Site Reliability Engineer (SRE)', 'Platform Engineer'],
    relatedOpportunityTags: ['DevOps', 'Cloud', 'Kubernetes', 'AWS'],
    steps: [
      {
        id: 'cd-step-1',
        title: 'Linux Systems & Shell Automation',
        description: 'Master the server operating system that runs 95%+ of global cloud workloads.',
        skillId: 'linux-os',
        topics: ['Linux Administration & Systemd', 'Shell Scripting & Crontabs', 'Networking & Firewalls (UFW, iptables)', 'File Systems & Storage'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'cd-step-2',
        title: 'Git Version Control & Branching Strategies',
        description: 'Trunk-based development, git flows, and collaborative pull request automation.',
        skillId: 'git-github',
        topics: ['Git Rebase & Merge Strategies', 'Protected Branches & Code Owners', 'Conventional Commits & Semantic Versioning'],
        estimatedWeeks: '1 week'
      },
      {
        id: 'cd-step-3',
        title: 'Containerization with Docker',
        description: 'Package applications into lightweight, immutable container images.',
        skillId: 'docker',
        topics: ['Dockerfiles & Multi-Stage Builds', 'Image Layer Caching & Security', 'Docker Compose Multi-service Stacks', 'Volume Persistence & Networks'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'cd-step-4',
        title: 'Cloud Platforms (AWS / GCP)',
        description: 'Deploy compute, storage, databases, and VPC networks on major cloud providers.',
        skillId: 'cloud-aws',
        topics: ['EC2 Compute & Auto Scaling', 'S3 Object Storage & CDN (CloudFront)', 'VPC Subnets & Security Groups', 'IAM Least-Privilege Policies'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'cd-step-5',
        title: 'CI/CD Pipelines with GitHub Actions',
        description: 'Automate build, test, lint, and deploy workflows triggered on git commits.',
        skillId: 'cicd-kubernetes',
        topics: ['GitHub Actions Workflow Syntax', 'Automated Unit & Integration Testing', 'Building & Pushing Images to Registry', 'Automated Cloud Deployments'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'cd-step-6',
        title: 'Kubernetes Container Orchestration',
        description: 'Manage clusters of containerized applications at scale in production.',
        skillId: 'cicd-kubernetes',
        topics: ['Pods, Deployments, and Services', 'ConfigMaps & Secrets Management', 'Ingress Controllers & Helm Charts', 'Monitoring with Prometheus & Grafana'],
        estimatedWeeks: '4 weeks'
      }
    ]
  },
  {
    id: 'ui-ux-designer',
    title: 'UI/UX Designer',
    category: 'Technology Career Paths',
    shortDescription: 'Create human-centered digital experiences, wireframes, interactive prototypes, and design systems.',
    longDescription: 'UI/UX Designers conduct user research, craft wireframes and user flows, design aesthetic visual interfaces, and build high-fidelity interactive prototypes in Figma.',
    difficulty: 'Beginner',
    estimatedDuration: '3 - 5 months',
    skillsSummary: ['Design Fundamentals', 'User Research', 'Wireframing', 'Prototyping (Figma)', 'Design Systems', 'Portfolio'],
    popularRoles: ['Product Designer', 'UI Designer', 'UX Researcher', 'Interaction Designer'],
    relatedOpportunityTags: ['UI/UX', 'Design', 'Figma', 'Designathon'],
    steps: [
      {
        id: 'ui-step-1',
        title: 'Design Principles & Human Psychology',
        description: 'Gestalt laws, visual hierarchy, typography pairings, color psychology, and grid systems.',
        skillId: 'ui-ux-design',
        topics: ['Gestalt Principles of Visual Perception', 'Typography Hierarchy & Scale', 'Color Harmony & Contrast (WCAG)', 'Spacing, Alignment, and Grids'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ui-step-2',
        title: 'User Research & Information Architecture',
        description: 'User interviews, personas, empathy maps, journey mapping, and sitemaps.',
        skillId: 'ui-ux-design',
        topics: ['Qualitative & Quantitative User Research', 'User Personas & Problem Statements', 'User Flow Diagrams & Sitemaps', 'Competitor Analysis'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ui-step-3',
        title: 'Figma Mastery & Prototyping',
        description: 'Auto-layout, responsive constraints, components, variants, and interactive micro-animations.',
        skillId: 'ui-ux-design',
        topics: ['Figma Auto-Layout & Constraints', 'Reusable Components & Variants', 'Interactive Clickable Prototypes', 'Smart Animate & Micro-interactions'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ui-step-4',
        title: 'Design Systems & Usability Testing',
        description: 'Create scalable design tokens, component libraries, and conduct user testing sessions.',
        skillId: 'ui-ux-design',
        topics: ['Building Reusable Design Systems', 'Design Tokens (Colors, Type, Spacing)', 'Usability Testing Sessions & Notes', 'Handoff to Engineering Teams'],
        estimatedWeeks: '3 weeks'
      },
      {
        id: 'ui-step-5',
        title: 'Case Study Portfolio Building',
        description: 'Document 2-3 in-depth end-to-end product design case studies for hiring managers.',
        skillId: 'ui-ux-design',
        topics: ['Structuring a UX Case Study', 'Problem, Process, Solution Storytelling', 'Publishing on Behance / Dribbble / Web', 'Interview Preparation & App Critiques'],
        estimatedWeeks: '3 weeks'
      }
    ]
  },

  // 2. ENGINEERING EDUCATION PATHS
  {
    id: 'edu-btech-journey',
    title: 'The B.Tech / B.E. Journey (4-Year Roadmap)',
    category: 'Engineering Education Paths',
    shortDescription: 'The structured semester-by-semester blueprint from 1st year foundation to final year placement and career launch.',
    longDescription: 'Navigate the complete undergraduate engineering journey step by step. Plan out academics, coding fundamentals, hackathons, open source, summer internships, capstone projects, and placements across all 4 years.',
    difficulty: 'Comprehensive',
    estimatedDuration: '4 Years',
    skillsSummary: ['1st Year Basics', '2nd Year DSA & Core', '3rd Year Internships', '4th Year Placements / Masters'],
    popularRoles: ['Campus Placement Candidate', 'Prospective Graduate', 'Future Tech Leader'],
    relatedOpportunityTags: ['Internships', 'Hackathons', 'Campus Ambassador', 'Scholarships'],
    steps: [
      {
        id: 'btech-step-1',
        title: 'Year 1: Foundations & Technical Discovery',
        description: 'Excel in engineering mathematics, pick your primary programming language (C/C++ or Python), and join campus clubs.',
        topics: ['High GPA Focus in Engineering Sciences', 'C/C++ or Python Fundamentals', 'Git & GitHub Setup', 'College Clubs & Hackathon Participation'],
        estimatedWeeks: 'Semesters 1 & 2'
      },
      {
        id: 'btech-step-2',
        title: 'Year 2: Core Branch Subjects & DSA',
        description: 'Master Data Structures & Algorithms, database management, and start building full projects.',
        topics: ['300+ LeetCode DSA Problems', 'Core OS, DBMS, Computer Networks', 'Web/Mobile/AI Tech Stack Specialization', 'Participate in Regional Hackathons'],
        estimatedWeeks: 'Semesters 3 & 4'
      },
      {
        id: 'btech-step-3',
        title: 'Year 3: Summer Internships & Real World Experience',
        description: 'Crack summer internships, build production-grade projects, contribute to open source, and network on LinkedIn.',
        topics: ['Resume & Portfolio Polish', 'Summer Internship Applications (Off-campus & On-campus)', 'Open Source (GSoC / Hacktoberfest)', 'Pre-Placement Offers (PPO) Goal'],
        estimatedWeeks: 'Semesters 5 & 6'
      },
      {
        id: 'btech-step-4',
        title: 'Year 4: Final Year Placements / Higher Studies',
        description: 'Campus placement drive preparation, capstone major project, or competitive exams (GATE / GRE / CAT).',
        topics: ['On-Campus Placement Drives', 'System Design & Mock Technical Rounds', 'Final Year Capstone Project Deployment', 'Offer Negotiation & Onboarding'],
        estimatedWeeks: 'Semesters 7 & 8'
      }
    ]
  },
  {
    id: 'edu-polytechnic-lateral',
    title: 'Diploma / Polytechnic to B.Tech (Lateral Entry)',
    category: 'Engineering Education Paths',
    shortDescription: 'Roadmap for polytechnic diploma holders entering B.Tech 2nd year via ECET / Lateral Entry exams.',
    longDescription: 'Specialized path for diploma holders to smoothly transition into 2nd year engineering, bridge academic gaps in mathematics and computer science, and accelerate placements.',
    difficulty: 'Intermediate',
    estimatedDuration: '3 Years (B.Tech)',
    skillsSummary: ['Lateral Entrance Exam', 'Engineering Math Bridge', 'Core Branch Mastery', 'Accelerated Placement Prep'],
    popularRoles: ['Lateral Entry Engineer', 'Design Engineer', 'Site Engineer'],
    relatedOpportunityTags: ['Scholarships', 'Internships', 'Jobs'],
    steps: [
      {
        id: 'lat-step-1',
        title: 'ECET / Lateral Entrance Preparation',
        description: 'Master core branch diploma syllabus and engineering mathematics to secure top government/private engineering colleges.',
        topics: ['Diploma Technical Core Revision', 'Engineering Mathematics Revision', 'Previous Year Papers & Mock Exams', 'Counseling & College Selection'],
        estimatedWeeks: 'Final Diploma Semester'
      },
      {
        id: 'lat-step-2',
        title: 'Semester 3 Transition & Math Bridge',
        description: 'Adapt to university academic rigor, bridge theoretical foundations in calculus and linear algebra.',
        topics: ['Differential Equations & Linear Algebra Bridge', 'University Academic Adjustment', 'Peer Study Groups', 'Hands-on Lab Leadership'],
        estimatedWeeks: 'Semester 3'
      },
      {
        id: 'lat-step-3',
        title: 'Fast-Track Coding & Practical Projects',
        description: 'Leverage strong practical hands-on diploma skills to build impressive software or hardware projects.',
        topics: ['Accelerated DSA Learning', 'Full Stack or Embedded Project', 'Resume Building & Hackathons', 'Internship Applications'],
        estimatedWeeks: 'Semesters 4 & 5'
      }
    ]
  },

  // 3. ENGINEERING BRANCHES
  {
    id: 'branch-cse',
    title: 'Computer Science & Engineering (CSE)',
    category: 'Engineering Branches',
    shortDescription: 'The comprehensive curriculum roadmap covering systems, algorithms, AI, cloud, and compilers.',
    longDescription: 'Computer Science & Engineering is the study of computation, information processing, software design, and computer hardware systems.',
    difficulty: 'Comprehensive',
    estimatedDuration: '4 Years',
    skillsSummary: ['Programming', 'DSA', 'Computer Architecture', 'Operating Systems', 'DBMS', 'Networks', 'Electives'],
    popularRoles: ['Software Engineer', 'System Architect', 'Research Scientist'],
    relatedOpportunityTags: ['Hackathons', 'SDE', 'Open Source', 'Research'],
    steps: [
      {
        id: 'cse-step-1',
        title: 'Foundational Computation',
        description: 'Discrete mathematics, logic design, and basic procedural programming in C/C++.',
        topics: ['Discrete Mathematics & Graph Theory', 'Digital Logic & Boolean Algebra', 'C/C++ Programming & Pointers', 'Standard Libraries'],
        estimatedWeeks: 'Year 1'
      },
      {
        id: 'cse-step-2',
        title: 'Systems & Architecture',
        description: 'Computer organization, memory hierarchy, assembly basics, and operating systems.',
        topics: ['Computer Organization & Architecture (COA)', 'Operating Systems (Processes, Paging, Virtual Memory)', 'Data Structures & Algorithms', 'Database Management Systems (DBMS)'],
        estimatedWeeks: 'Year 2'
      },
      {
        id: 'cse-step-3',
        title: 'Advanced Computer Science Theory',
        description: 'Theory of Computation (Automata), Compiler Design, and Computer Networks.',
        topics: ['Automata Theory & Turing Machines', 'Compiler Design (Lexical, Parsing, Code Gen)', 'Computer Networks (TCP/IP, Routing Protocols)', 'Software Engineering & Agile'],
        estimatedWeeks: 'Year 3'
      },
      {
        id: 'cse-step-4',
        title: 'Specialization Electives & Capstone',
        description: 'Artificial intelligence, cloud computing, cybersecurity, or distributed systems.',
        topics: ['AI & Machine Learning / Cloud Computing', 'Cybersecurity & Cryptography', 'Final Year Major Capstone Project', 'Technical Research Paper Writing'],
        estimatedWeeks: 'Year 4'
      }
    ]
  },
  {
    id: 'branch-ece',
    title: 'Electronics & Communication (ECE)',
    category: 'Engineering Branches',
    shortDescription: 'Hardware-software hybrid path covering semiconductor circuits, VLSI, microcontrollers, and signal processing.',
    longDescription: 'Electronics & Communication Engineering blends hardware circuitry with digital signal processing, communications, and embedded firmware programming.',
    difficulty: 'Intermediate',
    estimatedDuration: '4 Years',
    skillsSummary: ['Analog Circuits', 'Digital Electronics', 'Signals & Systems', 'Microcontrollers (ARM)', 'VLSI Design', 'IoT'],
    popularRoles: ['Embedded Engineer', 'VLSI Design Engineer', 'Hardware Engineer', 'Firmware Developer'],
    relatedOpportunityTags: ['Hardware Competitions', 'IoT', 'VLSI', 'Semiconductors'],
    steps: [
      {
        id: 'ece-step-1',
        title: 'Circuit Analysis & Solid State Devices',
        description: 'Semiconductor physics, diodes, transistors (BJT, MOSFET), and RLC circuit network theorems.',
        topics: ['Network Analysis (KVL, KCL, Thevenin)', 'Semiconductor Devices & Diode Applications', 'Transistors (BJT & MOSFET amplifiers)', 'Operational Amplifiers (Op-Amps)'],
        estimatedWeeks: 'Year 1 & 2'
      },
      {
        id: 'ece-step-2',
        title: 'Digital Electronics & Microprocessors',
        description: 'Boolean minimization, sequential circuits, 8051, 8086, and ARM Cortex architectures.',
        topics: ['Combinational & Sequential Circuits (Flip-Flops, Registers)', '8051 / ARM Microcontroller Architecture', 'Assembly & Embedded C Programming', 'Interfacing Sensors, LCDs, and Motors'],
        estimatedWeeks: 'Year 2'
      },
      {
        id: 'ece-step-3',
        title: 'Signals, Systems & Communications',
        description: 'Fourier/Laplace transforms, analog modulation (AM/FM), digital modulation (PSK, QAM), and DSP.',
        topics: ['Signals & Systems (CT & DT Fourier, Z-Transform)', 'Digital Signal Processing (FFT, Filter Design)', 'Analog & Digital Communications', 'Antennas & Wave Propagation'],
        estimatedWeeks: 'Year 3'
      },
      {
        id: 'ece-step-4',
        title: 'VLSI & Embedded Systems Specialization',
        description: 'Verilog HDL, FPGA synthesis, RTL design, Cadence/Synopsys tools, and IoT prototyping.',
        topics: ['Verilog / VHDL Hardware Description Language', 'FPGA Prototyping (Xilinx / Vivado)', 'CMOS Inverter & Layout Design', 'Internet of Things (IoT) Protocols (MQTT, BLE)'],
        estimatedWeeks: 'Year 4'
      }
    ]
  },

  // 4. CORE ENGINEERING CAREERS
  {
    id: 'core-vlsi',
    title: 'VLSI & Semiconductor Design',
    category: 'Core Engineering Careers',
    shortDescription: 'Design microchips, silicon microprocessors, and integrated circuits powering the future of electronics.',
    longDescription: 'With global multi-billion dollar semiconductor investments and chip fabrication plants rising, VLSI engineers are in unprecedented demand across Intel, Qualcomm, AMD, NVIDIA, Texas Instruments, and TSMC.',
    difficulty: 'Advanced',
    estimatedDuration: '6 - 9 months',
    skillsSummary: ['Digital Electronics', 'Verilog / SystemVerilog', 'RTL Design', 'Synthesis & STA', 'UVM Verification', 'Cadence Tools'],
    popularRoles: ['RTL Design Engineer', 'Design Verification Engineer (DV)', 'Physical Design Engineer (PD)', 'FPGA Engineer'],
    relatedOpportunityTags: ['Semiconductors', 'Hardware', 'VLSI Internships', 'Core Jobs'],
    steps: [
      {
        id: 'vlsi-step-1',
        title: 'Digital Logic & CMOS Foundations',
        description: 'Master logic gates, setup and hold time, propagation delays, and CMOS transistor characteristics.',
        topics: ['Boolean Algebra & Karnaugh Maps', 'Static Timing Analysis (Setup / Hold Time)', 'CMOS Inverter Characteristics', 'Combinational & Sequential Circuits'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'vlsi-step-2',
        title: 'Verilog HDL & RTL Architecture',
        description: 'Write synthesizable Register-Transfer Level (RTL) code for hardware arithmetic units, state machines (FSM), and memory controllers.',
        topics: ['Verilog Syntax, Modules & Always Blocks', 'Finite State Machines (Moore & Mealy)', 'FIFO & Memory Controller Design', 'Writing Testbenches in Verilog'],
        estimatedWeeks: '6 weeks'
      },
      {
        id: 'vlsi-step-3',
        title: 'SystemVerilog & UVM Verification',
        description: 'Industry-standard verification methodology used by Intel, Qualcomm, and Apple.',
        topics: ['SystemVerilog OOP Concepts', 'Constrained Random Verification', 'Universal Verification Methodology (UVM) Architecture', 'Functional Coverage & Assertions (SVA)'],
        estimatedWeeks: '8 weeks'
      },
      {
        id: 'vlsi-step-4',
        title: 'Physical Design & Silicon EDA Flow',
        description: 'Synthesis, floorplanning, place-and-route (P&R), clock tree synthesis (CTS), and tape-out readiness.',
        topics: ['Logic Synthesis & Constraints (SDC)', 'Floorplanning, Power Planning & Placement', 'Clock Tree Synthesis (CTS) & Routing', 'Design Rule Check (DRC) & LVS'],
        estimatedWeeks: '6 weeks'
      }
    ]
  },
  {
    id: 'core-robotics',
    title: 'Robotics & Autonomous Systems',
    category: 'Core Engineering Careers',
    shortDescription: 'Build intelligent physical robots, kinematics, ROS2, computer vision, and industrial automation.',
    longDescription: 'Robotics integrates mechanical actuators, embedded computing, sensor fusion, computer vision, and autonomous path planning.',
    difficulty: 'Advanced',
    estimatedDuration: '6 - 8 months',
    skillsSummary: ['ROS2', 'C++ / Python', 'Forward & Inverse Kinematics', 'Computer Vision (OpenCV)', 'LiDAR SLAM', 'Motor Controls'],
    popularRoles: ['Robotics Engineer', 'Automation Engineer', 'Perception Engineer', 'Mechatronics Engineer'],
    relatedOpportunityTags: ['Robotics', 'Hardware Competitions', 'Autonomous Vehicles', 'DRDO'],
    steps: [
      {
        id: 'rob-step-1',
        title: 'Mathematics of Robotics & Kinematics',
        description: 'Coordinate transformation frames, rotation matrices, forward/inverse kinematics, and Jacobians.',
        topics: ['Rigid Body Transformations & Euler Angles', 'Denavit-Hartenberg (DH) Parameters', 'Forward & Inverse Kinematics', 'Dynamics & Torque Calculations'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'rob-step-2',
        title: 'Robot Operating System (ROS2) & Simulation',
        description: 'Nodes, topics, services, actions, URDF robot modeling, and Gazebo physical physics simulation.',
        topics: ['ROS2 Architecture & Publisher/Subscriber Nodes', 'URDF & Xacro Robot Modeling', 'Gazebo Physics Simulation', 'rviz Visualization'],
        estimatedWeeks: '6 weeks'
      },
      {
        id: 'rob-step-3',
        title: 'Perception, Sensor Fusion & Computer Vision',
        description: 'Process cameras, LiDAR, ultrasonic sensors, and IMU data with OpenCV and sensor fusion filters.',
        topics: ['OpenCV Object Tracking & Contour Detection', 'Point Cloud Processing (PCL)', 'Kalman Filters & Sensor Fusion', 'Depth Cameras & Visual Odometry'],
        estimatedWeeks: '5 weeks'
      },
      {
        id: 'rob-step-4',
        title: 'SLAM & Autonomous Navigation (Nav2)',
        description: 'Simultaneous Localization and Mapping, costmaps, and path planning algorithms (A*, Dijkstra).',
        topics: ['2D/3D LiDAR SLAM (Cartographer)', 'Nav2 Navigation Stack in ROS2', 'Global & Local Path Planners (A*, TEB)', 'Obstacle Avoidance & Hardware Deployment'],
        estimatedWeeks: '6 weeks'
      }
    ]
  },

  // 5. HIGHER STUDIES
  {
    id: 'higher-gate-mtech',
    title: 'GATE & M.Tech in IITs / IISc',
    category: 'Higher Studies',
    shortDescription: 'Master the Graduate Aptitude Test in Engineering for admission to premier M.Tech, MS (Research), and Ph.D. programs.',
    longDescription: 'A high GATE score unlocks admission to premier institutions like IISc Bangalore and IITs with monthly MHRD stipends (₹12,400/month), leading to elite R&D careers in global technology labs.',
    difficulty: 'Advanced',
    estimatedDuration: '8 - 12 months',
    skillsSummary: ['Engineering Math', 'Core Branch Syllabus', 'Previous Year Questions (PYQs)', 'Virtual Calculator', 'Mock Test Series'],
    popularRoles: ['IIT M.Tech Graduate', 'R&D Scientist', 'PSU Officer', 'Ph.D. Fellow'],
    relatedOpportunityTags: ['Scholarships', 'Fellowships', 'Research Opportunities', 'Govt Jobs'],
    steps: [
      {
        id: 'gate-step-1',
        title: 'Syllabus Breakdown & Subject Weightage',
        description: 'Analyze 10-year GATE question papers to identify high-scoring subjects and create a realistic timetable.',
        topics: ['Engineering Mathematics (13-15 Marks)', 'General Aptitude (15 Marks)', 'Core Branch Heavyweights (70 Marks)', 'PYQ Subject Weightage Mapping'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'gate-step-2',
        title: 'Concept Depth & Standard Reference Textbooks',
        description: 'Learn concepts thoroughly from standard reference books rather than shallow summary notes.',
        topics: ['In-depth Concept Clearance', 'Formula Cheat Sheets', 'Derivations & Boundary Cases', 'Topic-wise Practice Questions'],
        estimatedWeeks: '16 weeks'
      },
      {
        id: 'gate-step-3',
        title: 'Previous 25-Year Questions (PYQs) Solving',
        description: 'Solve every single previous year question with timer and virtual calculator.',
        topics: ['Solving 2000-2026 GATE Questions Twice', 'Error Notebook Maintenance', 'Virtual Scientific Calculator Practice', 'Time Management Strategy'],
        estimatedWeeks: '8 weeks'
      },
      {
        id: 'gate-step-4',
        title: 'Full-Length Test Series & Revision Sprints',
        description: 'Take 20+ full-length computer-based mock tests in the exact 3-hour exam window.',
        topics: ['Computer-Based Mock Tests (9 AM - 12 PM)', 'Test Performance Analysis & Score Stability', 'Formula Revision Cycles', 'COAP / CCMT Counseling Prep'],
        estimatedWeeks: '6 weeks'
      }
    ]
  },
  {
    id: 'higher-ms-abroad',
    title: 'MS Abroad (USA, Germany, Europe, Canada)',
    category: 'Higher Studies',
    shortDescription: 'Step-by-step roadmap for GRE, TOEFL/IELTS, Statement of Purpose (SOP), Letters of Recommendation, and visas.',
    longDescription: 'Pursue Master of Science (MS) degrees in top global universities in USA, Germany (low/zero tuition), Switzerland (ETH), or Canada. Open pathways to global innovation hubs in Silicon Valley and Europe.',
    difficulty: 'Intermediate',
    estimatedDuration: '10 - 14 months',
    skillsSummary: ['GRE / GMAT', 'TOEFL / IELTS', 'Research Papers / Projects', 'SOP & LORs', 'University Shortlisting', 'Visa & Funding'],
    popularRoles: ['International MS Graduate', 'Global Tech Lead', 'Research Fellow'],
    relatedOpportunityTags: ['Scholarships', 'Research Opportunities', 'Fellowships'],
    steps: [
      {
        id: 'ms-step-1',
        title: 'Profile Building (GPA, Projects & Publications)',
        description: 'Maintain strong undergraduate GPA (8.5+ preferred), publish research papers, and undertake capstone projects.',
        topics: ['High Academic GPA Preservation', 'Publishing Papers in IEEE / Springer', 'Industry Internships', 'Extracurricular & Leadership Evidence'],
        estimatedWeeks: 'Year 2 & 3'
      },
      {
        id: 'ms-step-2',
        title: 'Standardized Exams: GRE & TOEFL / IELTS',
        description: 'Score 320+ in GRE (Quantitative 165+) and 100+ in TOEFL / 7.5+ in IELTS.',
        topics: ['GRE Verbal Reasoning & Flashcards', 'GRE Quantitative Section Mastery (Target 167+)', 'TOEFL / IELTS Speaking & Writing Practice', 'Official ETS Mock Tests'],
        estimatedWeeks: '12 weeks'
      },
      {
        id: 'ms-step-3',
        title: 'University Shortlisting & Faculty Alignment',
        description: 'Categorize target universities into Ambitious, Target, and Safe categories based on lab research.',
        topics: ['US News / QS Ranking Analysis', 'Matching Professors & Research Labs', 'Tuition vs Living Cost Calculation (e.g. Germany DAAD)', 'Shortlist of 8-12 Universities'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ms-step-4',
        title: 'SOP, LORs, Applications & Visa Interview',
        description: 'Craft a compelling Statement of Purpose, obtain 3 strong academic/industry recommendation letters, and secure F-1/Student Visa.',
        topics: ['Writing a Compelling Personal SOP', '3 Academic / Professional LORs', 'Submitting Applications (Fall/Spring Deadlines)', 'I-20, Financial Proofs & Visa Mock Interviews'],
        estimatedWeeks: '12 weeks'
      }
    ]
  },

  // 6. GOVERNMENT & COMPETITIVE EXAMS
  {
    id: 'govt-psu-gate',
    title: 'PSU Recruitment via GATE (ONGC, IOCL, NTPC, BHEL)',
    category: 'Government & Competitive Exams',
    shortDescription: 'Land prestigious executive trainee officer roles in Maharatna and Navratna Public Sector Enterprises.',
    longDescription: 'Public Sector Undertakings offer job security, high pay scales (₹15–20 LPA CTC with allowances), subsidized housing, medical coverage, and direct nation-building responsibilities.',
    difficulty: 'Advanced',
    estimatedDuration: '10 - 12 months',
    skillsSummary: ['GATE Top 200 Rank', 'Technical Interview Prep', 'Group Discussions (GD)', 'Current Affairs & Energy Sector'],
    popularRoles: ['Executive Engineer Trainee', 'Assistant Executive Engineer', 'Scientist/Engineer SC'],
    relatedOpportunityTags: ['Jobs', 'Govt Opportunities', 'Fellowships'],
    steps: [
      {
        id: 'psu-step-1',
        title: 'Securing an AIR Top 100-300 in GATE',
        description: 'PSUs shortlist candidates strictly based on GATE marks. Score 80+ marks for general category.',
        topics: ['Comprehensive GATE Syllabus Coverage', 'High Speed & Accuracy Practice', 'Minimizing Negative Marking', 'Consistent Mock Exam Scores'],
        estimatedWeeks: '8 months'
      },
      {
        id: 'psu-step-2',
        title: 'PSU Applications & Form Tracking',
        description: 'Keep track of notifications from ONGC, IOCL, NTPC, PowerGrid, BPCL, HPCL, GAIL, and BARC.',
        topics: ['PSU Online Portal Registration', 'Document Verification Checklist', 'Medical Fitness Criteria Awareness', 'Cutoff Tracking from Previous Batches'],
        estimatedWeeks: 'Ongoing'
      },
      {
        id: 'psu-step-3',
        title: 'Technical Interview & Group Discussion (GD/GT)',
        description: 'Prepare for panel interviews focusing on final year project, industrial internship, and practical engineering.',
        topics: ['Explaining Major B.Tech Project in Depth', 'Practical Machinery / Coding Demonstration', 'Group Discussion on National & Economic Topics', 'Personal HR & Behavioral Preparation'],
        estimatedWeeks: '6 weeks'
      }
    ]
  },
  {
    id: 'govt-upsc-ese',
    title: 'UPSC Engineering Services Examination (ESE / IES)',
    category: 'Government & Competitive Exams',
    shortDescription: 'The pinnacle of government technical service: Indian Railway Service of Electrical/Mechanical Engineers, CPWD, Military Engineer Services.',
    longDescription: 'UPSC ESE selects Class-1 Gazetted technical leaders for the Government of India. The examination tests general studies, engineering aptitude, and deep technical mastery through Prelims, Mains (conventional), and Personality Test.',
    difficulty: 'Advanced',
    estimatedDuration: '12 - 18 months',
    skillsSummary: ['General Studies & Engineering Aptitude', 'Technical Objective (Prelims)', 'Conventional Subjective (Mains)', 'Personality Interview'],
    popularRoles: ['Indian Railway Service of Engineers', 'Central Engineering Service (CPWD)', 'Central Water Engineering Service', 'Border Roads Engineering'],
    relatedOpportunityTags: ['Govt Jobs', 'Competitive Exams'],
    steps: [
      {
        id: 'ese-step-1',
        title: 'Stage 1: Preliminary Exam (Objective)',
        description: 'Paper 1 (General Studies & Engineering Aptitude, 200 marks) + Paper 2 (Technical Discipline, 300 marks).',
        topics: ['Current Issues & Project Management', 'Ethics & Values in Engineering Profession', 'Environmental Pollution & Material Science', 'Core Discipline Technical Speed Sprints'],
        estimatedWeeks: '6 months'
      },
      {
        id: 'ese-step-2',
        title: 'Stage 2: Mains Examination (Conventional Subjective)',
        description: 'Two conventional subjective papers of 300 marks each testing step-by-step problem derivations.',
        topics: ['Answer Writing Practice with Detailed Derivations', 'Standard Formula Presentations & Neat Diagrams', 'Previous 15-Year ESE Mains Solved Papers', 'Time Management for 3-Hour Subjective Writing'],
        estimatedWeeks: '4 months'
      },
      {
        id: 'ese-step-3',
        title: 'Stage 3: Personality Test & Interview',
        description: '200-mark interview at Dholpur House, New Delhi, evaluating leadership, problem-solving, and integrity.',
        topics: ['Detailed Application Form (DAF) In-depth Analysis', 'National Infrastructure & Engineering Initiatives', 'Situational Judgement & Leadership Dilemmas', 'Mock Interview Panels with Senior Bureaucrats'],
        estimatedWeeks: '6 weeks'
      }
    ]
  },

  // 7. RESEARCH & ACADEMIA
  {
    id: 'research-fellowships',
    title: 'Research Fellowships & Academic Publishing',
    category: 'Research & Academia',
    shortDescription: 'Publish peer-reviewed papers in IEEE/ACM, secure summer research fellowships at IISc/IITs/CERN, and file patents.',
    longDescription: 'Designed for ambitious engineering undergraduates seeking cutting-edge research careers, direct Ph.D. admissions, or scientist positions in national laboratories (ISRO, DRDO, CSIR).',
    difficulty: 'Advanced',
    estimatedDuration: '6 - 12 months',
    skillsSummary: ['Literature Review', 'LaTeX & Research Writing', 'Benchmarking & Experiments', 'IEEE / ACM Submission', 'Summer Fellowships'],
    popularRoles: ['Research Assistant', 'Junior Research Fellow (JRF)', 'Ph.D. Scholar', 'Scientist B'],
    relatedOpportunityTags: ['Research Opportunities', 'Fellowships', 'Scholarships'],
    steps: [
      {
        id: 'res-step-1',
        title: 'Literature Survey & Identifying Novel Gaps',
        description: 'Read 30+ recent IEEE, ACM, Springer, or Elsevier journal papers in a specialized sub-domain.',
        topics: ['Google Scholar & ArXiv Alert Setup', 'Literature Review Matrix Creation', 'Identifying Research Gaps & Novelty', 'Formulating Testable Hypotheses'],
        estimatedWeeks: '6 weeks'
      },
      {
        id: 'res-step-2',
        title: 'Rigorous Experimentation & Benchmarking',
        description: 'Implement baseline models, test edge cases, and run statistically valid benchmarking trials.',
        topics: ['Reproducing Existing Baseline Papers', 'Designing Custom Architectures / Hardware', 'Statistical Significance Testing', 'Dataset Preparation & Validation'],
        estimatedWeeks: '10 weeks'
      },
      {
        id: 'res-step-3',
        title: 'Scientific Manuscript Writing with LaTeX',
        description: 'Draft double-column IEEE/ACM manuscripts using Overleaf LaTeX, high-res vector figures, and clean citations.',
        topics: ['Overleaf LaTeX Templates & BibTeX', 'Writing Introduction, Methodology, Results & Discussion', 'Creating High-Resolution Vector Figures (Inkscape/Python)', 'Peer Review Rebuttals & Revisions'],
        estimatedWeeks: '6 weeks'
      },
      {
        id: 'res-step-4',
        title: 'Summer Research Fellowship Applications',
        description: 'Apply for Indian Academy of Sciences (IASc), IIT Summer Research Fellowships, and international programs like CERN Summer.',
        topics: ['IASc-INSA-NASI Summer Research Fellowship', 'IIT Bombay / Madras / Delhi Research Fellowships', 'CERN Openlab / DAAD WISE Germany', 'Reaching out to Professors via Cold Email'],
        estimatedWeeks: '4 weeks'
      }
    ]
  },

  // 8. ENTREPRENEURSHIP
  {
    id: 'startup-entrepreneurship',
    title: 'Student Startup & Campus Entrepreneurship',
    category: 'Entrepreneurship',
    shortDescription: 'Transform a college innovation from idea to Minimum Viable Product (MVP), incubator grant, and seed investment.',
    longDescription: 'Students are founding world-changing companies right from their dorms. Learn how to validate problems, build an MVP in weeks, join government incubators (T-Hub, AIC), access Startup India grants, and pitch to angel investors.',
    difficulty: 'Intermediate',
    estimatedDuration: '6 - 12 months',
    skillsSummary: ['Problem Validation', 'Lean MVP', 'Pitch Deck', 'Startup India Recognition', 'Campus Incubators', 'Seed Grants'],
    popularRoles: ['Founder / CEO', 'Chief Technology Officer (CTO)', 'Product Lead', 'Startup Operator'],
    relatedOpportunityTags: ['Hackathons', 'Competitions', 'Fellowships', 'Startups'],
    steps: [
      {
        id: 'ent-step-1',
        title: 'Problem Discovery & Customer Interviews',
        description: 'Talk to 50 real potential users to validate an acute, hair-on-fire problem before writing a line of code.',
        topics: ['The Mom Test Interview Framework', 'Identifying Urgent Pain Points vs Nice-to-Haves', 'Total Addressable Market (TAM) Estimation', 'Value Proposition Canvas'],
        estimatedWeeks: '4 weeks'
      },
      {
        id: 'ent-step-2',
        title: 'Building a Rapid Minimum Viable Product (MVP)',
        description: 'Ship a functioning version of your product in 30 days using modern tech stacks, no-code, or rapid prototypes.',
        topics: ['Defining Core Value Feature Set', 'Full Stack Prototyping in 4 Weeks', 'Early User Onboarding & Feedback Loops', 'Tracking Activation & Retention Metrics'],
        estimatedWeeks: '6 weeks'
      },
      {
        id: 'ent-step-3',
        title: 'Campus Incubators & Government Grants',
        description: 'Register with Startup India (DPIIT) and apply for non-dilutive government grants (SISFS, BIRAC, NIDHI-PRAYAS).',
        topics: ['DPIIT Startup India Recognition', 'NIDHI-PRAYAS & SISFS Seed Grants (up to ₹20-50 Lakhs)', 'Joining Campus Incubators & T-Hub / AIC', 'Company Incorporation (Private Limited)'],
        estimatedWeeks: '8 weeks'
      },
      {
        id: 'ent-step-4',
        title: 'Investor Pitch Decks & Demo Days',
        description: 'Create an 11-slide investor deck, pitch in national business plan competitions, and raise angel funding.',
        topics: ['11-Slide Seed Pitch Deck Structure', 'Traction Metrics (Users, MRR, Pilots)', 'National E-Cell Competitions (IIT Bombay Eureka, etc.)', 'Angel Investors & Syndicate Pitching'],
        estimatedWeeks: '4 weeks'
      }
    ]
  }
];
