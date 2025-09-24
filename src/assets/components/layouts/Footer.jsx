import React from "react";
import Container from "../Container";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-white">
      <Container className="py-[40px]">
        {/* Logo + Email */}
        <div className="text-center mb-[20px]">
          <h1 className="font-Outfit font-semibold text-[32px] md:text-[45px]">
            Hubert <span className="text-red-700">.</span>
          </h1>
          <p className="font-Outfit text-[16px] md:text-[18px] text-[#797979] flex justify-center items-center gap-2">
            <MdEmail className="text-[20px]" />
            gomeshubert8@gmail.com
          </p>
        </div>

        <hr className="border-gray-300" />

        <div className="mt-[10px] flex flex-col md:flex-row md:justify-between items-center text-center md:text-left gap-4">
          <p className="font-Outfit text-[14px] md:text-[18px] text-[#626262]">
            © 2025 Hubert Dhrubo Gomes. All rights reserved.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-x-[40px] md:gap-x-[70px] font-Outfit text-[14px] md:text-[18px] text-[#626262]">
            <p className="cursor-pointer hover:text-red-600 transition-colors">Terms of Services</p>
            <p className="cursor-pointer hover:text-red-600 transition-colors">Privacy Policy</p>
            <p className="cursor-pointer hover:text-red-600 transition-colors">Connect with me</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
