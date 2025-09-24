import React, { useState } from "react";
import Container from "../Container";
import { IoMoonOutline } from "react-icons/io5";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-40 w-full">
        <Container className={"bg-white/70 py-[10px] px-[10px] rounded-2xl"}>
          <div className="flex justify-between items-center">
            <div>
              <h1 className="font-Outfit font-semibold text-[32px] md:text-[45px]">
                Hubert <span className="text-red-700">.</span>
              </h1>
            </div>
            <div className="py-6 px-8 rounded-[100px] bg-white hidden md:block">
              <ul className="flex gap-x-[60px] font-Ovo text-[20px]">
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About me</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#work">My work</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
            <div className="hidden items-center gap-x-[20px] md:flex">
              <IoMoonOutline className="text-[28px]" />
              <button className="font-Outfit text-[18px] py-[10px] px-[20px] border-1 rounded-[100px]">
                Connect
              </button>
            </div>
            <div className="md:hidden flex items-center gap-4">
              <IoMoonOutline className="text-[26px]" />
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
              </button>
            </div>
          </div>
        </Container>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4 }}
              className="fixed top-0 right-0 h-screen w-[75%] bg-white shadow-lg md:hidden z-50"
            >
              <div className="flex flex-col items-center justify-center h-full gap-10 font-Ovo text-[22px]">
                <a href="#home" onClick={() => setIsOpen(false)}>
                  Home
                </a>
                <a href="#about" onClick={() => setIsOpen(false)}>
                  About me
                </a>
                <a href="#services" onClick={() => setIsOpen(false)}>
                  Services
                </a>
                <a href="#work" onClick={() => setIsOpen(false)}>
                  My work
                </a>
                <a href="#contact" onClick={() => setIsOpen(false)}>
                  Contact
                </a>
                <button className="font-Outfit text-[18px] py-[10px] px-[20px] border-1 rounded-[100px]">
                  Connect
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Header;
