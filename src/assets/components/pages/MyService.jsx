import React, { useRef, useState } from "react";
import Container from "../Container";
import Images from "../Images";
import src1 from "/src/assets/src1.png";
import { RxCross2 } from "react-icons/rx";
const Box = ({ src, title, topic, onClick }) => {
  return (
    <>
      <div
        className="py-[52px] px-[50px] border-1 border-[#D8D8D8] rounded-[8px] cursor-pointer hover:border-r-[4px] hover:border-b-[4px] transition-all duration-300"
        onClick={onClick}
      >
        <Images className={"w-[30px]"} src={src} />
        <p className="font-Outfit text-[26px] font-medium mt-[10px] ">
          {title}
        </p>
        <p className="font-Outfit text-[16px] text-[#797979] mt-[10px] w-[255px]">
          {topic}
        </p>
        <p className="font-Outfit text-[16px] text-[#797979] mt-[10px] font-bold">
          Read More
        </p>
      </div>
    </>
  );
};

const MyService = () => {
  const [show1, setShow1] = useState(false);
  const showDet1 = () => {
    setShow1(!show1);
    console.log("uidgfiud");
  };
  const [show2, setShow2] = useState(false);
  const showDet2 = () => {
    setShow2(!show2);
    console.log("uidgfiud");
  };
  const [show3, setShow3] = useState(false);
  const showDet3 = () => {
    setShow3(!show3);
    console.log("uidgfiud");
  };
  const [show4, setShow4] = useState(false);
  const showDet4 = () => {
    setShow4(!show4);
    console.log("uidgfiud");
  };
  return (
    <>
      <section id="services">
        <Container className={"py-[40px]"}>
        <div className="text-center">
          <p className="font-Ovo text-[24px] text-[#242424]">What i offers</p>
          <h2 className="font-Ovo text-[60px] text-[#242424]">My services</h2>
        </div>
        <div className="flex gap-x-[20px] flex-col lg:flex-row">
          <Box
            src={src1}
            title={"Web design"}
            topic={
              "In my web design work, I focus on creating clean, modern, and user-friendly......."
            }
            onClick={showDet1}
          />

          <Box
            src={src1}
            title={"Responsive Website"}
            topic={
              "I build responsive websites that adapt flawlessly to any screen size, ensuring users get the best..."
            }
            onClick={showDet2}
          />
          <Box
            src={src1}
            title={"Figma to React JS"}
            topic={
              "I specialize in converting Figma designs into fully functional React.js applications with clean, reusable, and scalable code. My..."
            }
            onClick={showDet3}
          />
          <Box
            src={src1}
            title={"Adding Various Functionality"}
            topic={
              "I focus on enhancing websites and applications by adding various functionalities that improve usability and engagement. From..."
            }
             onClick={showDet4}
          />
        </div>
      </Container>
      {show1 && (
        <div className="fixed inset-45 bg-white border-1 bg-opacity-70 flex items-center justify-center z-50 px-[20px]">
         <button className=" text-[30px] font-Ovo absolute top-5 right-9 cursor-pointer font-[80px] text-black" onClick={showDet1}><RxCross2 /></button>
          <h1 className="text-black text-[30px] font-Ovo">
            In my web design work, I focus on creating clean, modern, and
            user-friendly interfaces that balance both aesthetics and
            functionality. I enjoy transforming ideas into visually appealing
            layouts, paying close attention to color schemes, typography, and
            responsive design to ensure a seamless experience across all
            devices. My approach combines creativity with usability, so every
            project not only looks great but also delivers smooth navigation and
            accessibility. Whether it’s designing from scratch or improving an
            existing layout, I aim to craft designs that leave a lasting
            impression and help brands stand out online.
          </h1>
        </div>
      )}
      {show2 && (
        <div className="fixed inset-45 bg-white border-1 bg-opacity-70 flex items-center justify-center z-50 px-[20px]">
         <button className=" text-[30px] font-Ovo absolute top-5 right-9 cursor-pointer font-[80px] text-black" onClick={showDet2}><RxCross2 /></button>
          <h1 className="text-black text-[30px] font-Ovo">
            I build responsive websites that adapt flawlessly to any screen size, ensuring users get the best experience whether they’re browsing on a phone, tablet, or desktop. My focus is on creating layouts that adjust smoothly without losing design quality or functionality. By using modern techniques like flexible grids, fluid images, and media queries, I make sure every project is both visually appealing and practical across devices. A responsive site isn’t just about looking good—it’s about making content accessible, fast, and easy to interact with for every visitor.
          </h1>
        </div>
      )}
      {show3 && (
        <div className="fixed inset-45 bg-white border-1 bg-opacity-70 flex items-center justify-center z-50 px-[20px]">
         <button className=" text-[30px] font-Ovo absolute top-5 right-9 cursor-pointer font-[80px] text-black" onClick={showDet3}><RxCross2 /></button>
          <h1 className="text-black text-[30px] font-Ovo">
            I specialize in converting Figma designs into fully functional React.js applications with clean, reusable, and scalable code. My process starts with analyzing the design details—layouts, typography, colors, and interactions—and then translating them into pixel-perfect components that bring the UI to life. I focus on writing modular code, following best practices, and keeping performance in mind so the final product not only matches the design but also delivers a smooth user experience. This skill allows me to bridge the gap between design and development, turning creative ideas into interactive, production-ready web apps.
          </h1>
        </div>
      )}
      {show4 && (
        <div className="fixed inset-45 bg-white border-1 bg-opacity-70 flex items-center justify-center z-50 px-[20px]">
         <button className=" text-[30px] font-Ovo absolute top-5 right-9 cursor-pointer font-[80px] text-black" onClick={showDet4}><RxCross2 /></button>
          <h1 className="text-black text-[30px] font-Ovo">
            I focus on enhancing websites and applications by adding various functionalities that improve usability and engagement. From interactive components like dynamic forms, modals, and dropdowns to more advanced features such as API integrations, authentication systems, and real-time updates, I make sure every functionality serves a purpose. My goal is to go beyond static designs and bring projects to life with smooth, reliable, and user-friendly features. By combining problem-solving with clean coding practices, I ensure each functionality not only works flawlessly but also adds real value to the overall user experience.
          </h1>
        </div>
      )}
      </section>
    </>
  );
};

export default MyService;
