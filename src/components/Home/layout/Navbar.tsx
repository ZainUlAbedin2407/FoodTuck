import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="max-w-[1320px] mx-auto flex-col md:justify-center justify-between lg:pt-[45px] pt-5">
      <div className="text-center">
        <p className="text-2xl font-bold text-primary font-helvetica">
          Food<span className="text-white">tuck</span>
        </p>
      </div>

      <div className="links-input flex items-center justify-between px-2 xl:px-0 sm:flex-row flex-col">
        <div className="links flex gap-4 lg:gap-8 font-inter font-normal sm:text-base text-[12px] text-background">
          <Link href={"/"}>Home</Link>
          <Link href={"/"}>Menu</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Pages</Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Shop</Link>
          <Link href={"/"}>Contact</Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="input relative md:flex hidden">
            <input
              type="text"
              placeholder="Search...."
              className="rounded-[27px] bg-transparent border border-primary px-[26px] py-[14px]"
            />
            <CiSearch className="absolute w-6 h-6 text-background top-[14px] right-7" />
          </div>
          <CiSearch className=" w-6 h-6 text-background top-[14px] right-7 flex md:hidden" />
          <Image
            src={"/Icons/Handbag.png"}
            alt="HandBag Icon"
            className="w-6 h-6"
            width={24} 
            height={24} 
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
