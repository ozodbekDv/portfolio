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
    <section className="min-h-[70vh] flex flex-col justify-center py-12 xl:py-0">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
      >
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-around gap-6 flex-center group"
            >
              {/* Top */}
              <div className="flex items-center justify-between w-full">
                <div className="text-4xl font-extrabold text-transparent transition-all duration-500 text-outline group-hover:text-outline-hover">
                  {service.num}
                </div>
                <Link
                  className="w-[60px] h-[60px] rounded-full leading-none bg-white group-hover:bg-[#00ff99] transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  to={service.href}
                >
                  <BsArrowDownRight className="text-3xl text-primary" />
                </Link>
              </div>
              {/* heading */}
              <h2 className="text-white text-[35px] font-bold leading-none group-hover:text-[#00ff99] transition-all duration-500">
                {service.title}
              </h2>
              {/* describtion */}
              <p className="text-white/60 text-[14px]">{service.describtion}</p>
              {/* border */}
              <div className="w-full border-b border-white/20"></div>
            </div>
          );
        })}
      </motion.div>
    </section>
  );
}

export default Services;
