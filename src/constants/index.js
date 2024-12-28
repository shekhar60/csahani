import portfolio from "../assets/projects/portfolio.jpg";
import bus from "../assets/projects/buses.jpg";
import project2 from "../assets/projects/project-2.webp";

export const HERO_CONTENT = `I am a Front-end Developer with 3+ years of experience, specializing in crafting intuitive and responsive web interfaces. I have expertise in React, Next.js, HTML, CSS, and JavaScript, along with experience in PHP and WordPress. I’m passionate about building seamless user experiences and delivering high-performance, scalable web applications that drive business growth.`;

export const ABOUT_TEXT = `I am a passionate and detail-oriented Front-end Developer with over 3 years of experience in building responsive, user-centric web applications. Specializing in React, Next.js, HTML, CSS, JavaScript, PHP, and WordPress, I focus on creating seamless and visually appealing user interfaces that deliver exceptional experiences.

My journey in web development began with a fascination for design and functionality, and it has evolved into a career where I continuously push the boundaries of what's possible on the web. I thrive on solving complex problems, collaborating with cross-functional teams, and staying up-to-date with the latest technologies. When I'm not coding, I enjoy exploring new frameworks, contributing to open-source projects, and enhancing my skills through continuous learning.`;

export const EXPERIENCES = [
  {
    year: "2021 - Present",
    role: "UI Developer",
    company: "Media.net",
    description: `As a UI Developer, I convert design mockups into fully functional, interactive web pages using HTML, CSS, JavaScript, React, PHP, and WordPress. I develop dynamic, feature-rich pages in React and contribute to building engaging landing pages using HTML, CSS, and JavaScript for various marketing campaigns. In my role at an advertising company, I create optimized ad blocks to enhance ad placements and improve site monetization. Additionally, I leverage my WordPress expertise to build highly customizable websites and tailor premium themes to meet specific client requirements.`,
    technologies: ["React.js", "Javascript", "Wordpress", "Php", "HTML", "CSS", "SCSS"],
  },
  {
    year: "2020 - 2021",
    role: "Frontend Developer",
    company: "Tekno Point",
    description: `As a Frontend Developer, I was responsible for converting design mockups into responsive, interactive web pages using HTML, CSS, and JavaScript. My role involved building a config-driven UI, where most of the interface was dynamically rendered based on API data. I frequently worked on developing and validating complex forms, ensuring data integrity before sending it to the API. Additionally, I integrated payment gateways to enable secure online transactions, ensuring a smooth and reliable user experience. I also worked extensively with Adobe Experience Manager (AEM) CMS to manage and deliver the content for the websites.`,
    technologies: ["HTML", "CSS", "Javascript", "AEM"],
  },
  {
    year: "2020 - 2021",
    role: "Python Developer (Internship)",
    company: "Dezignolics Web & Software Company",
    description: `During my internship as a Python Developer, I was responsible for teaching Python programming to Bachelor of Engineering students. My role included preparing and delivering lessons on core Python concepts, assisting students with coding exercises, and evaluating their understanding through tests and assessments. I helped students develop their coding skills by providing guidance and feedback on their work, ensuring they grasped key programming principles effectively.`,
    technologies: ["Python", "Django", "HTML", "CSS", "Javascript"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio",
    image: portfolio,
    description:
      "Built a personal portfolio website using React and Tailwind CSS to showcase projects, skills, and achievements, with a focus on responsive design for seamless experiences across desktop and mobile devices. Deployed and hosted the site on Vercel, ensuring fast load times and automated deployment from GitHub.",
    technologies: ["React.js", "Tailwind", "HTML"],
  },
  {
    title: "Todo Web App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["React.js", "Redux", "Javascript", "HTML", "CSS"],
  },
  {
    title: "Bus Management System Android & IOS App UI",
    image: bus,
    description:
      "Designed and developed the UI for a Bus Management System mobile app using Flutter, ensuring a seamless experience across Android and iOS devices. Implemented responsive layouts and intuitive navigation to optimize the app's interface for different screen sizes and enhance the user experience on both platforms.",
    technologies: ["Flutter"],
  },
];

export const CONTACT = {
  address: "Mumbai, Maharashtra ",
  phoneNo: "+91 7021677235 ",
  email: "csahani60@gmail.com",
};
