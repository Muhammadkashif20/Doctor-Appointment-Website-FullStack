import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection/>
      <div className="flex justify-between">
        <h1>Premium Doctor</h1>
        
      </div>
    </div>
  )
}

export default page
