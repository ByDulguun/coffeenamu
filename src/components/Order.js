"use client";

import React, { useState, useEffect } from "react";

export const Order = () => {
  const images = [
    { src: "OrderImg.jpg", text: "Яг одоо захиалаад авах." },
    { src: "OrderImg3.jpg", text: "All lates 20% off special offer" },
    { src: "OrderImg2.jpg", text: "10-ийг аваад 1-ийг бэлгэнд" },
  ];
  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1500);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="w-full pt-32 relative -z-10 ">
      <div className="relative h-fit mx-5">
        <img src={currentImage.src} id="image" className="" />
        <div className="absolute top-[120px] left-0 w-full h-full flex items-center justify-center text-black text-xl duration-1000">
          {currentImage.text}
        </div>
      </div>
      <button className=" w-screen h-fit ">
        <p className="px-4 py-1 text-[#AA714A]  w-fit m-auto  rounded-md border-2 mt-14 border-[#AA714A] ">
          Захиалга
        </p>
      </button>
    </div>
  );
};
