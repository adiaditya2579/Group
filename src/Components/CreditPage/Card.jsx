import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
function Card() {
  const { image, name, roll, linkedin, github, email } = item;

  const handleemailClick = () => {
    window.open(`mailto:${email}`, "_blank");
  };
  const handleLinkdinClick = () => {
    window.open(linkedin, "_blank");
  };
  const handlegithubClick = () => {
    window.open(github, "_blank");
  };
  return (
    <div>
    <div className=" w-[16rem] h-[20rem] m-auto mt-10  bg-gradient-to-r from-[#362454] to-[#7951b8] rounded-xl relative ">
    <div className=" h-36 w-36  rounded-full border-4 overflow-hidden absolute left-[50%] -translate-x-[50%] top-8">
      <img className=" w-full h-full object-cover" src={image} />
    </div>
    <div className=" text-white flex flex-col items-center text-nowrap pt-48">
      <h3 className="font-semibold text-[17px]">{name}</h3>
      <h2 className=" text-sm font-semibold opacity-60 text-[17px]">
        {roll}
      </h2>
    </div>
    <div className=" flex justify-around text-white text-[25px] px-8 pt-6">
      <HiOutlineMail className=" cursor-pointer" onClick={handleemailClick} />
      <FaLinkedin className=" cursor-pointer" onClick={handleLinkdinClick} />
      <FaGithub className=" cursor-pointer" onClick={handlegithubClick} />
    </div>
  </div>
    </div>
  )
}

export default Card