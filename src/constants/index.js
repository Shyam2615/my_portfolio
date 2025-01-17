import project1 from "../assets/projects/project-1.jpg";
import project5 from "../assets/projects/project-5.png";
import blogs from "../assets/projects/blogs.png";
import project4 from "../assets/projects/project-4.jpg";
import cp from "../assets/projects/cp.png"
import donex from "../assets/projects/donex.png"
import bhpp from "../assets/projects/house_price.png"
import nullclass from "../assets/experience/nullclassdotcom_logo.jpg"

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Java, Node.js, Django,Express.js, Rest-Framework, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 2 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js,Java, Django, Rest-Framework, Express.js, MySQL, PostgreSQL, and MongoDB... My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024",
    role: "WEB DEVELOPER INTERN",
    company: "NULLCLASS",
    description: `Worked with solving real-world problems and delivering impactful web solutions.
    During this journey, I had the opportunity to:
    Develop and maintain web applications using modern frameworks and libraries.
    Implement responsive design to ensure optimal user experience across devices.
    Optimize application performance and enhance user experience.`,
    technologies: ["Javascript", "React.js", "Node.js", "mongoDB", "Django", "mysql"],
    image : nullclass
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    link: "https://github.com/Shyam2615/EYN-Store",
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Django", "Mysql"],
  },
  {
    title: "Company Portfolio",
    image: cp,
    link: "https://portfolio-client-kohl.vercel.app/",
    description:
      "An application for a company to showcase its works and getting contacts from client and userdata.",
    technologies: ["react", "express.js", "node.js", "mongodb"],
  },
  {
    title: "Website for Startup [DoneX]",
    image: donex,
    link: "https://donexinfotech.vercel.app/",
    description:
      "A Startup portfolio website showcasing projects, offers, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap", "Django-rest-framework"],
  },
  {
    title: "Banglore House Price Prediction",
    image: bhpp,
    link: "https://banglore-house-price-prediction-uw28.vercel.app/",
    description:
      "This project involves developing a machine learning model to predict house prices in Bangalore based on various factors such as location, size, number of bedrooms, square footage, and more. The model was trained on a dataset containing real estate data from Bangalore and was optimized for accuracy and performance.",
    technologies: ["Machine learning", "Flask", "HTML", "CSS", "JS", "Python"],
  },
  {
    title: "AI-Powered Voice replacement",
    image: project5,
    link: "https://audio-replacement.streamlit.app/",
    description:
      "A platform where the audio is extracted from the video and the grammatical error are corrected and new audio is generated and merged to the video.",
    technologies: ["Python", "Streamlit", "Open-ai", "google-cloud"],
  },
  {
    title: "Cybi-Aware",
    image: blogs,
    link: "https://cybiaware-donex.vercel.app/",
    description:
      "A platform where you stay updated about the cybersecurity trends. This is a blogging website with user authentication, comment on blogs, password reset, email verification, blog report etc...",
    technologies: ["Html", "Css", "React.js", "Node.js", "Express.js", "Mongodb"],
  },
];

export const CONTACT = {
  address: "Alliance university Anekal Banglore, Karnataka ",
  phoneNo: "+91 8431398663 ",
  email: "syb26633@gmail.com",
};
