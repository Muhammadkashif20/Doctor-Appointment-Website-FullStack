import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import DoctorList from "@/components/DoctorCards";
import Image from "next/image";

const page = () => {
  return (
    <div className="min-h-screen">
      <HeroSection/>
      <DoctorList isHome={true}/>
    </div>
  )
}

export default page
