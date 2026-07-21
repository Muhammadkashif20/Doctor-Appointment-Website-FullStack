import { columns } from "../AppointmentsTable/columns"
import { DataTable } from "../AppointmentsTable/dataTable"
import { doctorAppointments } from "@/lib/Data"

const Appointment = ()=>{
    return(
        <div className="mt-24 mb-8"> 
                <DataTable columns={columns} data={doctorAppointments}/>
        </div>
    )
}
export default Appointment