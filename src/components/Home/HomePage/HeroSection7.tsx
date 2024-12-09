import React from "react";
import Image from 'next/image';

const HeroSection7 = () => {
  // Data for the cards
  const data = [
    {
      id: 1,
      image: "/Images/Hero7Card 1.png", // Image paths
      cardWidth: 312,
      cardHeight: 391,
    },
    {
      id: 2,
      image: "/Images/Hero7Card 2.png", // Image paths
      cardWidth: 312,
      cardHeight: 391,
    },
    {
      id: 3,
      image: "/Images/Hero7Card 3.png", // Image paths
      cardWidth: 312,
      cardHeight: 391,
    },
    {
      id: 4,
      image: "/Images/Hero7Card 4.png", // Image paths
      cardWidth: 312,
      cardHeight: 391,
    },
  ];

  return (
    <div className="max-w-[1170px] mx-auto lg:mb-[120px] mb-20 flex flex-col gap-[56px] justify-center items-center">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Chefs
        </p>
        <p className="font-helvetica font-bold text-5xl leading-[56px] text-primary">
          Me<span className="text-background">et Our Chef</span>
        </p>
      </div>

      <div className="flex gap-6 flex-wrap xl:flex-nowrap justify-center">
        {data.map((element) => (
          <div
            key={element.id}
            className="relative flex flex-col items-center"
            style={{ width: `${element.cardWidth}px`, height: `${element.cardHeight}px` }}
          >
            <Image
              src={element.image}
              alt="Chef"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="">
        <button className="border border-primary rounded-[25px] text-background py-[13px] px-[41px]">
          See More
        </button>
      </div>
    </div>
  );
};

export default HeroSection7;
