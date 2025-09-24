import React from "react";
import Container from "../Container";
import Images from "../Images";
import logo1 from '/src/assets/GetOribi.jpg'
import logo2 from '/src/assets/hankok.png'
import { FaCircleRight } from "react-icons/fa6";

const Works = ({ src,title,title1,link }) => {
  return (
    <>
      <div className="relative group cursor-pointer">
        <Images className={"w-[335px] h-[335px] border-1"} src={src} />
        <div className="px-[20px] py-[20px] border-1 absolute bottom-5 left-1/2 -translate-x-1/2 bg-white opacity-0 translate-y-[20px] group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 rounded-2xl">
          <div className="flex justify-between w-[253px]">
            <div className="">
              <p className="font-Outfit font-semibold text-[18px] text-[#2A2A2A]">{title}</p>
              <p className="font-Outfit text-[16px] text-[#5E5E5E]">{title1}</p>
            </div>
            <div className="">
              <a href={link} target="_blank"><FaCircleRight className="text-[40px]" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MyWorks = () => {
  return (
    <>
      <section id="work">
        <Container className={"py-[30px]"}>
        <div className="text-center">
          <p className="font-Ovo text-[24px]">My portfolio</p>
          <h3 className="font-Ovo text-[60px]">My latest work</h3>
          <p className="font-Ovo text-[20px] w-[764px] m-auto">
            Welcome to my web development portfolio! Explore a collection of
            projects showcasing my expertise in front-end development.
          </p>
        </div>
        <div className="flex gap-x-[20px] mt-[50px]">
          <Works src={logo1} title={"Orebi"} title1={"E-Commerce Website"} link={"https://orebi-azure.vercel.app/"}/>
          <Works src={logo2} title={"Hancok"} title1={"Gaming Website"} link={"https://hancok-three.vercel.app/"}/>
          <Works src={logo1} title={"Frontend project"} title1={"Web Design"} link={"https://orebi-azure.vercel.app/"}/>
          <Works src={logo1} title={"Frontend project"} title1={"Web Design"} link={"https://orebi-azure.vercel.app/"}/>
          
        </div>
      </Container>
      </section>
    </>
  );
};

export default MyWorks;
