import React from "react";
import Container from "../Container";

const ContactPart = () => {
    const handleRem = (e)=>{
        e.preventDefault()
    }
  return (
    <>
      <section id="contact">
        <div className="bg-[url(/src/assets/bg2.png)] bg-center bg-cover bg-no-repeat">
        <Container className={"py-[40px]"}>
          <div className="text-center">
            <p className="font-Ovo text-[24px] text-[#242424]">
              Connect with me
            </p>
            <h2 className="font-Ovo text-[60px] text-[#242424]">
              Get in touch
            </h2>
            <p className="font-Ovo text-[20px] text-[#565656] lg:w-[577px] m-auto">
              I'd love to hear from you! If you have any questions, comments or
              feedback, please use the form below.
            </p>
          </div>
          <div className="text-center mt-[40px]">
            <form action="">
              <div className="flex justify-center items-center gap-y-[40px] gap-x-[40px] mb-[40px] flex-col md:flex-row">
                <input placeholder="Enter Your Name" type="text" className="rounded-[8px] w-[348px] focus:outline-0 border-2 border-[#A4A4A4] py-[20px] px-[15px] placeholder:font-Outfit text-[18px] placeholder:text-[#B3B3B3]" />
                <input placeholder="Enter your email" type="email" className="rounded-[8px] w-[348px] focus:outline-0 border-2 border-[#A4A4A4] py-[20px] px-[15px] placeholder:font-Outfit text-[18px] placeholder:text-[#B3B3B3]" />
              </div>
              <textarea placeholder="Enter your message" className="rounded-[8px] w-[400px] lg:w-[722px] h-[200px] border-2 border-[#A4A4A4] p-5 focus:outline-0 placeholder:font-Outfit placeholder:text-[#B3B3B3]"></textarea>
              <br />
              <button className="font-Outfit text-[18px] py-[20px] px-[45px] bg-black text-white rounded-[50px] cursor-pointer mt-[20px]" onClick={handleRem}>Submit now</button>
            </form>
          </div>
        </Container>
      </div>
      </section>
    </>
  );
};

export default ContactPart;
