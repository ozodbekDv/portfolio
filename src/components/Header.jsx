// router-dom
import { Link } from "react-router-dom";

// shadcn
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 text-white xl:py-8">
      <div className="flex items-center justify-between mx-auto main-container">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Ozodbek<span className="text-[#00ff99]">.</span>
          </h1>
        </Link>
        {/* Desktop nav  */}
        <div className="items-center hidden gap-8 xl:flex">
          <Nav />
          <Link>
            <Button>hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
