// components
import { Socials, Photo, Stats } from "../components";

// shadcn
import { Button } from "../components/ui/button";

// react-icons
import { FiDownload } from "react-icons/fi";

// others
import { Helmet } from "react-helmet";

function Home() {
  return (
    <section className="h-full">
      <Helmet>
        <title>Ozodbek — Software Engineer Portfolio</title>
        <meta
          name="description"
          content="Dasturchi portfolyosi, real loyihalar va skilllar."
        />
        <meta
          property="og:title"
          content="Ozodbek — Software Engineer Portfolio"
        />
        <meta
          property="og:description"
          content="Dasturchi portfolyosi, real loyihalar, skilllar."
        />
        <meta
          property="og:image"
          content="https://ozodbeks-portfolio.vercel.app/og-image.png"
        />
        <meta
          property="og:url"
          content="https://ozodbeks-portfolio.vercel.app"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ozodbek — Software Engineer Portfolio"
        />
        <meta
          name="twitter:description"
          content="Dasturchi portfolyosi, real loyihalar va skilllar."
        />
        <meta
          name="twitter:image"
          content="https://ozodbeks-portfolio.vercel.app/og-image.png"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-4 xl:pb-4">
        {/* Text */}
        <div className="order-2 text-center xl:text-left xl:order-none">
          <span className="text-xl">Software Developer</span>
          <h1 className="mb-6 h1">
            Hello I'm <br />{" "}
            <span className="text-[#00ff99]">Ozodbek Tursunaliyev</span>
          </h1>
          <p className="max-w-[500px] mb-9 text-white/80">
            I excel at crafting elegent digital experiences and I am proficient
            in various programming languages and technologies.
          </p>
          {/* Btn and socials */}
          <div className="flex flex-col items-center gap-8 xl:flex-row">
            <Button
              variant="outline"
              size="lg"
              className="flex items-center gap-2 uppercase"
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
        <div className="order-1 mb-8 xl:order-none">
          <Photo />
        </div>
      </div>

      <Stats />
    </section>
  );
}

export default Home;
