

import image1 from "../assets/project1.jpeg";
import image2 from "../assets/project2.jpeg";
import image3 from "../assets/project3.jpeg";
import image4 from "../assets/project4.jpeg";
import image5 from "../assets/project5.jpeg";
import image6 from "../assets/project6.jpeg";
import image8 from "../assets/project8.jpeg";



export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Saksham Kanojia",
  info: "Full-stack developer | Data analyst ",
};

export const ABOUT = {
  text1:
    "I develop scalable, efficient, and visually compelling web applications using modern technologies.",
  text2:
    "Hello! I'm Saksham Kanojia, a full-stack developer and tech enthusiast specializing in the MERN stack. I have a passion for crafting innovative web solutions that blend creativity and functionality. My skills extend to blockchain development, where I've built decentralized applications, and QA testing, ensuring robust and reliable systems. Whether it's designing sleek user interfaces, managing seamless backends, or diving into automation testing, I approach every challenge with dedication and attention to detail. Outside of coding, I enjoy exploring emerging technologies and pushing the boundaries of what's possible. I am committed to delivering excellence in every line of code I write.",
};

export const PROJECTS = [
  {
    title: "AI-ChatBot",
    image: image1,
    category: "Tech",
    description:
      "Launched a Next.js-based AI chatbot SaaS platform for seamless user site integration, increasing engagement by 40%. Optimized performance by 30% through faster builds, efficient delivery, and automated testing.",
    technologies:["HTML","CSS","Javascript","TypeScript","Next.js","ShadCN","API","Gemini AI","AI","Framer Motion"],
      link:"https://botic-ai-chatbot.vercel.app/"
  },
  {
    title: "Portfolio Website",
    image: image2,
    category: "Tech",
    description:
      "Launched a personal portfolio website to showcase design projects, increasing client and employer engagement by 40%. Enhanced performance by 30% using Vite for faster builds and optimized delivery.",
    technologies: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Vite","Framer motion"],
    link:"https://portfolio-2-sk.vercel.app/"
  },
  {
    title: "Modern Real Estate Website",
    image: image3,
    category: "Tech",
    description:
      "Deployed a responsive real estate platform allowing users to search and book properties. Integrated advanced search filters, location services with Leaflet, and user authentication with Auth0, reducing customer search time by 30% and increasing platform feasibility by 45%. Automation testing with Selenium improved fault tolerance by 20%.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Selenium",
      "MongoDB",
      "Prisma",
      "Mantine UI",
      "MERN stack",
    ],
    link:"https://sk-homes-phi.vercel.app/"
  },
  {
    title: "Decentralized Cryptocurrency Exchange DApp",
    image: image4,
    category: "Tech",
    description:
      "Developed a decentralized cryptocurrency exchange platform with MetaMask wallet integration, improving user experience and reducing transaction time by 20%. Implemented token slippage functionality, optimizing trade fluctuation management by 15%, and enhanced swapping efficiency by 25% using Agile methodologies.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "API",
      "Finance",
      "Solidity",
      "Ant-Design",
      "Tailwind",
      "Ethereum Blockchain",
    ],
    link:"https://bit-exchangex.netlify.app/"
  },
  {
    title: "Retail Sales & Customer Analysis",
    description:
      "Analyzed transaction data to identify sales trends and customer behavior, improving insight accuracy by 45%. Optimized data processing using Python, pandas, and NumPy, enhancing data merging and cleaning by 30%.",
    technologies: [
      "Python",
      "pandas",
      "NumPy",
      "Jupyter Notebook",
      "Excel",
      "Data Visualization",
    ],
    category: "Data Analyst",
    image: image5,
    link: "https://github.com/sakshamkanojia19/quantium-DA-Tasks-Project",
  },

  {
    title: "People BMI Analysis",
    description:
      "Analyzed BMI trends from demographic data, improving insight accuracy by 40%. Streamlined data processing using R and RStudio, enhancing efficiency by 35%.",
    technologies: ["R", "RStudio", "Data Visualization"],
    category: "Data Analyst",
    image: image6,
    link: "https://github.com/sakshamkanojia19/IBM-DataScience-DataAnalyst-Project",
  },
  {
    title: "Apparels Sales Dashboard",
    description:
      "Built an interactive sales dashboard to analyze purchase trends and customer segmentation, increasing sales insights by 40%. Automated reporting using advanced Excel functions, reducing manual effort by 30%.",
    technologies: [
      "Excel",
      "PivotTables",
      "Data Analysis",
      "Data Visualization",
    ],
    category: "Data Analyst",
    image: image8,
    link: "https://github.com/sakshamkanojia19/Data-Analyis-p3-Sales-Dashborad",
  },

];



export const EXPERIENCES = [
  {
    year: "Jan 2025 - Present",
    role: "Full Stack Developer Intern",
    company: "Unified Mentor",
    description: `Design and deploy AWS microservices (EC2), integrated Auth, and improved backend response by 20%.
 Improved project delivery efficiency by 30% through teamwork and agile development.
 Containerized microservices using Docker, improving deployment efficiency by 30%.`,
    technologies: ["MERN","React","MongoDB","Node.js","Express.js","React native","Socket.io","recharts"],
  },
  {
    year: "Dec 2024 - Jan 2025",
    role: "Web Developer Intern",
    company: "Oasis Infobyte",
    description: ` Built MERN stack projects following SDLC, increasing efficiency by 35%.
 Optimized CI/CD workflows, reducing project deployment time by 20%.`,
    technologies: ["MERN","React","JavaScript","Restful API","MongoDB","Node.js","Express.js","Tailwind Css","CI/CD"],
  },{
    year: "Jan 2024 - Feb 2024",
    role: "Generative AI & Data Science Trainee",
    company: "IBM SkillBuild",
    description: `Explored Generative AI with a focus on prompt engineering and advanced techniques. Developed insightful data visualizations using Data Science principles and tools like R and RStudio, enhancing analytical capabilities.`,
    technologies: ["R", "RStudio", "Data Science", "Generative AI"],
  },
  {
    year: "Sep 2023 - Nov 2023",
    role: "Cybersecurity & Ethical Hacking Intern",
    company: "Rinex.ai",
    description: `Executed key cybersecurity tasks such as data gathering, vulnerability analysis, and network sniffing. Performed penetration testing using tools like NMAP, Wireshark, Zap, and Metasploit, ensuring secure coding standards. Conducted detailed vulnerability assessments and generated actionable reports using Zap.`,
    technologies: ["NMAP", "Wireshark", "Burp Suite", "Zap", "Metasploit"],
  },
  {
    year: "2023 - 2024",
    role: "Major Project Lead (Decentralized Cryptocurrency Exchange DApp)",
    company: "College Final Year Project",
    description: `Led the development of a decentralized cryptocurrency exchange platform, focusing on seamless MetaMask wallet integration and optimized transaction management. Implemented token slippage functionality and enhanced swapping efficiency through Agile methodologies.`,
    technologies: [
      "React.js",
      "Node.js",
      "Solidity",
      "Tailwind",
      "Ethereum Blockchain",
    ],
  },
];

