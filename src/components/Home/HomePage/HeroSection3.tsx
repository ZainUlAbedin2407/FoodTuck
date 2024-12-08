import React from "react";
import Image from "next/image";

const HeroSection3 = () => {
  const data = [
    {
      id: 1,
      image: "/Images/Hero3 card1.png",
      discount: "Save 30%",
      dish: "Fast Food Dish",
      cardWidth: 305,
      cardHeight: 328,
    },
    {
      id: 2,
      image: "/Images/Hero3 card2.png",
      discount: "Save 20%",
      dish: "Delicious Pizza",
      cardWidth: 305,
      cardHeight: 328,
    },
    {
      id: 3,
      image: "/Images/Hero3 card3.png",
      discount: "Save 25%",
      dish: "Healthy Salad",
      cardWidth: 305,
      cardHeight: 328,
    },
    {
      id: 4,
      image: "/Images/Hero3 card4.png",
      discount: "Save 15%",
      dish: "Yummy Dessert",
      cardWidth: 305,
      cardHeight: 328,
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto flex gap-[56px] flex-col lg:px-0 px-3 md:mb-[120px] mb-20">
      {/* Heading */}
      <div className="flex flex-col gap-2 text-center">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Food Category
        </p>
        <p className="font-helvetica font-bold text-5xl leading-[56px] text-primary">
          Ch<span className="text-background">oose Food Item</span>
        </p>
      </div>

      {/* Cards Section */}
      <div className="flex gap-8 flex-wrap justify-center">
        {data.map((element) => (
          <div
            key={element.id}
            className="flex flex-col items-center border border-gray-300 rounded-lg shadow-md p-4"
          >
            {/* Image */}
            <div
              className="relative"
              style={{
                width: element.cardWidth,
                height: element.cardHeight,
              }}
            >
              <Image
                src={element.image}
                alt={element.dish || "Food Item"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            {/* Discount and Dish Details */}
            <div className="mt-4 text-center">
              {element.discount && (
                <p className="text-red-500 font-semibold">{element.discount}</p>
              )}
              {element.dish && (
                <p className="font-bold text-lg">{element.dish}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection3;
