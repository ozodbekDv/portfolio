// router-dom
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();
  return (
    <nav className="flex gap-8">
      <Link
        className={`${
          location.pathname == "/" &&
          "text-[#00ff99] border-b-2 border-[#00ff99]"
        } font-medium capitalize hover:text-[#00ff99] transition-all`}
      >
        Home
      </Link>
      <Link
        to="/services"
        className={`${
          location.pathname == "/services" &&
          "text-[#00ff99] border-b-2 border-[#00ff99]"
        } font-medium capitalize hover:text-[#00ff99] transition-all`}
      >
        Services
      </Link>
      <Link
        to="/resume"
        className={`${
          location.pathname == "/resume" &&
          "text-[#00ff99] border-b-2 border-[#00ff99]"
        } font-medium capitalize hover:text-[#00ff99] transition-all`}
      >
        Resume
      </Link>
      <Link
        to="/work"
        className={`${
          location.pathname == "/work" &&
          "text-[#00ff99] border-b-2 border-[#00ff99]"
        } font-medium capitalize hover:text-[#00ff99] transition-all`}
      >
        Work
      </Link>

      <Link
        to="/contact"
        className={`${
          location.pathname === "/contact" &&
          "text-[#00ff99] border-b-2 border-[#00ff99]"
        } font-medium capitalize hover:text-[#00ff99] transition-all`}
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
