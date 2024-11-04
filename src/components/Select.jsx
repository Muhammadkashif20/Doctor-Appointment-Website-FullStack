import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  const doctorSpecialists = ["Cardiologist","Dermatologist","Neurologist","Orthopedic Surgeon","Pediatrician","Psychiatrist","Ophthalmologist","Gynecologist","Oncologist","Dentist","General Practitioner","Endocrinologist","Gastroenterologist","Urologist","Pulmonologist"
];
const DoctorList = () => {
  return (
    <div  className="flex justify-between px-14">
        <h1 className="font-bold text-3xl  ">Premium Doctor</h1>
              <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Doctor specialized"/>
  </SelectTrigger>
  <SelectContent>
    {doctorSpecialists.map((data)=>{
        return(
            <SelectItem value={data}>{data}</SelectItem>
        ) 
    })}
 
  </SelectContent>
</Select>

    </div>
  )
}

export default DoctorList
