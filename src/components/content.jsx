import React, { useState } from "react";

import Cylinder22 from "../assets/cylinder22.png";
import Logo from "../assets/logo.svg";
import Instagram from "../assets/instagram.png";
import Facebook from "../assets/facebook2.png";
import Twitter from "../assets/twitter.png";
import Modal from "react-modal";
//import { IoClose } from "react-icons/io5";
import Counter from "./counter";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    border:"0",
  },
};
//Modal.setAppElement("#yourAppElement");

const Content = () => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   references are now sync'd and can be accessed.
  //   subtitle.style.color = "#f00";
  // }

  function closeModal() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {};

  return (
    <div className="flex flex-col justify-center bg-background bg-no-repeat bg-cover min-h-screen relative">
      <div className="flex flex-row   my-[5rem] px-[9rem] justify-between md:my-[0rem] md:px-[1rem] sm:px-[1rem]">
        <div className="flex flex-col  h-[32rem]">
          <div className="md:w-[4rem] sm:w-[4rem]">
            <img src={Logo} alt="" />
          </div>

          <div className="mt-[10rem] md:mt-[3rem] sm:mt-[2rem]">
            <p className="w-[16.7rem] text-[1.9rem] md:text-[1.4rem] sm:text-[1.2rem] text-[#333333] opacity-[0.25] mb-[3rem]">
              COMING SOON
            </p>
            <h1 className="w-[35rem] text-[3rem] font-fjalla color-[#333333] md:text-[2rem] md:w-[25rem] sm:text-[1.5rem] sm:w-[20rem]">
              Unlock Seamless Gas Access Anytime, And Anywhere
            </h1>
            <p className="w-[33rem] h-[4.8rem] font-lora opacity-[0.8] md:w-[27rem] md:text-[0.9rem] sm:w-[18rem] sm:text-[0.7rem]">
              Your Digital Solution for Convenient Delivery and Smart Management
              that ensures Reliable Deliveries and Prevents Unexpected Gas
              Shortages with Smart Monitoring
            </p>
          </div>
          <div className="flex justify-between">
            <div className="sm:mx-[1rem] ">
              <Counter />
            </div>
            <button
              className="bg-[#5BCCF7] w-[11rem] h-[3.3rem] rounded-xl text-[#FFFFFF] font-fjalla md:w-[7rem] md:mt-[1rem] md:mr-[1rem] sm:w-[5rem] sm:text-[1rem] sm:mt-[2rem] sm:h-[2rem]"
              onClick={openModal}
            >
              Subscribe
            </button>
          </div>
          <div className="flex flex-row  gap-20 md:gap-5 sm:gap-3 text-[#352B26] ">
            <div className="md:w-[4rem] sm:w-[2rem]">
              <img src={Instagram} alt="" />
            </div>
            <div className="md:w-[4rem] sm:w-[2rem]">
              <img src={Facebook} alt="" />
            </div>
            <div className="md:w-[4rem] sm:w-[2rem]">
              <img src={Twitter} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img
            src={Cylinder22}
            alt="Cylinder"
            className="w-[30rem] md:w-[30rem] md:mt-[2rem] sm:hidden"
          />
        </div>
      </div>

      <div className="">
        <Modal
          isOpen={modalIsOpen}
          //onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel=""
        >
          <div className="p-8 h-[70vh] w-[30vw] bg-[#F1F1F1] rounded-md">
            <div>
              <p className="w-[7.3rem] h-[2.3rem] font-fjalla font-normal">
                Subscribe
              </p>
            </div>

            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="" className="text-[14px]">
                  firstname
                </label>
                <input
                  type="text"
                  name="firstname"
                  placeholder="Enter here"
                  className="h-[40px] p-2 w-[426px] bg-[#D9D9D9] rounded-[8px] border-0"
                />
              </div>

              <div>
                <label htmlFor="" className="text-[14px]">
                  surname
                </label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Enter here"
                  className="h-[40px] p-2 w-[426px] bg-[#D9D9D9] rounded-[8px] border-0"
                />
              </div>

              <div>
                <label htmlFor="" className="text-[14px]">
                  phone-no
                </label>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter here"
                  className="h-[40px] p-2 w-[426px] bg-[#D9D9D9] rounded-[8px] border-0"
                />
              </div>

              <div>
                <label htmlFor="" className="text-[14px]">
                  email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Enter here"
                  className="h-[40px] p-2 w-[426px] bg-[#D9D9D9] rounded-[8px] border-0"
                />
              </div>

              <div className="self-end" onClick={handleSubmit()}>
                <button className="bg-[#5BCCF7] w-[8rem] h-[2rem] rounded-md text-[#FFFFFF] font-fjalla">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Content;
