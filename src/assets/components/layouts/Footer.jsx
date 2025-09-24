import React from "react";
import Container from "../Container";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-white">
        <Container className={"py-[40px]"}>
          <div className="text-center mb-[20px]">
            <h1 className="font-Outfit font-semibold text-[45px]">
              Hubert <span className="text-red-700">.</span>
            </h1>
            <p className="font-Outfit text-[18px] text-[#797979] flex justify-center items-center">
              <MdEmail />
              gomeshubert8@gmail.com
            </p>
          </div>
          <hr />
          <div className="flex justify-between mt-[10px]">
            <p className="font-Outfit text-[18px] text-[#626262]">© 2025 Hubert Dhrubo Gomes All rights reserved.</p>
            <div className="flex gap-x-[70px] font-Outfit text-[18px] text-[#626262]">
              <p>Terms of Services</p>
              <p>Privacy Policy</p>
              <p>Connect with me</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
