import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Front-End Development: Passionate full-stack developer in crafting robust and scalable web applications. Proficient in front-end technologies including React js, with a strong focus on creating innovative solutions that enhance user experiences and drive business growth.`;
export const HERO_CONTENT1 =`
Data Science: Engaged in Data Science Job Simulation with British Airways in July 2024, focusing on leveraging data science for company success. Specialized in scraping and analyzing customer review data, uncovering key insights, and building predictive models to understand buying behavior.`;

export const ABOUT_TEXT = `In July 2024, I completed a Data Science Job Simulation with British Airways on Forage, focusing on the critical role of data science in the company's success. My work involved scraping and analyzing customer review data to uncover key findings and building a predictive model to understand the factors influencing buying behavior.

In June 2024, I participated in a Data Analytics and Visualization role simulation with Accenture North America on Forage. This experience centered around advising a hypothetical social media client, where I cleaned, modeled, and analyzed 7 datasets to uncover content trends. I also prepared a comprehensive PowerPoint deck and video presentation to communicate strategic insights to the client and internal stakeholders.

Additionally, in June 2024, I took part in the J.P. Morgan Software Engineering Virtual Experience on Forage. My tasks included setting up a local development environment, fixing broken files in a repository, and using JPMorgan Chase’s open-source library Perspective to generate a live graph for traders to monitor data feeds effectively.

In December 2023, I worked as a Software Engineer in TCS's Practical Approach to Data Mining and Analytics program. My role involved leveraging technologies such as Ruby, Rails, PHP, and SQLite.`;

export const EXPERIENCES = [
  {
    year: "July 2024",

    company: "British Airways Data Science Job Simulation on Forage.",
    description: `
Completed a simulation focussing on how data science is a critical component of British Airways success
Scraped and analysed customer review data to uncover findings
Built a predictive model to understand factors that influence buying behaviour`,

  },
  {
    year: "June 2024",
    role: "Data Analytics and Visualization r",
    company: "Accenture North America Data Analytics and Visualization Job Simulation on Forage ",
    description: `Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture
Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions
Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders.`,

  },
  {
    year: "June 2024",

    company: "J.P. Morgan Software Engineering Virtual Experience on Forage",
    description: `Set up a local dev environment by downloading the necessary files, tools and dependencies.
Fixed broken files in the repository to make web application output correctly.
Used JPMorgan Chase’s open source library called Perspective to generate a live graph that displays a data feed in a clear and visually appealing way for traders to monitor.`,

  },
  {
    year: "Dec 2023",
    role: "Software Engineer",
    company: "TCS Practical Approach to Data Mining and Analytics",
    description: `.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  phoneNo: "+91 9527898496 ",
  email: "harshalpardhi55@gmail.com",
};
