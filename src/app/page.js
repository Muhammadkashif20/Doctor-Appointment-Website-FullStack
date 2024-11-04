import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import DoctorList from "@/components/DoctorCards";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
      <HeroSection/>
      <DoctorList/>
    </div>
  )
}

export default page
