import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiContactlesspayment,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  describtion:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae sit vero possimus dolor est dolores.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Lukas",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+998) 94 699 0807",
    },
    {
      fieldName: "Experience",
      fieldValue: "12+ Year",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Uzbek",
    },
    {
      fieldName: "Email",
      fieldValue: "ozodbektursunaliyev11@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Avilable",
    },
    {
      fieldName: "Languages",
      fieldValue: "English (B2), Uzbek (Native)",
    },
  ],
};

// experince data
const experince = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  describtion: "lorem ipsum dolor te, core impack new. New oslo allow bette.",
  items: [
    {
      company: "Tech solutions Inc.",
      position: "Full Stack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Tech solutions Inc.",
      position: "Frontend Developer",
      duration: "2023 - 2024",
    },
    {
      company: "Tech solutions Inc.",
      position: "Freelance Web Developer",
      duration: "2022 - 2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  describtion: "lorem ipsum dolor te, core impack new. New oslo allow bette.",
  items: [
    {
      institution: "Najot Talim",
      degree: "Frontend ReactJs Standart",
      duration: "2024",
    },
  ],
};

function Resume() {
  return <div>Resume</div>;
}

export default Resume;
