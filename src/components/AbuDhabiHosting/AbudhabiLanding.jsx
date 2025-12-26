import React, { useState } from "react";
import DescriptionBox from "../Home/mapsection/DescriptionBox";
import { handleChatClick } from "../../utils/whatsapp";

export default function AbudhabiLanding() {
  const [isHover2, setIsHover2] = useState(false);
  return (
    <div className="px-5 md:px-10 lg:px-[120px] xl:px-[180px] py-10 min-h-[640px] flex md:flex-row flex-col gap-5 justify-between items-center ">
      <div className="flex flex-col md:items-start items-center gap-5 max-w-[620px] animate-slideInLeft">
        <h1 className="text-[40px] gradient-heading font-semibold md:text-left text-start">
          Bitcoin Mining Hosting in Abu Dhabi, UAE
        </h1>
        <p className="md:text-left text-start">
          Host your ASIC miners with confidence through professional Bitcoin
          mining hosting in Abu Dhabi, UAE. Dahab Miners provides secure
          facilities, stable energy infrastructure, and expert operational
          support, enabling miners to scale efficiently in one of the UAE’s most
          crypto-friendly environments.
        </p>
        <button
          className="px-4 py-2 rounded-full btn-bg w-fit"
          onClick={() => handleChatClick()}
        >
          Know More
        </button>
      </div>
      <div className="relative animate-slideInRight">
        <img src="/host/map.png" alt="Bitcoin mining hosting Abu Dhabi" />
        <img
          src="/host/location.png"
          alt="Bitcoin mining hosting Abu Dhabi"
          className="absolute w-3 right-[36%] top-[49%] cursor-pointer"
          onMouseEnter={() => setIsHover2(true)}
          onMouseLeave={() => setIsHover2(false)}
        />
        {isHover2 && (
          <DescriptionBox
            flag={"/home/uae.png"}
            place={"UAE"}
            amt={"$56,623.54"}
            position={"right-[18%] top-[24%] bg-[#07EAD3]"}
          />
        )}
      </div>
    </div>
  );
}
