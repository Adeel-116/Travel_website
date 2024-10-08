import React from "react";
import FooterLogo from "../../assets/Section2/Footerlogo.png"
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

function FooterSection(props) {
  const array = props.obj;
  console.log(array);

  return (
    <>
   
        { props.footerIconLogo && <div className="flex flex-col gap-3">
        <div>
          <img src={FooterLogo} alt="" />
        </div>
        <div className="flex gap-3 text-xl ">
          <FaFacebook />
          <FaWhatsapp />
          <FaTwitter />
          <FaYoutube />
        </div>
      </div>
}


      <div className="flex flex-col gap-3">
        <h1 className="text-xl font-semibold">{props.data}</h1>
        <div>
          {array.map((data) => (
            <h3 className="text-gray-700 mb-1">{data}</h3>
          ))}
        </div>
      </div>
    </>
  );
}

export default FooterSection;
