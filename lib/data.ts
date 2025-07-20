export interface ProfileLink {
  link: string;
  context: "linkedin" | "github" | "contactme"
}

export const profileData = {
  name: "David J. Méndez Rosa",
  title: "Software Engineer & Full Stack Developer",
  location: "San Juan, Puerto Rico",
  bio: "Computer Science student at UPR-RP passionate about building modular, scalable web and mobile apps. I love leveraging clean architecture and cloud-native tools to turn complex problems into efficient solutions.",
  skills: [
    "Next.js",
    "React",
    "TypeScript",
    "FastAPI",
    "Python",
    "PostgreSQL",
    "Docker",
    "AWS",
    "SwiftUI",
  ],
}

export const experienceData = [
  {
    position: "Software Engineering Intern",
    company: "Xtillion",
    duration: "June 2025 – August 2025",
    location: "San Juan, Puerto Rico",
    type: "Internship",
    description:
      "Built and optimized a scalable data processing pipeline using Databricks, PySpark, Ray, and PuLP, leveraging distributed computing and linear programming to efficiently handle large datasets.",
    achievements: [
      "Led backend development using TypeScript and clean architecture principles",
      "Implemented secure document uploads with S3 and custom API endpoints",
      "Designed a relational database to support workflows and approvals",
      "Integrated both REST and GraphQL APIs",
    ],
    technologies: ["TypeScript", "FastAPI", "Express.js", "React","Databricks", "Ray", "PuLP", "AWS S3"],
  },
  {
    position: "Freelance Software Engineer",
    company: "Joshua Shipping Logistics",
    duration: "October 2024 – May 2025",
    location: "Remote",
    type: "Freelance",
    description:
      "Developed a full-stack web platform to manage dispatch and lot tracking for a shipping company using modular architecture.",
    achievements: [
      "Built dynamic UIs with filtering, modals, and state management",
      "Implemented multiple backend endpoints and repositories with FastAPI",
      "Used Docker Compose to containerize services with PostgreSQL integration",
    ],
    technologies: ["Next.js", "TypeScript", "FastAPI", "Docker", "PostgreSQL"],
  },
  {
    position: "Software Developer",
    company: "University of Puerto Rico, DECEP",
    duration: "August 2024 – January 2025",
    location: "San Juan, PR",
    type: "Contract",
    description:
      "Engineered a payment automation system for DECEP courses with Django and Stripe.",
    achievements: [
      "Integrated Stripe to handle single and installment payments",
      "Used Webhooks for automated payment confirmations and refunds",
      "Built user verification logic for applying discount categories",
    ],
    technologies: ["Django", "Stripe", "MySQL"],
  },
  {
    position: "Tech Fellow",
    company: "CodePath",
    duration: "May 2024 – August 2024",
    location: "Remote",
    type: "Internship",
    description:
      "Mentored students in technical interview prep and coding best practices.",
    achievements: [
      "Led breakout sessions for Python and Java problem-solving",
      "Improved engagement and outcomes using the UMPIRE method",
      "Helped students debug and explain complex concepts clearly",
    ],
    technologies: ["Python", "Java"],
  },
]

export const projectsData = [
  {
    title: "AthletIQ",
    description:
      "A modular iOS fitness tracking app with workout logging, routine planning, and progress visualization.",
    image: "/placeholder.svg?height=200&width=400",
    technologies: ["SwiftUI", "FastAPI", "AWS Lambda", "PostgreSQL", "Docker"],
    featured: true,
    status: "In Progress",
    live: "",
    code: "",
    is_private: true
  },
  {
    title: "HustleHooperPR Web App",
    description:
      "Full-stack app for basketball trainers and clients to book and manage training sessions, with Stripe and Google login integration.",
    image: "hustlehoopers.png",
    technologies: ["React", "Next.js", "Stripe", "Google Auth", "PostgreSQL", "Vercel"],
    featured: true,
    status: "Completed",
    live: "https://hustlehooperspr.vercel.app/",
    code: "https://github.com/david1731/hustle-hooperspr-v2.0",
    is_private: false
  },
  {
    title: "Data Engineering Project",
    description: 
      "Venmito Data Engineering API & Visuals is a Dockerized FastAPI project connected to PostgreSQL that delivers pre-generated charts and Excel reports for real-time data insights. It provides both interactive API endpoints for developers and easy-to-read visuals for non-technical stakeholders.",
    technologies: ["Python", "FastAPI", "Docker", "PostgreSQL", "Pandas"],
    featured: false,
    status: "Completed",
    code: "https://github.com/david1731/Data-Engineering-Project",
    is_private: false,
    live: ""
  },
  {
    title: "HoopStats Search Engine",
    description: "HoopStats Search Engine is a web application designed to search and display basketball player statistics from the movie Space Jam.",
    technologies: ["Angular", "Django", "Python", "Typescript", "PostgreSQL"],
    featured: false,
    status: "Completed",
    live: "",
    code: "https://github.com/david1731/HoopStats-Search-Engine",
    is_private: false
  },
  {
    title: "Postwar Apocalypse",
    description: "PostWar Apocalypse, a Unity-powered video game, players control an air fighter tasked with eliminating enemy ships in a post-war city. Leveraging C# and Unity tools, we implemented dynamic flying movements for the player's ship. Using a PlayStation 5 controller, players navigate the city and engage enemy ships using intuitive button interactions",
    technologies: ["C#", "Unity"],
    featured: false,
    status: "Completed",
    live: "",
    code: "https://github.com/david1731/PostWarApocalypseVideoGame",
    is_private: false
  }

]