// router-dom
import { Link } from "react-router-dom";

// react-icons
import { FaGithub, FaLinkedin, FaTelegram, FaYoutube } from "react-icons/fa";

const socialIcons = [
  { icon: <FaGithub />, path: "https://github.com/ozodbekw" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/ozodbek-tursunaliyev",
  },
  { icon: <FaTelegram />, path: "https://www.t.me/ozodbek_dv" },
  { icon: <FaYoutube />, path: "https://www.youtube.com/@ozodbek-in-web" },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={`${containerStyles} flex `}>
      {socialIcons.map((item, index) => {
        return (
          <Link
            key={index}
            to={item.path}
            className={`${iconStyles} text-white `}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
