import React from "react";
import { navLinks } from "@/constants/constant";
import Link from "next/link";
import { X, Search, User, ShoppingCart } from 'lucide-react';

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ closeNav, showNav }: Props) => {
  const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";

  return (
    <div>
      {/* Overlay */}
      <div 
        className={`fixed ${navOpen} transform transition-all duration-500 inset-0 z-[1000] bg-black/50 w-full h-screen`}
        onClick={closeNav}
      ></div>
      {/* Nav Links */}
      <div className={`${navOpen} transition-all duration-500 fixed top-0 left-0 h-full w-64 bg-[#111111] shadow-lg z-[10000] p-6`}>
        <div className="flex flex-col space-y-6">
          {navLinks.map((navLink) => (
            <Link key={navLink.id} href={navLink.url} onClick={closeNav}>
              <span className="text-white hover:text-[#FF9900] transition-colors">
                {navLink.label}
              </span>
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-700">
            <div className="flex items-center space-x-4 text-white">
              <button className="hover:text-[#FF9900]">
                <Search className="w-5 h-5" />
              </button>
              <Link href={"/signup"} className="text-white hover:text-[#FF9900]">
                <User className="w-5 h-5" />
              </Link>
              <button className="hover:text-[#FF9900]">
                <ShoppingCart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Close Button */}
        <X 
          onClick={closeNav} 
          className="absolute top-4 right-4 w-6 h-6 text-white cursor-pointer hover:text-[#FF9900]"
        />
      </div>
    </div>
  );
};

export default MobileNav;

