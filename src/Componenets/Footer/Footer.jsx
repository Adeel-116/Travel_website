import React from "react";
import FooterSection from "./FooterSection";
import NewsLetter from "../NewsLetter/NewsLetter";

function Footer() {
  return (
    <>
      <div className="relative w-full lg:-bottom-32  sm:-bottom-16 z-[100] h-auto">
        <NewsLetter />
      </div>
      <div className="relative w-full h-auto bg-green-300 2xl:py-56 sm:py-44">
        <div className="absolute sm:bottom-5 lg:w-[85%] w-full h-auto left-1/2 transform -translate-x-1/2 p-4 flex md:flex-row flex-col justify-between">
          <div className="w-fit">
            <FooterSection data="" obj={[]} footerIconLogo={true} />
          </div>

          <div className="flex h-auto sm:flex-row flex-col sm:gap-0 gap-x-3 justify-center sm:justify-evenly">
            <div>
              <FooterSection
                data="Our Desitinations"
                obj={["Canada", "Alaska", "France", "Island"]}
              />
            </div>

            <div>
              <FooterSection
                data="Our Activities"
                obj={[
                  "Northern Lights",
                  "Cruising & sailing",
                  "Multi-activities",
                  "Kayaing",
                ]}
              />
            </div>

            <div>
              <FooterSection
                data="Travel Blogs"
                obj={[
                  "Bali Travel Guide",
                  "Sri Lanks Travel Guide",
                  "Peru Travel Guide",
                  "Bali Travel Guide",
                ]}
              />
            </div>

            <div>
              <FooterSection
                data="About Us"
                obj={["Our Story", "Work with us"]}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
