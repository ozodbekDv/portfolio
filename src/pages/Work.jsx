import { motion } from "framer-motion";
import { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";

import { Link } from "react-router-dom";
import WorkSliderBtns from "../components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "title 1",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum distinctio quis aut incidunt sunt sed debitis odit, itaque soluta.",
    stack: [{ name: "HTML 5" }, { name: "CSS 3" }, { name: "Javascript" }],
    image: "/assets/work/thumb1.png",
    live: "",
    gitHub: "",
  },
  {
    num: "02",
    category: "fullstack",
    title: "title 2",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum distinctio quis aut incidunt sunt sed debitis odit, itaque soluta.",
    stack: [{ name: "Next.js" }, { name: "Tailwind" }, { name: "Node.js" }],
    image: "/assets/work/thumb2.png",
    live: "",
    gitHub: "",
  },
  {
    num: "03",
    category: "full stack",
    title: "title 3",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos illum distinctio quis aut incidunt sunt sed debitis odit, itaque soluta.",
    stack: [{ name: "Next.js" }, { name: "Tailwind.css" }, { name: "Node.js" }],
    image: "/assets/work/thumb1.png",
    live: "",
    gitHub: "",
  },
];
function Work() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[420px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] ">
              {/* Outline num */}
              <div className="font-extrabold leading-none text-transparent text-7xl text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {project.category} Project
              </h2>
              {/* project describtion */}
              <p className="text-white/60">{project.describtion}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, index) => {
                  return (
                    <li className="text-xl text-[#00ff99]" key={index}>
                      {stack.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link to={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsArrowUpRight className="text-3xl text-white group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* live project button */}
                <Link to={project.gitHub}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ">
                        <BsGithub className="text-3xl text-white group-hover:text-[#00ff99]" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[440px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[480px]  relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 z-10 w-full h-full bg-black/10"></div>
                      <div className="relative w-full h-full">
                        <img
                          src={project.image}
                          alt={project.title + "image"}
                          className="object-cover mx-auto"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#00ff99] hover:bg-[#00ff99]/70 text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Work;
