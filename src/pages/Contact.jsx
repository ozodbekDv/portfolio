"use client";

import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    describtion: "(94) 699 0807",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Email",
    describtion: "ozodbektursunaliyev11@gmail.com",
  },
  {
    icon: <FaEnvelope />,
    title: "Address",
    describtion: "Uzbekistan Fergana",
  },
];

import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[48%] order-2 xl:order-none">
            <form className="flex flex-col gap-4 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-[#00ff99] text-2xl">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur quam odit consequatur sapiente nobis!
              </p>
              {/* input */}
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <Input type="text" placeholder="FirstName" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX design</SelectItem>
                    <SelectItem value="mst">Logo design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* Textarea */}
              <Textarea
                className="h-[100px]"
                placeholder="Type your message here."
              />
              {/* btns */}
              <Button size="sm" className="py-4 max-w-40">
                Send message
              </Button>
            </form>
          </div>
          {/* info */}
          <div className="flex items-center flex-1 order-1 gap-6 mb-8 xl:justify-end xl:order-none xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#00ff99] rounded-md flex items-center justify-center ">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.describtion}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
