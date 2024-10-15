import React from "react";
import FooterSection from "./FooterSection";
import NewsLetter from "../NewsLetter/NewsLetter";

function Footer() {
  const sections = [
    {
      title: "Our Destinations",
      items: ["Canada", "Alaska", "France", "Iceland"],
    },
    {
      title: "Our Activities",
      items: [
        "Northern Lights",
        "Cruising & Sailing",
        "Multi-activities",
        "Kayaking",
      ],
    },
    {
      title: "Travel Blogs",
      items: ["Bali Travel Guide", "Sri Lanka Travel Guide", "Peru Travel Guide"],
    },
    { title: "About Us", items: ["Our Story", "Work with Us"] },
  ];

  return (
    <>
      <div className="relative 2xl:-bottom-28 sm:-bottom-3 z-[100] w-full h-auto">
        <NewsLetter />
      </div>

      <div className="w-full bg-customGreen">
        <div className="relative w-full h-max bg-customGreen 2xl:pt-48 sm:pt-12 px-5 py-5 lg:w-[85%] left-1/2 transform -translate-x-1/2 sm:px-2 flex md:flex-row flex-col">
          <FooterSection data="" obj={[]} footerIconLogo={true} />
          <div className="w-full flex h-auto sm:flex-row flex-col gap-3 sm:justify-evenly">
            {sections.map((section) => (
              <FooterSection
                key={section.title}
                data={section.title}
                obj={section.items}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
