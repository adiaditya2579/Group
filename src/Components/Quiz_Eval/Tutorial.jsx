import React, { useState } from "react";
const Tutorial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    {
      id: 1,
      src: "https://i.ibb.co/CBbM8kQ/LS1.png",
      src1: "https://i.ibb.co/DzSF39w/MS1.png",
      caption:
        " Step 1: Open Documents For Download Section in Your Student Dashboard",
    },
    {
      id: 2,
      src: "https://i.ibb.co/b66dG9Y/LS2.png",
      src1: "https://i.ibb.co/SvYMK70/MS2.png",
      caption:
        "Step 2:- Download Answer Transcript For Exam You Want to Check Evaluation For",
    },
    {
      id: 3,
      src: "https://i.ibb.co/5Lp3hxr/LS3.png",
      src1: "https://i.ibb.co/HgcQg3Z/MS3.png",
      caption:
        "Step 3:- Upload the Downloaded Answer Transcript Here and Click On Check Result to See the Result",
    },
    {
      id: 4,
      src: "https://i.ibb.co/NZ2yWbz/LS4.png",
      src1: "https://i.ibb.co/KbNKLtr/MS4.png",
      caption: "Result",
    },
  ];

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      <div className="overflow-hidden w-full flex justify-center">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].caption}
          className="w-[90%] max-md:hidden"
        />
        <img
          src={images[currentIndex].src1}
          alt={images[currentIndex].caption}
          className="min-[768px]:hidden w-[280px] max-[400px]:w-[180px]"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white rounded-full text-xl font-bold p-2"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white rounded-full font-bold text-xl p-2"
        >
          &gt;
        </button>
      </div>
      <div className=" bg-green-800 w-[90%] max-sm:text-sm -bottom-4 left-0 text-center  text-white p-2">
        {images[currentIndex].caption}
      </div>
    </div>
  );
};
export default Tutorial;
