// shadcn
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";

// router-dom
import { Link, useLocation } from "react-router-dom";

// react-icons
import { CiMenuFries } from "react-icons/ci";

const links = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/services",
    name: "services",
  },
  {
    path: "/work",
    name: "work",
  },
  {
    path: "/resume",
    name: "Resume",
  },
  {
    path: "/contact",
    name: "contact",
  },
];
function MobileNav() {
  const location = useLocation();
  return (
    <Sheet className="p-10">
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-[#00ff99] " />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-2xl text-center">
          <Link to="/">
            <h1 className="text-4xl font-semibold">
              Ozodbek<span className="text-[#00ff99]">.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                to={link.path}
                key={index}
                className={`${
                  link.path == location.pathname &&
                  "text-[#00ff99] border-b-2 border-[#00ff99]"
                } text-xl capitalize hover:text-[#00ff99] transition-all `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
