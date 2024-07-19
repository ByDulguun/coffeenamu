"use client";

import React, { useEffect, useState } from "react";

export const Order = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3); // Assuming there are 3 items
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="w-screen pt-32 md:pt-0 overflow-hidden  -z-10">
      <div
        className="w-[340%] h-fit mx-5 md:mx-0 flex   "
        style={{
          transform: `translateX(-${index * 35}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        <div>
          <img src="/OrderImg.png" className="carousel_item flex-1 relative " />
          <p className="absolute top-[200px] left-[1930px] text-white text-[32px] w-[200px] ">
            Яг одоо захиалаад авах.
          </p>
        </div>
        <div>
          <img
            src="/OrderImg3.png"
            className="carousel_item flex-1 relative "
          />
          <p className="absolute top-[200px] left-[4590px]  text-[32px] w-[200px] ">
            All lattes 20% Off special offer
          </p>
        </div>

        <div>
          <img src="/OrderImg2.png" className="carousel_item flex-1 relative " />
          <p className="absolute top-[200px] left-[7260px] text-[32px] w-[200px] ">
            10-ийг аваад 1-ийг бэлгэнд
          </p>
        </div>
      </div>
      <button className="w-screen h-fit">
        <p className="px-4 py-1 text-[#AA714A] w-fit m-auto rounded-md border-2 mt-14 border-[#AA714A] md:absolute top-72 right-52 md:bg-white">
          Захиалга
        </p>
      </button>
    </div>
  );
};
