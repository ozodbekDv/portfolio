// router-dom
import { Link } from "react-router-dom";

// react-icons
import { BsArrowDownRight } from "react-icons/bs";

// framer-motion
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus soluta sequi perspiciatis officiis delectus, iusto deserunt.",
    href: "",
  },

  {
    num: "02",
    title: "UI/UX Design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus soluta sequi perspiciatis officiis delectus, iusto deserunt.",
    href: "",
  },
  {
    num: "03",
    title: "Logo Design",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus soluta sequi perspiciatis officiis delectus, iusto deserunt.",
    href: "",
  },
  {
    num: "04",
    title: "SEO",
    describtion:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ducimus soluta sequi perspiciatis officiis delectus, iusto deserunt.",
    href: "",
  },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
      >
        {services.map((service, index) => {
          return <div key={index}></div>;
        })}
      </motion.div>
    </section>
  );
}

export default Services;
