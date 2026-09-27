import { LearningSkill } from '../types';

export const learningSkillsData: LearningSkill[] = [
  // FRONTEND DEVELOPMENT
  {
    id: 'html',
    name: 'HTML5',
    category: 'Frontend Development',
    level: 'Beginner',
    shortDescription: 'The foundational markup language of the World Wide Web for structuring page content.',
    whatYouWillLearn: [
      'HTML document structure and semantic markup',
      'Text formatting, headings, and paragraphs',
      'Hyperlinks, image embedding, and media elements',
      'Forms, inputs, validation, and accessibility (a11y)',
      'Tables and semantic sections (nav, main, article, footer)'
    ],
    estimatedHours: '12 hours',
    resources: [
      {
        title: 'MDN Web Docs — Structuring the Web with HTML',
        provider: 'Mozilla Developer Network',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — HTML5 Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/html/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'freeCodeCamp — Responsive Web Design Certification (HTML)',
        provider: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/2022/responsive-web-design/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['frontend-dev', 'fullstack-dev', 'software-dev', 'ui-ux-designer'],
    recommendedOpportunityKeywords: ['Frontend', 'Web Development', 'UI/UX']
  },
  {
    id: 'css',
    name: 'CSS3 & Modern Layouts',
    category: 'Frontend Development',
    level: 'Beginner',
    shortDescription: 'Cascading Style Sheets for styling, modern Flexbox & Grid layouts, and responsive design.',
    whatYouWillLearn: [
      'CSS Selectors, Cascade, Specificity, and Inheritance',
      'The Box Model (Margin, Border, Padding, Content)',
      'Modern Flexbox and CSS Grid layout systems',
      'Responsive design with Media Queries and fluid units',
      'Transitions, keyframe animations, and CSS variables'
    ],
    estimatedHours: '18 hours',
    resources: [
      {
        title: 'MDN Web Docs — Learn CSS',
        provider: 'Mozilla Developer Network',
        url: 'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — CSS Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/css/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'web.dev — Learn CSS by Google Chrome Team',
        provider: 'Google web.dev',
        url: 'https://web.dev/learn/css',
        type: 'Documentation',
        free: true
      }
    ],
    relatedCareerIds: ['frontend-dev', 'fullstack-dev', 'ui-ux-designer'],
    recommendedOpportunityKeywords: ['CSS', 'Frontend Hackathons', 'Web Development']
  },
  {
    id: 'javascript',
    name: 'JavaScript (ES6+)',
    category: 'Frontend Development',
    level: 'Beginner',
    shortDescription: 'The core programming language of the modern web for dynamic behavior, events, and asynchronous programming.',
    whatYouWillLearn: [
      'Variables, data types, functions, and control flow',
      'Arrays, object destructuring, and ES6+ features',
      'DOM manipulation and browser event handling',
      'Asynchronous JS: Promises, async/await, and Fetch API',
      'JSON parsing, error handling, and browser storage'
    ],
    estimatedHours: '30 hours',
    resources: [
      {
        title: 'MDN Web Docs — JavaScript Guide',
        provider: 'Mozilla Developer Network',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'javascript.info — The Modern JavaScript Tutorial',
        provider: 'JavaScript.info',
        url: 'https://javascript.info/',
        type: 'Documentation',
        free: true
      },
      {
        title: 'freeCodeCamp — JavaScript Algorithms & Data Structures',
        provider: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['frontend-dev', 'backend-dev', 'fullstack-dev', 'software-dev'],
    recommendedOpportunityKeywords: ['JavaScript', 'Web Development', 'Frontend', 'Hackathons']
  },
  {
    id: 'react',
    name: 'React 19 & Component Architecture',
    category: 'Frontend Development',
    level: 'Intermediate',
    shortDescription: 'The industry-standard declarative UI library for building component-driven single-page web applications.',
    whatYouWillLearn: [
      'JSX syntax, components, and unidirectional props',
      'State management with useState, useReducer, and Context',
      'Side effects, data fetching, and lifecycle with useEffect',
      'Custom hooks, memoization (useMemo, useCallback)',
      'Client-side routing and component composition patterns'
    ],
    estimatedHours: '28 hours',
    resources: [
      {
        title: 'React Official Documentation — Learn React',
        provider: 'React.dev (Meta)',
        url: 'https://react.dev/learn',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'freeCodeCamp — Front End Development Libraries (React)',
        provider: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/front-end-development-libraries/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'W3Schools — React Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/REACT/DEFAULT.ASP',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['frontend-dev', 'fullstack-dev'],
    recommendedOpportunityKeywords: ['React', 'Frontend Internships', 'Web Hackathons']
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'Frontend Development',
    level: 'Intermediate',
    shortDescription: 'Typed superset of JavaScript providing static type verification, interfaces, and developer tooling.',
    whatYouWillLearn: [
      'Type annotations, primitive types, and type inference',
      'Interfaces, type aliases, and union/intersection types',
      'Generics, utility types, and keyof operator',
      'Typing React components, props, hooks, and events',
      'tsconfig.json configuration and compiler options'
    ],
    estimatedHours: '16 hours',
    resources: [
      {
        title: 'TypeScript Official Handbook',
        provider: 'Microsoft TypeScript',
        url: 'https://www.typescriptlang.org/docs/handbook/intro.html',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — TypeScript Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/typescript/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['frontend-dev', 'backend-dev', 'fullstack-dev'],
    recommendedOpportunityKeywords: ['TypeScript', 'Full Stack', 'Software Engineering']
  },

  // BACKEND DEVELOPMENT
  {
    id: 'python',
    name: 'Python Programming',
    category: 'Programming Fundamentals',
    level: 'Beginner',
    shortDescription: 'Versatile, high-level language essential for software development, data science, AI/ML, and automation.',
    whatYouWillLearn: [
      'Syntax, variable types, collections (lists, tuples, dicts, sets)',
      'Functions, scope, lambda expressions, and decorators',
      'Object-Oriented Programming (Classes, Inheritance, Polymorphism)',
      'File I/O, exception handling, and virtual environments',
      'Modules, pip packages, and standard library tools'
    ],
    estimatedHours: '25 hours',
    resources: [
      {
        title: 'Python.org Official Tutorial (v3.12+)',
        provider: 'Python Software Foundation',
        url: 'https://docs.python.org/3/tutorial/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — Python Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/python/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'freeCodeCamp — Scientific Computing with Python',
        provider: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/scientific-computing-with-python/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['backend-dev', 'data-scientist', 'ml-engineer', 'ai-engineer', 'data-analyst'],
    recommendedOpportunityKeywords: ['Python', 'AI Hackathons', 'Data Science', 'Backend Internships']
  },
  {
    id: 'java',
    name: 'Java & Object-Oriented Design',
    category: 'Programming Fundamentals',
    level: 'Beginner',
    shortDescription: 'Enterprise-grade programming language powering enterprise backends, Android, and distributed systems.',
    whatYouWillLearn: [
      'JVM, JDK, primitive types, and operators',
      'Core OOP: Encapsulation, Abstraction, Inheritance, Polymorphism',
      'Java Collections Framework (ArrayList, HashMap, LinkedList, HashSet)',
      'Exception Handling, Generics, and Multithreading basics',
      'Java 8+ Streams API and Lambda expressions'
    ],
    estimatedHours: '32 hours',
    resources: [
      {
        title: 'Oracle Java Documentation & Tutorials',
        provider: 'Oracle',
        url: 'https://docs.oracle.com/javase/tutorial/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — Java Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/java/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'Baeldung — Java Fundamentals Guides',
        provider: 'Baeldung',
        url: 'https://www.baeldung.com/java-tutorial',
        type: 'Documentation',
        free: true
      }
    ],
    relatedCareerIds: ['software-dev', 'backend-dev'],
    recommendedOpportunityKeywords: ['Java', 'Enterprise Software', 'SDE Internships']
  },
  {
    id: 'dsa',
    name: 'Data Structures & Algorithms (DSA)',
    category: 'Programming Fundamentals',
    level: 'Intermediate',
    shortDescription: 'Crucial algorithmic problem-solving techniques required for technical interviews, competitions, and efficient systems.',
    whatYouWillLearn: [
      'Time and Space Complexity (Big-O analysis)',
      'Arrays, Strings, Two Pointers, and Sliding Window',
      'Stacks, Queues, Linked Lists, and Hash Maps',
      'Trees, Binary Search Trees, Heaps, and Graph Traversals (BFS/DFS)',
      'Dynamic Programming, Greedy Algorithms, and Backtracking'
    ],
    estimatedHours: '60 hours',
    resources: [
      {
        title: 'GeeksforGeeks — Complete DSA Tutorial',
        provider: 'GeeksforGeeks',
        url: 'https://www.geeksforgeeks.org/data-structures/',
        type: 'Documentation',
        free: true
      },
      {
        title: 'NeetCode Roadmap & Practice',
        provider: 'NeetCode.io',
        url: 'https://neetcode.io/roadmap',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'LeetCode Problem Sets',
        provider: 'LeetCode',
        url: 'https://leetcode.com/explore/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['software-dev', 'backend-dev', 'fullstack-dev'],
    recommendedOpportunityKeywords: ['Coding Competitions', 'DSA', 'SDE', 'TCS CodeVita', 'Google Kickstart']
  },
  {
    id: 'nodejs-express',
    name: 'Node.js & Express.js',
    category: 'Backend Development',
    level: 'Intermediate',
    shortDescription: 'Event-driven, non-blocking asynchronous JavaScript server runtime for scalable REST APIs.',
    whatYouWillLearn: [
      'Node.js Event Loop, modular architecture, and file system',
      'Express app initialization, routing, and middleware pipelines',
      'Request handling, parameter validation, and JSON responses',
      'Authentication with JWT (JSON Web Tokens) and bcrypt password hashing',
      'Error handling middleware and environment configuration'
    ],
    estimatedHours: '22 hours',
    resources: [
      {
        title: 'Node.js Official Documentation & Guides',
        provider: 'Node.js Foundation',
        url: 'https://nodejs.org/en/learn',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Express.js Official Documentation',
        provider: 'Expressjs.com',
        url: 'https://expressjs.com/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'freeCodeCamp — Back End Development and APIs',
        provider: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/learn/back-end-development-and-apis/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['backend-dev', 'fullstack-dev'],
    recommendedOpportunityKeywords: ['Node.js', 'Backend', 'Full Stack Hackathons']
  },
  {
    id: 'rest-apis',
    name: 'RESTful API Design & Architecture',
    category: 'Backend Development',
    level: 'Intermediate',
    shortDescription: 'Principles of architectural design for web services, HTTP verbs, status codes, and API security.',
    whatYouWillLearn: [
      'HTTP methods (GET, POST, PUT, PATCH, DELETE) & status codes',
      'Resource naming conventions and URL parameter design',
      'Statelessness, idempotency, and caching mechanisms',
      'Pagination, filtering, sorting, and rate limiting',
      'API documentation with OpenAPI / Swagger and Postman testing'
    ],
    estimatedHours: '14 hours',
    resources: [
      {
        title: 'RESTful API Tutorial & Best Practices',
        provider: 'Restfulapi.net',
        url: 'https://restfulapi.net/',
        type: 'Documentation',
        free: true
      },
      {
        title: 'Postman Learning Center — Designing APIs',
        provider: 'Postman',
        url: 'https://learning.postman.com/docs/designing-and-developing-your-api/the-api-workflow/',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['backend-dev', 'fullstack-dev', 'software-dev'],
    recommendedOpportunityKeywords: ['REST APIs', 'Backend Developer', 'Microservices']
  },
  {
    id: 'spring-boot',
    name: 'Spring Boot (Java Backend)',
    category: 'Backend Development',
    level: 'Intermediate',
    shortDescription: 'Enterprise Java framework for building stand-alone, production-ready microservices.',
    whatYouWillLearn: [
      'Dependency Injection & Inversion of Control (IoC)',
      'Spring MVC Controllers, Services, and Repositories',
      'Spring Data JPA & Hibernate ORM integration',
      'Spring Security & OAuth2 / JWT configuration',
      'Building production jar files and Docker containers'
    ],
    estimatedHours: '30 hours',
    resources: [
      {
        title: 'Spring Boot Official Quickstart Guides',
        provider: 'Spring.io (VMware / Broadcom)',
        url: 'https://spring.io/quickstart',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Baeldung — Spring Boot Tutorials',
        provider: 'Baeldung',
        url: 'https://www.baeldung.com/spring-boot',
        type: 'Documentation',
        free: true
      }
    ],
    relatedCareerIds: ['backend-dev', 'software-dev'],
    recommendedOpportunityKeywords: ['Java Spring', 'Enterprise Software', 'Fintech Internships']
  },

  // DATABASE
  {
    id: 'sql-postgres',
    name: 'SQL & PostgreSQL',
    category: 'Database',
    level: 'Beginner',
    shortDescription: 'Relational database management, complex queries, joins, indexes, and schema design.',
    whatYouWillLearn: [
      'Relational modeling, primary & foreign keys, normalization (1NF-3NF)',
      'DDL (CREATE, ALTER) and DML (INSERT, UPDATE, DELETE)',
      'Queries: INNER/LEFT/RIGHT JOIN, GROUP BY, HAVING, subqueries',
      'Window functions, CTEs (Common Table Expressions), and aggregation',
      'Indexing strategies, EXPLAIN ANALYZE, and query optimization'
    ],
    estimatedHours: '20 hours',
    resources: [
      {
        title: 'PostgreSQL Official Documentation',
        provider: 'PostgreSQL Global Development Group',
        url: 'https://www.postgresql.org/docs/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — SQL Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/sql/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'SQLBolt — Interactive Lessons on SQL',
        provider: 'SQLBolt',
        url: 'https://sqlbolt.com/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['backend-dev', 'fullstack-dev', 'data-analyst', 'data-scientist'],
    recommendedOpportunityKeywords: ['SQL', 'Databases', 'Data Analyst Internships']
  },
  {
    id: 'mongodb',
    name: 'MongoDB & NoSQL',
    category: 'Database',
    level: 'Intermediate',
    shortDescription: 'Document-oriented NoSQL database for modern flexible schema applications and rapid prototyping.',
    whatYouWillLearn: [
      'Document model, BSON format, and collection structures',
      'CRUD operations with Mongoose ODM in Node.js',
      'MongoDB Aggregation Pipeline ($match, $group, $lookup, $project)',
      'Indexing, replication, and sharding concepts',
      'Data modeling patterns for 1-to-N and N-to-N relationships'
    ],
    estimatedHours: '16 hours',
    resources: [
      {
        title: 'MongoDB University — Free Courses & Documentation',
        provider: 'MongoDB Official',
        url: 'https://learn.mongodb.com/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'W3Schools — MongoDB Tutorial',
        provider: 'W3Schools',
        url: 'https://www.w3schools.com/mongodb/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['fullstack-dev', 'backend-dev'],
    recommendedOpportunityKeywords: ['MERN Stack', 'MongoDB', 'Hackathons']
  },

  // AI & MACHINE LEARNING
  {
    id: 'machine-learning',
    name: 'Machine Learning Fundamentals',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    shortDescription: 'Core supervised and unsupervised learning algorithms, model evaluation, and scikit-learn.',
    whatYouWillLearn: [
      'Supervised learning: Linear Regression, Logistic Regression, Decision Trees',
      'Ensemble methods: Random Forests, Gradient Boosting (XGBoost, LightGBM)',
      'Unsupervised learning: K-Means clustering, PCA dimensional reduction',
      'Model evaluation: Train/test split, Cross-Validation, ROC-AUC, F1 score',
      'Feature engineering, scaling, and handling missing data'
    ],
    estimatedHours: '35 hours',
    resources: [
      {
        title: 'Google Developers — Machine Learning Crash Course',
        provider: 'Google for Developers',
        url: 'https://developers.google.com/machine-learning/crash-course',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Scikit-Learn Official User Guide',
        provider: 'Scikit-learn',
        url: 'https://scikit-learn.org/stable/user_guide.html',
        type: 'Documentation',
        free: true
      },
      {
        title: 'Kaggle Learn — Intro to Machine Learning',
        provider: 'Kaggle',
        url: 'https://www.kaggle.com/learn/intro-to-machine-learning',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['ml-engineer', 'data-scientist', 'ai-engineer'],
    recommendedOpportunityKeywords: ['Machine Learning', 'AI Hackathons', 'Kaggle Competitions', 'ML Internships']
  },
  {
    id: 'deep-learning',
    name: 'Deep Learning & Neural Networks',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    shortDescription: 'Deep artificial neural networks, backpropagation, CNNs for computer vision, and PyTorch.',
    whatYouWillLearn: [
      'Perceptrons, Multi-Layer Perceptrons (MLP), and activation functions',
      'Backpropagation, gradient descent optimizers (Adam, SGD)',
      'Convolutional Neural Networks (CNNs) for image classification',
      'Recurrent Neural Networks (RNNs), LSTMs, and sequence models',
      'Building and training models in PyTorch and TensorFlow'
    ],
    estimatedHours: '40 hours',
    resources: [
      {
        title: 'PyTorch Official Tutorials — Deep Learning with PyTorch',
        provider: 'PyTorch (Linux Foundation)',
        url: 'https://pytorch.org/tutorials/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Fast.ai — Practical Deep Learning for Coders',
        provider: 'Fast.ai',
        url: 'https://course.fast.ai/',
        type: 'Course',
        free: true
      }
    ],
    relatedCareerIds: ['ml-engineer', 'ai-engineer', 'data-scientist'],
    recommendedOpportunityKeywords: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Research Fellowships']
  },
  {
    id: 'gen-ai',
    name: 'Generative AI & LLMs',
    category: 'AI & Machine Learning',
    level: 'Advanced',
    shortDescription: 'Transformer architectures, prompt engineering, RAG (Retrieval Augmented Generation), and embeddings.',
    whatYouWillLearn: [
      'Transformer architecture (Self-Attention mechanism, Positional Encoding)',
      'Large Language Models (LLMs) and context windows',
      'Prompt Engineering techniques (Few-shot, Chain of Thought)',
      'Retrieval Augmented Generation (RAG) with vector databases (Chroma, Pinecone)',
      'Fine-tuning techniques (LoRA, QLoRA) and agentic workflows'
    ],
    estimatedHours: '25 hours',
    resources: [
      {
        title: 'Hugging Face — Generative AI & NLP Course',
        provider: 'Hugging Face',
        url: 'https://huggingface.co/learn/nlp-course',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'Google Cloud Skills Boost — Generative AI Learning Path',
        provider: 'Google Cloud',
        url: 'https://www.cloudskillsboost.google/paths/118',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['ai-engineer', 'ml-engineer', 'software-dev'],
    recommendedOpportunityKeywords: ['Generative AI', 'LLM Hackathons', 'AI Fellowships']
  },

  // DATA SCIENCE & ANALYTICS
  {
    id: 'pandas-numpy',
    name: 'NumPy & Pandas for Data Analysis',
    category: 'Data Science',
    level: 'Beginner',
    shortDescription: 'Vectorized mathematical computing and tabular data manipulation libraries in Python.',
    whatYouWillLearn: [
      'NumPy N-dimensional arrays, broadcasting, and indexing',
      'Pandas DataFrames and Series data manipulation',
      'Data cleaning: Handling duplicates, missing values, and type conversions',
      'Grouping, aggregating, pivot tables, and merging datasets',
      'Exploratory Data Analysis (EDA) workflows'
    ],
    estimatedHours: '20 hours',
    resources: [
      {
        title: 'Pandas Official Getting Started Tutorials',
        provider: 'Pandas Development Team',
        url: 'https://pandas.pydata.org/docs/getting_started/index.html',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'NumPy Official User Guide',
        provider: 'NumPy.org',
        url: 'https://numpy.org/doc/stable/user/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Kaggle — Pandas Micro-Course',
        provider: 'Kaggle',
        url: 'https://www.kaggle.com/learn/pandas',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['data-scientist', 'data-analyst', 'ml-engineer'],
    recommendedOpportunityKeywords: ['Data Science', 'Data Analytics', 'Kaggle']
  },
  {
    id: 'data-viz',
    name: 'Data Visualization & BI Tools',
    category: 'Data Science',
    level: 'Beginner',
    shortDescription: 'Visual storytelling with Matplotlib, Seaborn, Power BI, and Tableau dashboards.',
    whatYouWillLearn: [
      'Chart selection: Bar, Line, Scatter, Histogram, Heatmaps, Boxplots',
      'Matplotlib & Seaborn styling, subplots, and multi-variable plots',
      'Data dashboarding principles and visual storytelling',
      'Microsoft Power BI: Data modeling, DAX formulas, and interactive reports',
      'KPI metric cards and drill-through visual dashboards'
    ],
    estimatedHours: '18 hours',
    resources: [
      {
        title: 'Microsoft Learn — Power BI Fundamentals',
        provider: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/training/powerplatform/power-bi',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Seaborn Official Gallery & Tutorial',
        provider: 'Seaborn PyData',
        url: 'https://seaborn.pydata.org/tutorial.html',
        type: 'Documentation',
        free: true
      }
    ],
    relatedCareerIds: ['data-analyst', 'data-scientist'],
    recommendedOpportunityKeywords: ['Data Analyst', 'Business Intelligence', 'Analytics Case Competitions']
  },

  // CLOUD & DEVOPS
  {
    id: 'git-github',
    name: 'Git & GitHub Version Control',
    category: 'Tools & Technologies',
    level: 'Beginner',
    shortDescription: 'Distributed version control, branching workflows, pull requests, and collaborative open-source practices.',
    whatYouWillLearn: [
      'Git repository initialization, staging, committing, and log history',
      'Branching, merging, and resolving merge conflicts',
      'Remote repositories on GitHub: clones, remotes, push, and pull',
      'Pull requests, code reviews, and issue tracking',
      'Git rebase, cherry-pick, stashing, and tags'
    ],
    estimatedHours: '12 hours',
    resources: [
      {
        title: 'GitHub Skills — Interactive Learning Repositories',
        provider: 'GitHub Official',
        url: 'https://skills.github.com/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'Git SCM Official Pro Git Book',
        provider: 'Git-scm.com',
        url: 'https://git-scm.com/book/en/v2',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Atlassian Git Tutorials',
        provider: 'Atlassian',
        url: 'https://www.atlassian.com/git/tutorials',
        type: 'Documentation',
        free: true
      }
    ],
    relatedCareerIds: ['software-dev', 'frontend-dev', 'backend-dev', 'fullstack-dev', 'devops-engineer', 'cloud-engineer'],
    recommendedOpportunityKeywords: ['Open Source Programs', 'GSoC', 'Hacktoberfest', 'Hackathons']
  },
  {
    id: 'docker',
    name: 'Docker & Containerization',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    shortDescription: 'Package applications into lightweight, reproducible containers across development and production.',
    whatYouWillLearn: [
      'Containers vs Virtual Machines, Docker architecture',
      'Writing Dockerfiles: FROM, RUN, COPY, WORKDIR, CMD, ENTRYPOINT',
      'Building images, layer caching, and minimizing image sizes',
      'Docker Compose for multi-container applications (app + database)',
      'Volumes for persistence and Docker networking'
    ],
    estimatedHours: '18 hours',
    resources: [
      {
        title: 'Docker Official Get Started Guides',
        provider: 'Docker Official',
        url: 'https://docs.docker.com/get-started/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Play with Docker — Hands-on Web Sandbox',
        provider: 'Docker Labs',
        url: 'https://labs.play-with-docker.com/',
        type: 'Interactive Tutorial',
        free: true
      }
    ],
    relatedCareerIds: ['devops-engineer', 'cloud-engineer', 'backend-dev', 'fullstack-dev'],
    recommendedOpportunityKeywords: ['DevOps Internships', 'Cloud Hackathons', 'Backend']
  },
  {
    id: 'cloud-aws',
    name: 'Cloud Computing (AWS / GCP / Azure)',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    shortDescription: 'Core infrastructure: Compute (EC2), Storage (S3), Databases (RDS), Networking (VPC), and Serverless.',
    whatYouWillLearn: [
      'Cloud service models: IaaS, PaaS, SaaS, and Shared Responsibility',
      'Compute instances, auto-scaling, and load balancing',
      'Object storage (S3) and block storage volumes (EBS)',
      'Virtual Private Clouds (VPC), subnets, routing, and Security Groups',
      'IAM (Identity and Access Management) roles and least-privilege security'
    ],
    estimatedHours: '28 hours',
    resources: [
      {
        title: 'AWS Skill Builder — Cloud Foundations',
        provider: 'Amazon Web Services',
        url: 'https://explore.skillbuilder.aws/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Google Cloud Training & Documentation',
        provider: 'Google Cloud',
        url: 'https://cloud.google.com/docs',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Microsoft Learn — Azure Fundamentals',
        provider: 'Microsoft Learn',
        url: 'https://learn.microsoft.com/en-us/training/paths/microsoft-azure-fundamentals-describe-cloud-concepts/',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['cloud-engineer', 'devops-engineer', 'backend-dev'],
    recommendedOpportunityKeywords: ['Cloud Engineer', 'AWS Certification', 'DevOps Internships']
  },
  {
    id: 'cicd-kubernetes',
    name: 'CI/CD Pipelines & Kubernetes',
    category: 'Cloud & DevOps',
    level: 'Advanced',
    shortDescription: 'Continuous Integration / Continuous Deployment with GitHub Actions and container orchestration with K8s.',
    whatYouWillLearn: [
      'Automated testing & linting workflows with GitHub Actions',
      'Building and publishing container images to registries',
      'Kubernetes core concepts: Pods, Deployments, Services, ConfigMaps',
      'Horizontal Pod Autoscaling and rolling deployment strategies',
      'Monitoring and logging with Prometheus and Grafana'
    ],
    estimatedHours: '32 hours',
    resources: [
      {
        title: 'Kubernetes Official Interactive Basics Tutorial',
        provider: 'Kubernetes (CNCF)',
        url: 'https://kubernetes.io/docs/tutorials/kubernetes-basics/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'GitHub Actions Documentation',
        provider: 'GitHub Official',
        url: 'https://docs.github.com/en/actions',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['devops-engineer', 'cloud-engineer'],
    recommendedOpportunityKeywords: ['DevOps', 'Site Reliability Engineering', 'Cloud Fellowships']
  },

  // CYBERSECURITY
  {
    id: 'cybersecurity-basics',
    name: 'Cybersecurity Fundamentals & Networking',
    category: 'Cybersecurity',
    level: 'Beginner',
    shortDescription: 'OSI model, TCP/IP protocols, firewalls, CIA triad, cryptography, and network security basics.',
    whatYouWillLearn: [
      'The CIA Triad (Confidentiality, Integrity, Availability)',
      'OSI 7 Layers & TCP/IP stack (DNS, HTTP/HTTPS, SSH, FTP, TLS)',
      'Symmetric vs Asymmetric cryptography, hashing, and digital certificates',
      'Port scanning, Wireshark packet capture, and network analysis',
      'Common threat vectors: Phishing, MITM, DDoS, and malware types'
    ],
    estimatedHours: '25 hours',
    resources: [
      {
        title: 'OWASP Foundation — Web Security Top 10',
        provider: 'OWASP',
        url: 'https://owasp.org/www-project-top-ten/',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'PortSwigger Web Security Academy',
        provider: 'PortSwigger (Burp Suite)',
        url: 'https://portswigger.net/web-security',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'Cisco Networking Academy — Introduction to Cybersecurity',
        provider: 'Cisco NetAcad',
        url: 'https://www.netacad.com/courses/cybersecurity/introduction-cybersecurity',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['cybersecurity-engineer', 'cloud-engineer'],
    recommendedOpportunityKeywords: ['Cybersecurity', 'CTF Competitions', 'InfoSec Internships']
  },

  // UI/UX
  {
    id: 'ui-ux-design',
    name: 'UI/UX Design & Figma',
    category: 'UI/UX Design',
    level: 'Beginner',
    shortDescription: 'User research, wireframing, typography, color theory, design systems, and interactive prototyping in Figma.',
    whatYouWillLearn: [
      'Design thinking methodology (Empathize, Define, Ideate, Prototype, Test)',
      'User personas, empathy maps, and user journey mapping',
      'Information architecture and low-fidelity wireframing',
      'Figma auto-layout, components, variants, and design systems',
      'High-fidelity prototyping, micro-interactions, and usability testing'
    ],
    estimatedHours: '24 hours',
    resources: [
      {
        title: 'Figma Learn — Design Essentials & Tutorials',
        provider: 'Figma Official',
        url: 'https://help.figma.com/hc/en-us/categories/360002051613-Learn-design',
        type: 'Official Guide',
        free: true
      },
      {
        title: 'Nielsen Norman Group — UX Research Articles',
        provider: 'NN/g',
        url: 'https://www.nngroup.com/articles/',
        type: 'Documentation',
        free: true
      },
      {
        title: 'Google UX Design Professional Certificate Resources',
        provider: 'Google / Grow with Google',
        url: 'https://grow.google/certificates/ux-design/',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['ui-ux-designer', 'frontend-dev'],
    recommendedOpportunityKeywords: ['UI/UX Design', 'Designathon', 'Product Design Internships']
  },

  // LINUX & SYSTEM PROGRAMMING
  {
    id: 'linux-os',
    name: 'Linux & Command Line Interface (CLI)',
    category: 'Tools & Technologies',
    level: 'Beginner',
    shortDescription: 'Unix file system, shell scripting (Bash), process management, permissions, and terminal mastery.',
    whatYouWillLearn: [
      'Directory navigation, file operations (ls, cd, mkdir, grep, find)',
      'User permissions (chmod, chown) and sudo execution',
      'Process management (ps, top, kill, systemctl services)',
      'Bash scripting, variables, loops, and pipeline chaining (pipes |)',
      'SSH remote server access and keys configuration'
    ],
    estimatedHours: '15 hours',
    resources: [
      {
        title: 'Linux Journey — Interactive Learning Guides',
        provider: 'Linux Journey',
        url: 'https://linuxjourney.com/',
        type: 'Interactive Tutorial',
        free: true
      },
      {
        title: 'The Linux Command Line by William Shotts',
        provider: 'LinuxCommand.org',
        url: 'https://linuxcommand.org/tlcl.php',
        type: 'Official Guide',
        free: true
      }
    ],
    relatedCareerIds: ['devops-engineer', 'cloud-engineer', 'backend-dev', 'cybersecurity-engineer'],
    recommendedOpportunityKeywords: ['Linux', 'DevOps', 'Systems Internships']
  }
];
