"use client"
import { ColumnDef } from "@tanstack/react-table"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
export const columns= [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
    accessorKey: "appointment.status",
    header: "Appointment Status",
  },
]
