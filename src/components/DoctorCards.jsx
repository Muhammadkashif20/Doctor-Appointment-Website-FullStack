import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { doctorsInfoWithPatients, doctorSpecialists } from "@/lib/Data"
import { Button } from "./ui/button";

const DoctorList = ({isHome}) => {
  const filterCards=isHome?doctorsInfoWithPatients.slice(0,6):doctorsInfoWithPatients;
  // {
  //   isHome?
  //   <Button>See All</Button>
  //   :
  // }
  return (
    <div >
    <div  className="flex justify-between px-14">
        <h1 className="font-bold text-3xl  ">Premium Doctor</h1>
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
    </div>
    <div className="flex flex-wrap justify-evenly gap-4 mt-8">
  {filterCards.map((doctor) => {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6  w-full sm:w-1/3 md:w-[24rem] mt-4 ">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">{doctor.name}</h2>
        <p className="text-gray-600"><strong>Appointment Time:</strong> {doctor.appointmentTime}</p>
        <p className="text-gray-600"><strong>Fees:</strong> ${doctor.fees}</p>
        <p className="text-gray-600"><strong>Gender:</strong> {doctor.gender}</p>
        <p className="text-gray-600"><strong>Hospital:</strong> {doctor.hospital}</p>
        <span className="inline-block mt-4 px-3 py-1 bg-blue-500 text-white rounded-full">
          {doctor.categories}
        </span>
      </div>
    )
  })}
</div>


    </div>
  )
}

export default DoctorList
