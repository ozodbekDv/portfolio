// components
import { Socials } from "../components";

// shadcn
import { Button } from "../components/ui/button";

// react-icons
import { FiDownload } from "react-icons/fi";

function Home() {
  return (
    <section className="h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        {/* Text */}
        <div className="text-center xl:text-left">
          <span className="text-xl">Software Developer</span>
          <h1 className="h1 mb-6">
            Hello I'm <br />{" "}
            <span className="text-[#00ff99]">Ozodbek Tursunaliyev</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegent digital experiences and I am proficient
            in various programming languages and technologies.
          </p>
          {/* Btn and socials */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Button
              variant="outline"
              size="lg"
              className="flex uppercase items-center gap-2"
            >
              <span>Download CV</span>
              <FiDownload className="text-xl" />
            </Button>
            <div className="mb-8 lg:my-auto ">
              <Socials
                containerStyles="flex items-center justify-center gap-6"
                iconStyles="w-9 h-9 border border-[#00ff99] rounded-full flex justify-center items-center text-[#00ff99] text-base hover:bg-[#00ff99] hover:text-[#1c1c22] hover:transition-all duration-500"
              />
            </div>
          </div>
        </div>
        {/* Photo */}
        <div>photo</div>
      </div>
    </section>
  );
}

export default Home;
