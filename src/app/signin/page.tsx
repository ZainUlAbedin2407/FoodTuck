"use client";

import { Mail, User,Lock } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SignIn() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center p-[150px] min-h-screen bg-[#f5f5f5]">
      <div className="bg-white p-8  shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-[#333] mb-8">Sign Up</h1>
        <form className="space-y-4">
          {/* Email Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#4F4F4F]">
              <Mail className="w-5 h-5" />
            </span>
            <input
              type="email"
              placeholder="Email"
              className="w-full px-10 border placeholder:text-[#4F4F4F] py-2 text-[border focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
          </div>
          {/* Password Field */}
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#4F4F4F]">
              <Lock className="w-5 h-5"/>
            </span>
            <input
              type="password"
              placeholder="Password"
              className="w-full px-10 py-2 border placeholder:text-[#4F4F4F] focus:outline-none focus:ring-2 focus:ring-[#FF9F0D]"
            />
          </div>
          {/* Remember Me Checkbox */}
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="mr-2 focus:ring-2 focus:ring-[#FF9F0D]"
            />
            <label htmlFor="remember" className="text-sm text-[#4f4f4f]">
              Remember me?
            </label>
          </div>
          {/* Sign Up Button */}
          <div>
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full bg-[#FF9F0D] text-white py-2 shadow-md hover:bg-[#FF7F00] transition-all"
            >
              Sign In
            </button>
          </div>
        </form>
        {/* Forgot Password */}
        <div className="text-right mt-4">
          <a href="#" className="text-sm text-[#828282] hover:underline">
            Forgot password?
          </a>
        </div>
        {/* OR Separator */}
        <div className="flex items-center my-4">
          <div className="h-px bg-gray-300 flex-1"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1"></div>
        </div>
        {/* Google and Apple Sign Up */}
        <div className="space-y-2">
          <button className="w-full flex items-center border justify-center text-[#1E1E1E] bg-transparent  py-2">
            <img
              src="/google.png"
              alt="Google Icon"
              className="h-5 w-5 mr-2"
            />
            Sign up with Google
          </button>
          <button className="w-full flex items-center border justify-center text-[#1E1E1E] bg-transparent  py-2">
            <img
              src="/apple.png"
              alt="Apple Icon"
              className="h-5 w-5 mr-2"
            />
            Sign up with Apple
          </button>
        </div>
      </div>
    </div>
  );
}

