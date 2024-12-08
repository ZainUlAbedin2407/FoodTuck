import React from "react";
import Link from "next/link";
import Image from "next/image";

const MenuCardData = [
  {
    id: 1,
    image: "/Images/Hero6Menu1.png",
    name: "Lettuce Leaf",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 2,
    image: "/Images/Hero6Menu2.png",
    name: "Fresh Breakfast",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "14.5$",
  },
  {
    id: 3,
    image: "/Images/Hero6Menu3.png",
    name: "Mild Butter",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 4,
    image: "/Images/Hero6Menu4.png",
    name: "Fresh Bread",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 5,
    image: "/Images/Hero6Menu5.png",
    name: "Glow Cheese",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 6,
    image: "/Images/Hero6Menu6.png",
    name: "Glow Cheese",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 7,
    image: "/Images/Hero6Menu7.png",
    name: "Glow Cheese",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
  {
    id: 8,
    image: "/Images/Hero6Menu8.png",
    name: "Glow Cheese",
    detail: "Lacus nisi, et ac dapibus velit in consequat.",
    price: "12.5$",
  },
];

const HeroSection6 = () => {
  return (
    <div className="lg:mb-[120px] mb-20 max-w-[1320px] mx-auto flex flex-col gap-[56px] lg:px-0 px-3">
      <div className="flex flex-col gap-2 text-center">
        <p className="font-greatVibes text-[32px] leading-10 text-primary">
          Choose & pick
        </p>
        <p className="font-helvetica font-bold text-5xl leading-[56px] text-primary">
          Fr<span className="text-background">om Our Menu</span>
        </p>
      </div>
      <div className="flex gap-[50px] lg:gap-[100px] font-inter text-xl text-background flex-wrap justify-center">
        <Link href={"#"} className="hover:text-primary">
          BreakFast
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Lunch
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Dinner
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Desert
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Drink
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Snock
        </Link>
        <Link href={"#"} className="hover:text-primary">
          Suops
        </Link>
      </div>

      <div className="flex flex-row gap-[21px] justify-around">
        <div className="relative lg:block hidden">
          <Image
            src="/Images/Hero6Image1.png"
            alt="Hero Image 1"
            width={500}
            height={500}
          />
          <Image
            src="/Images/Hero6Image.png"
            alt="Hero Image 2"
            className="absolute top-0 left-[85px]"
            width={500}
            height={500}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          {MenuCardData.map((element) => {
            return (
              <div key={element.id} className="menu-card">
                <Image
                  src={element.image}
                  alt={element.name}
                  width={50}
                  height={50}
                />
                <p className="menu-card-name text-white">{element.name}</p>
                <p className="menu-card-detail text-white">{element.detail}</p>
                <p className="menu-card-price text-white">{element.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroSection6;
