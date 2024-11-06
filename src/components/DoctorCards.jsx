import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { doctorsInfoWithPatients, doctorSpecialists } from "@/lib/Data"
import { Button } from "./ui/button";
import Link from "next/link";
import {PlusIcon,ClockIcon,CardStackMinusIcon,AvatarIcon} from "@radix-ui/react-icons"
const DoctorList = ({isHome}) => {
  const filterCards=isHome?doctorsInfoWithPatients.slice(0,6):doctorsInfoWithPatients;
 
  return (
    <div >
    <div  className="flex justify-between px-14">
        <h1 className="font-bold text-3xl  ">Premium Doctor</h1>
         {
       isHome?
       <Link href={"/SeeDoctors"}>
       <Button>See All</Button>
       </Link>
       :
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Doctor specialized"/>
  </SelectTrigger>
  <SelectContent>
    {doctorSpecialists.map((data)=>{
      return(
        
        <SelectItem key={data} value={data}>{data}</SelectItem>
      ) 
    })}
 
  </SelectContent>
</Select> 
     }
              
    </div>
    <div className="flex flex-wrap justify-evenly gap-4 mt-8 mb-10">
  {filterCards.map((doctor) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6  w-full sm:w-1/3 md:w-[24rem] mt-4 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{doctor.name}</h2>
        <div className="flex items-center gap-2">
        <ClockIcon/>
        <p className="text-gray-600 "><strong>Appointment Time:</strong> {doctor.appointmentTime}</p>
        </div>
        <div className="flex items-center gap-2">
          <CardStackMinusIcon/>
        <p className="text-gray-600"><strong>Fees:</strong> ${doctor.fees}</p>
        </div>
        <div className="flex items-center gap-2">
        <AvatarIcon/>
        <p className="text-gray-600"><strong>Gender:</strong> {doctor.gender}</p>
        </div>
        <div className="flex items-center gap-2">
        <PlusIcon/>
        <p className="text-gray-600"><strong>Hospital:</strong> {doctor.hospital}</p>
</div>
        <div className="flex gap-3">
          <Button variant='outline' className="mt-5">

          {doctor.categories}
          </Button>
          <Button className="mt-5 ">Book Appointment</Button>
        </div>
      </div>
    )
  })}
</div>


    </div>
  )
}

export default DoctorList
