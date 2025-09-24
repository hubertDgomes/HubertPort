import React from "react";
import Container from "../Container";
import Images from "../Images";
import me from "/src/assets/me2.jpg";
import logo1 from "/src/assets/logo1.png";
import logo2 from "/src/assets/logo2.png";
import logo3 from "/src/assets/logo3.png";
import gif1 from "/src/assets/vscode.png";
import gif2 from "/src/assets/firebase.png";
import gif3 from "/src/assets/figma.png";
import gif4 from "/src/assets/git.png";
import { motion } from "motion/react";

const Box = ({ src, title, topic }) => {
  return (
    <>
      <div className="py-[32px] px-[20px] border-1 border-[#D8D8D8] rounded-[8px] w-[210px] cursor-pointer hover:border-r-[4px] hover:border-b-[4px] transition-all duration-300">
        <Images className={"lg:w-[30px] w-[20px]"} src={src} />
        <p className="font-Outfit text-[20px] font-medium mt-[10px]">{title}</p>
        <p className="font-Outfit text-[15px] text-[#797979] mt-[10px]">
          {topic}
        </p>
      </div>
    </>
  );
};
const AboutMe = () => {
  return (
    <>
      <section id="about">
        <Container className={"py-[40px]"}>
          <motion.div
            initial={{ opacity: 0, y: -80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.8,
            }}
            viewport={{ once: true, amount: 0.5 }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="font-Ovo text-[24px] tracking-wide text-gray-500"
            >
              Introduction
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
              className="font-Ovo text-[60px] font-bold"
            >
              About me
            </motion.h2>
          </motion.div>
          <div className="flex justify-between items-center flex-col lg:flex-row">
            <div className="lg:w-[400px]">
              <Images className={"rounded-2xl"} src={me} />
            </div>
            <div div className="w-[797px]">
              <motion.p
              initial={{
                opacity:0,
                scale:0.8
              }}
              whileInView={{
                opacity:1,
                scale:1
              }}
              transition={{
                duration:0.4
              }}
              className="md:w-[797px] w-[400px] m-auto font-Ovo text-[20px] leading-[40px] text-center lg:text-left mt-[30px] lg:mt-0">
                Hey, I’m Hubert — a Frontend Developer passionate about crafting
                clean and responsive web apps. I enjoy turning ideas into
                smooth, user-friendly interfaces with modern tools and tech.
                Always curious and eager to learn, I keep pushing my skills to
                the next level. For me, it’s all about blending creativity with
                code to build experiences that stand out.
              </motion.p>
              <div className="flex gap-x-[40px] py-[20px] flex-col lg:flex-row justify-center items-center lg:justify-start lg:items-start">
                <motion.div
                initial={{
                  x:40,
                  opacity:0
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration: 0.4
                }}
                className="">
                  <Box
                  src={logo1}
                  title={"Languages"}
                  topic={
                    "HTML, CSS, JavaScript, Tailwind CSS, React Js, Redux Tookit etc."
                  }
                />
                </motion.div>
                <motion.div
                initial={{
                  x:40,
                  opacity:0
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.5
                }}
                className="">
                  <Box
                  src={logo2}
                  title={"Education"}
                  topic={"B.Sc in Computer Science(Running)"}
                />
                </motion.div>
                <motion.div
                initial={{
                  x:40,
                  opacity:0
                }}
                whileInView={{
                  x:0,
                  opacity:1
                }}
                transition={{
                  duration: 0.4,
                  delay: 1
                }}
                className="">
                  <Box
                  src={logo3}
                  title={"Projects"}
                  topic={"Built more than 2 projects"}
                />
                </motion.div>
              </div>
              <p className="font-Ovo text-[20px] text-[#868686] text-center lg:text-left">Tools i use</p>
              <div className="flex gap-x-[15px] justify-center items-center lg:justify-start">
                <Images
                  className={
                    "w-[80px] p-3 border-1 rounded-2xl border-[#848484]"
                  }
                  src={gif1}
                />
                <Images
                  className={
                    "w-[80px] p-3 border-1 rounded-2xl border-[#848484]"
                  }
                  src={gif2}
                />
                <Images
                  className={
                    "w-[80px] p-3 border-1 rounded-2xl border-[#848484]"
                  }
                  src={gif3}
                />
                <Images
                  className={
                    "w-[80px] p-3 border-1 rounded-2xl border-[#848484]"
                  }
                  src={gif4}
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;
