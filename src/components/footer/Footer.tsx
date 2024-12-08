import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Youtube, Instagram, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white relative overflow-hidden">
      {/* Support Section */}
      <div className="md:w-[1170px] container mx-auto py-8 border-b border-w border-[#FF9F0D]">
        <div className="flex px-10 xl:px-0 flex-col md:flex-row justify-between items-center gap-4">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">
              <span className="text-[#FF9F0D]">St</span>ill You Need Our Support
              ?
            </h2>
            <p className="text-[#ffffff] text-[16px]">
              Don't wait make a smart & logical quote here its pretty easy!
            </p>
          </div>
          <div className="flex">
            <Input
              type="email"
              placeholder="Your Email"
              className="bg-[#FF9900] text-[#ffffff] placeholder:text-[#ffffff] border-none min-w-[153px] rounded-none focus:outline-none focus:border-none"
            />
            <Button className="bg-[#ffffff] rounded-none text-[#FF9900]">
              Subscribe now
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Us */}
        <div className="space-y-4">
          <h3 className="text-[24px] font-bold mb-4">About Us</h3>
          <p className="text-[#ffffff] text-sm leading-relaxed w-[280px]">
            orporate clients and leisure travelers has been relying on
            Groundlink for dependab safe, and professional chauffeured car
            service in major cities across World.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="h-12 w-12 text-[#ffffff] p-2 bg-[#FF9900]" />
            <div className="text-[#ffffff] text-[12px]">
              <p>Opening Hours:</p>
              <p>Mon - Sat(8:00 - 6:00)</p>
              <p>Sunday - Closed</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div>
          <h3 className="text-[24px] font-bold mb-4">Useful Links</h3>
          <ul className="space-y-2 text-[#ffffff] leading-[32px]">
            <li>
              <Link href="/about" className="hover:text-[#FF9900]">
                About
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-[#FF9900]">
                News
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-[#FF9900]">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/team" className="hover:text-[#FF9900]">
                Team
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-[#FF9900]">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/contacts" className="hover:text-[#FF9900]">
                Contacts
              </Link>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h3 className="text-[24px] font-bold mb-4">Help?</h3>
          <ul className="space-y-2 text-[#ffffff] leading-[32px]">
            <li>
              <Link href="/faq" className="hover:text-[#FF9900]">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/term-conditions" className="hover:text-[#FF9900]">
                Term & conditions
              </Link>
            </li>
            <li>
              <Link href="/reporting" className="hover:text-[#FF9900]">
                Reporting
              </Link>
            </li>
            <li>
              <Link href="/documentation" className="hover:text-[#FF9900]">
                Documentation
              </Link>
            </li>
            <li>
              <Link href="/support-policy" className="hover:text-[#FF9900]">
                Support Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-[#FF9900]">
                Privacy
              </Link>
            </li>
          </ul>
        </div>

        {/* Recent Posts */}  
        <div>
          <h3 className="text-[24px] font-bold mb-4">Recent Post</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex gap-4">
                <img
                  src="/footerImage.jpeg"
                  alt="Blog thumbnail"
                  width={80}
                  height={80}
                  className="object-cover"
                />
                <div>
                  <Link href="/blog" className="text-sm hover:text-[#FF9900]">
                    Keep Your Business
                  </Link>
                  <p className="text-xs text-gray-400">24 Feb 2022</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className=" w-full md:px-12 py-6 bg-[#4F4F4F]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[#ffffff]">
            Copyright © 2024 by Zain Ul Abedin. All Rights Reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-[#FF9900]">
              <Facebook className="h-6 w-6 bg-white text-black p-1" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF9900]">
              <Twitter className="h-6 w-6 bg-white text-black p-1" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF9900]">
              <Instagram className="h-6 w-6 bg-white text-black p-1" />
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#FF9900]">
              <Youtube className="h-6 w-6 bg-white text-black p-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Plant Image */}
      <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
        <Image
          src="/placeholder.svg"
          alt="Decorative plant"
          width={300}
          height={400}
          className="object-contain"
        />
      </div>
    </footer>
  );
}
