import React, { useRef } from "react";
import Container from "../Container";
import Images from "../Images";
import man from "/src/assets/me.jpg";
import { motion } from "motion/react"


const AllPage = () => {
  return (
    <>
      <section id="home">
        <div className="bg-[url(/src/assets/bg1.png)] bg-center bg-cover bg-no-repeat py-[300px] mt-[-70px]">
        <Container>
          <motion.div 
          initial={{
            opacity: 0,
           
          }}
          whileInView={{
            opacity: 1,
            
          }}
          transition={{
            duration: 1
          }}
          className="text-center">
            <Images
              className={"w-[158px] h-[158px] m-auto rounded-[100px]"}
              src={man}
            />
            <p className="font-Ovo text-[28px]">Hi! I’m Hubert Dhrubo Gomes</p>
            <p className="font-Ovo text-[70px]">
              Frontend web developer based in Bangladesh.
            </p>
            <div className="flex justify-center gap-x-[30px]">
              <button className="font-Outfit text-[18px] py-[10px] px-[20px] border-1 bg-black text-white rounded-[50px] cursor-pointer">
                Connect with me
              </button>
              <button className="font-Outfit text-[18px] py-[10px] px-[20px] border-1 bg-white text-black rounded-[50px] cursor-pointer">
                My resume
              </button>
            </div>
          </motion.div>
          
        </Container>
      </div>
      </section>
    </>
  );
};

export default AllPage;
