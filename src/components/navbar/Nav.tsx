"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/constants/constant";
import { Menu, Search, User, ShoppingCart } from "lucide-react";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);
  const [currentPage, setCurrentPage] = useState("Home"); // Default to Home
  const pathName = usePathname();

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) {
        setNavBg(true);
      }
      if (window.scrollY < 90) {
        setNavBg(false);
      }
    };

    window.addEventListener("scroll", handler);

    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  // Dynamic heading and breadcrumb logic based on route
  useEffect(() => {
    if (pathName) {
      const path = pathName.split("/").filter(Boolean);
      const page = path[path.length - 1] || "Home"; // Get last part of path, default to "Home"
      setCurrentPage(page.charAt(0).toUpperCase() + page.slice(1)); // Capitalize first letter of page name
    }
  }, [pathName]);

  return (
    <>
      <div
        className={`fixed ${
          navBg ? "bg-[#111111]" : "bg-transparent"
        } h-20 z-[10] w-full transition-all duration-200`}
      >
        <div className="bg-[#1E1E1E] flex items-center h-full justify-around w-full  ">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              <span className="text-white">Food</span>
              <span className="text-[#FF9900]">tuck</span>
            </span>
          </Link>

          {/* Navlinks */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((navLink) => (
              <Link key={navLink.id} href={navLink.url}>
                <span className="text-white hover:text-[#FF9900]  transition-colors text-sm">
                  {navLink.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-white hover:text-[#FF9900]">
                <Search className="w-5 h-5" />
              </button>
              <Link href={"/signup"} className="text-white hover:text-[#FF9900]">
                <User className="w-5 h-5" />
              </Link>
              <button className="text-white hover:text-[#FF9900]">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
            {/* Burger */}
            <Menu
              onClick={openNav}
              className="w-6 h-6 cursor-pointer text-white lg:hidden"
            />
          </div>
        </div>
      </div>

      {/* Page Header */}
      <div className="relative h-[300px] bg-[#111111] flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/navImage.png"
            alt="Header Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-1 text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">{currentPage} Page</h1>
          <div className="flex items-center justify-center space-x-2 text-sm">
            <Link href="/" className="text-white hover:text-[#FF9900]">
              Home
            </Link>
            <span className="text-[#FF9900]">›</span>
            <span className="text-[#FF9900]">{currentPage}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
