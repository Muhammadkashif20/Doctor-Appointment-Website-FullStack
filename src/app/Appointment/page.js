import { columns } from "../AppointmentsTable/columns"
import { DataTable } from "../AppointmentsTable/dataTable"
import { doctorAppointments } from "@/lib/Data"

 function Appointment() {
    return(
        <div className="mt-10 "> 
                <DataTable columns={columns} data={doctorAppointments}/>
        </div>
    )
}
export default Appointment