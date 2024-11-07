import { columns } from "../AppointmentsTable/columns"
import { DataTable } from "../AppointmentsTable/dataTable"
import { doctorAppointments } from "@/lib/Data"

 function Appointment() {
    return(
        <div>
    
            <h1 className="text-center font-semibold text-3xl my-5">Hello Appointment</h1>
            <DataTable columns={columns} data={doctorAppointments}/>
        </div>
    )
}
export default Appointment