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
import { motion } from "framer-motion";

const Box = ({ src, title, topic }) => {
  return (
    <div className="py-6 px-4 border border-gray-300 rounded-lg w-full max-w-[210px] cursor-pointer hover:border-r-4 hover:border-b-4 hover:border-gray-400 transition-all duration-300">
      <Images className="" src={src} />
      <p className="font-Outfit text-lg sm:text-xl font-medium mt-2">{title}</p>
      <p className="font-Outfit text-sm sm:text-base text-gray-600 mt-2">
        {topic}
      </p>
    </div>
  );
};

const AboutMe = () => {
  return (
    <section id="about">
      <Container className="py-8 sm:py-12 md:py-16">
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
            className="font-Ovo text-lg sm:text-xl md:text-2xl tracking-wide text-gray-500"
          >
            Introduction
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="font-Ovo text-4xl sm:text-5xl md:text-6xl font-bold"
          >
            About me
          </motion.h2>
        </motion.div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-8 lg:gap-12 mt-8">
          <div className="w-full max-w-[400px]">
            <Images className="rounded-2xl" src={me} />
          </div>
          <div className="w-full max-w-[800px]">
            <motion.p
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="w-full font-Ovo text-base sm:text-lg md:text-xl leading-relaxed text-center lg:text-left mt-6 lg:mt-0"
            >
              Hey, I’m Hubert — a Frontend Developer passionate about crafting
              clean and responsive web apps. I enjoy turning ideas into
              smooth, user-friendly interfaces with modern tools and tech.
              Always curious and eager to learn, I keep pushing my skills to
              the next level. For me, it’s all about blending creativity with
              code to build experiences that stand out.
            </motion.p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 py-6 justify-center items-center sm:items-start lg:justify-start">
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <Box
                  src={logo1}
                  title="Languages"
                  topic="HTML, CSS, JavaScript, Tailwind CSS, React Js, Redux Toolkit etc."
                />
              </motion.div>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <Box
                  src={logo2}
                  title="Education"
                  topic="B.Sc in Computer Science (Running)"
                />
              </motion.div>
              <motion.div
                initial={{ x: 40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 1 }}
              >
                <Box
                  src={logo3}
                  title="Projects"
                  topic="Built more than 2 projects"
                />
              </motion.div>
            </div>
            <p className="font-Ovo text-base sm:text-lg text-gray-600 text-center lg:text-left">
              Tools I use
            </p>
            <div className="flex gap-3 sm:gap-4 justify-center items-center lg:justify-start mt-4">
              <Images
                className="w-16 sm:w-20 p-2 border border-gray-400 rounded-2xl"
                src={gif1}
              />
              <Images
                className="w-16 sm:w-20 p-2 border border-gray-400 rounded-2xl"
                src={gif2}
              />
              <Images
                className="w-16 sm:w-20 p-2 border border-gray-400 rounded-2xl"
                src={gif3}
              />
              <Images
                className="w-16 sm:w-20 p-2 border border-gray-400 rounded-2xl"
                src={gif4}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutMe;