import {
  FaXTwitter,
  FaGithub,
  FaLinkedin,
  FaWhatsapp ,
  FaDiscord,
  FaInstagram,
} from "react-icons/fa6";


import projectImage3 from "../assets/project3.jpeg";
import projectImage4 from "../assets/project4.jpeg";
import projectImage5 from "../assets/project5.jpeg";
import projectImage6 from "../assets/project6.jpeg";


import img1 from "../assets/illustrator.png"
import img2 from "../assets/indesign.png"
import img3 from "../assets/figma.png"
import img4 from "../assets/photoshop.png"
import img5 from "../assets/prototype.png"
import img6 from "../assets/html.png"
import img7 from "../assets/css.png"
import img8 from "../assets/js.png"



export const NAVIGATION_LINKS = [

  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Resume", href: "#Certification" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "VIGNESH KUMAR ",
  greet: "Hello there! 👋🏻",
  description:
    " Aspiring UI/UX designer eager to apply knowledge gained through coursework and personal projects to contribute creatively to innovative design projects. ",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage5,
    href : "/project1"
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage4,
    href : "/project2"
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    href : "/project3"
  },

];

export const BIO = [
  "My name is Arjun G.G, and I am an aspiring web developer with a Bachelor of Technology in Information Technology from Ultra College of Engineering and Technology in Madurai. I have a CGPA of 7.85, which reflects my dedication and hard work throughout my academic career. I also hold a Diploma in Mechanical Engineering from NPR Polytechnic College, which has given me a solid foundation in technical principles and problem-solving skills.",
  "During my academic journey, I have actively engaged in personal projects that have allowed me to apply my theoretical knowledge in practical settings. One of my notable projects is developing a deep learning model for detecting diseases in tea leaves using Python, Flask, and TensorFlow. Additionally, I created a Meeting Schedule web application using Next.js, Firebase, JavaScript, and TailwindCSS, showcasing my ability to build functional and user-friendly web applications.",
  "I am proficient in various technical skills, including HTML, CSS, JavaScript, ReactJs, NextJs, and TailwindCSS. I am also familiar with tools and databases like Node.js, VScode, Git, GitHub, MongoDB, Firebase, and PostgreSQL. I am particularly interested in web development and front-end development, and I am always eager to learn new technologies and improve my skills. I believe my strong technical background, combined with my problem-solving abilities and adaptability, make me a strong candidate for this position.",


];

export const SKILLS = [
  {
    icon: img3,
    name: "Figma",
    experience: "1+ years",
  },
  {
    icon: img4,
    name: "Adobe-PhotoShop",
    experience: "1+ years",
  },
  {
    icon: img1,
    name: "Adobe-illustrator",
    experience: "1+ years",
  },
  {
    icon: img2,
    name: "Adobe-InDesign",
    experience: "0.5+ years",
  },
  {
    icon: img5,
    name: "WireFrame",
    experience: "1+ years",
  },
  {
    icon: img6,
    name: "HTML",
    experience: "1+ years",
  },
  {
    icon:img7,
    name: "CSS",
    experience: "1+ year",
  },
  {
    icon: img8,
    name: "JavaScript",
    experience: "1+ year",
  },
  

];

export const EXPERIENCES = [
  {
    title: "Web development and designing",
    company: "Oasis Infobyte Internship",
    duration: "Feb - May 2024",
    description:
      "This internship is observed by Oasis Infobyte as being a learning opportunity for you, spanning a duration of 1 month.. Proficient in designing, deploying, and managing fault-tolerant, highly available, and scalable Oasis Infobyte. In essence, your internship will embrace orientation and give emphasis on learning new skills with a deeper under standing of concepts through hands-on application of the knowledge you gained as an intern.",
  },
  {
    title: "Web development",
    company: "Bharat Intern Virtual Internship",
    duration: "Jan - Feb 2024",
    description:
      "Full-Stack Exposure: Get hands-on experience in both front-end and back-end development. Real-world Projects: Work on projects that make a real impact and contribute to your professional portfolio.",
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology (Information Technology)",
    institution: "Ultra College of Engineering and Technology, Madurai",
    duration: "July 2020 - June 2024",
    description:
      "A Bachelor of Technology in Information Technology (B.Tech IT) is a comprehensive undergraduate program that combines theoretical knowledge with practical skills to equip students for the dynamic field of IT. This program typically spans four years and covers a wide range of subjects, including programming, software development, database management, network security, and web technologies.",
  },
  // {
  //   degree: "Diploma Mechanical Engineering",
  //   institution: "NPR Polytechnic College, Dindigul",
  //   duration: "july 2018 - June 2020",
  //   description:
  //     "A Diploma in Mechanical Engineering is a technical education program designed to provide students with a strong foundation in the principles and practices of mechanical engineering. Typically spanning three years, this program equips students with the practical skills and theoretical knowledge needed to design, analyze, and maintain mechanical systems and machinery.",
  // },
  {
    degree: "+2 Computer Science Higher Secondary School",
    institution: "AVM Higher Secondary School",
    duration: "June 2019 - june 2020",
    description:
      "Completing +2 Higher Secondary School with a focus on Computer Science equips students with foundational knowledge and skills in computing, programming, and information technology. This specialization prepares students for higher education in computer science and related fields or for entry-level positions in the IT industry.",
  },
  {
    degree: "10th SSLC",
    institution: "AVM Higher Secondary School ",
    duration: "June 2017 - June 2018",
    description:
      "The 10th Standard Secondary School Leaving Certificate (SSLC) is a crucial milestone in a student's educational journey, typically marking the completion of secondary education. The SSLC is pivotal as it sets the foundation for higher secondary education and various career paths",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://wa.me/qr/TPGCZ23R6PX2G1",
    icon: <FaWhatsapp  fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://discord.com/channels/@me",
    icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/vi_cky_pr_ince_?igsh=MWx1NGhveXdmNnFzaw==",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/41ucet",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/vignesh-kumar-a7b555270",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
