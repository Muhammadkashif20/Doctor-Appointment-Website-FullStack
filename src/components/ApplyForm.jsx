"use client"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(110),
  hospital: z.string().min(2).max(50),
  fees: z.string().min(2).max(50),
  degree: z.string().min(2).max(50),
  degree: z.string().min(2).max(50),
  degree: z.string(),
  gender: z.string(),
  experiance: z.string(),
  specialization: z.string(),
  appointmentTime: z.date(),
  profileImage:z.string(),
  contact:z.string(),
  email:z.string(),
  address:z.string(),
})
export function ProfileForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    })
}

function onSubmit(values) { 
    console.log(values)
  }
