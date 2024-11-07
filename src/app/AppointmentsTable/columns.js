"use client"
import { ColumnDef } from "@tanstack/react-table"
export const columns= [
  {
    accessorKey: "doctor.name",
    header: "Doctor",
  },
  {
    accessorKey: "user.name",
    header: "Patient",
  },
  {
    accessorKey: "appointment.time",
    header: "Appointment Time",
  }
  , {
    accessorKey: "appointment.date",
    header: "Appointment Date",
  },
  {
    accessorKey: "appointment.  status",
    header: "Appointment Status",
  },
]
