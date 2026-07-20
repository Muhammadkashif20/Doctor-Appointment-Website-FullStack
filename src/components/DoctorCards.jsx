"use client";
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from "@/components/ui/select"
import { doctorsInfoWithPatients, doctorSpecialists } from "@/lib/Data"
import { Button } from "./ui/button";
import Link from "next/link";
import {useState} from "react"
import {PlusIcon,ClockIcon,CardStackMinusIcon,AvatarIcon} from "@radix-ui/react-icons"
const DoctorList = ({isHome}) => {
  const [selectedSpecialization, setSelectedSpecialization] = useState("all");
  const filterCards=isHome?doctorsInfoWithPatients.slice(0,6):doctorsInfoWithPatients;
  const filteredDoctors =
  selectedSpecialization === "all"
    ? filterCards
    : filterCards.filter(
        (doctor) => doctor.categories === selectedSpecialization
      );
  return (
    <div className="bg-gray-50 py-14">
 <div className="mx-auto flex max-w-7xl items-end justify-between px-6 lg:px-10">
  <div>
    <h1 className="text-3xl font-bold tracking-tight text-black">
      Premium Doctors
    </h1>

    <p className="mt-2 text-gray-500">
      Choose from experienced and trusted healthcare professionals.
    </p>
  </div>
         {
       isHome?
       <Link href={"/SeeDoctors"}>
       <Button>See All</Button>
       </Link>
       :
<Select onValueChange={(value) => setSelectedSpecialization(value)}>
    <SelectTrigger className="w-[180px]"> 
    <SelectValue placeholder="Doctor specialized"/>
  </SelectTrigger>
  <SelectContent>
  <SelectItem value="all">All Doctors</SelectItem>

  {doctorSpecialists.map((data) => (
    <SelectItem key={data} value={data}>
      {data}
    </SelectItem>
  ))}
</SelectContent>
</Select> 
     }
              
    </div>
  <div className="mx-auto mt-10 grid max-w-7xl gap-6 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
  {filteredDoctors.length > 0 ? (
    filteredDoctors.map((doctor) => (
      <div
        key={doctor.id}
        className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[24rem] mt-4"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-3">
          {doctor.name}
        </h2>

        {!isHome && (
          <div>
            <div className="flex items-center gap-2">
              <ClockIcon />
              <p className="text-gray-600">
                <strong>Appointment Time:</strong>{" "}
                {doctor.appointmentTime}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <CardStackMinusIcon />
              <p className="text-gray-600">
                <strong>Fees:</strong> ${doctor.fees}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <AvatarIcon />
              <p className="text-gray-600">
                <strong>Gender:</strong> {doctor.gender}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <PlusIcon />
              <p className="text-gray-600">
                <strong>Hospital:</strong> {doctor.hospital}
              </p>
            </div>
          </div>
        )}

        <div className="flex gap-3">
          <Button variant="outline" className="mt-5">
            {doctor.categories}
          </Button>

          <Link href={`/SeeDoctors/${doctor.id}`}>
            <Button className="mt-5">See Details</Button>
          </Link>
        </div>
      </div>
    ))
  ) : (
    <div className="col-span-full flex flex-col items-center justify-center py-20">
      <h2 className="text-2xl font-bold text-gray-900">
        No Doctors Found
      </h2>

      <p className="mt-2 text-gray-500">
        No doctors are available for the selected specialization.
      </p>
    </div>
  )}
</div>
  </div>
)  
}
export default DoctorList;
