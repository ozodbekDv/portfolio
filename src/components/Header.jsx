// router-dom
import { Link } from "react-router-dom";

// shadcn
import { Button } from "./ui/button";

// components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="main-container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-4xl font-semibold">
            Ozodbek<span className="text-[#00ff99]">.</span>
          </h1>
        </Link>
        {/* Desktop nav  */}
        <div className="hidden xl:flex items-center gap-8">
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
