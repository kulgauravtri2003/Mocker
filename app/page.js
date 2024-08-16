"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  // Set your background image URL here
  const backgroundImageUrl = "https://wallpapers.com/images/hd/zoom-interview-background-mhplywljoj4jd2kq.jpg";

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImageUrl})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Welcome to AI Mock Interviews
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto">
          Prepare for your next job interview with confidence using our AI-driven platform.
        </p>

        {/* Motivational Quote Placeholder */}
        <p className="italic text-xl max-w-xl mx-auto">
          Empower yourself with practice and get ready to excel!
        </p>

        {/* Get Started Button */}
        <Button 
          onClick={handleClick} 
          className="px-8 py-4 text-lg font-semibold rounded-full shadow-lg bg-blue-600 hover:bg-blue-700 transition-all"
        >
          Let's Get Started
        </Button>
      </div>

      {/* Footer */}
      <div className="absolute bottom-8 text-center text-sm text-gray-300">
        <p>© 2024 AI Mock Interview. All rights reserved.</p>
      </div>
    </div>
  );
}
