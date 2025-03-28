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

// skills data
const skills = {
  title: "My skills",
  describtion: "lorem ipsum dolor te, core impack new. New oslo allow bette.",
  skillsList: [
    { icons: <FaHtml5 />, name: "html" },
    { icons: <FaCss3 />, name: "css" },
    { icons: <FaJs />, name: "javasript" },
    { icons: <FaReact />, name: "react.js" },
    { icons: <SiNextdotjs />, name: "next.js" },
    { icons: <SiTailwindcss />, name: "tailwind.css" },
    { icons: <FaNodeJs />, name: "node.js" },
    { icons: <FaFigma />, name: "figma" },
  ],
};

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { ScrollArea } from "../components/ui/scroll-area";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex-col felx xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* Content */}
          <div className="min-h-[70vh] w-full ">
            <TabsContent value="experience" className="w-full"></TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
