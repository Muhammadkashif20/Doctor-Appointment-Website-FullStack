"use client"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2).max(50),
  bio: z.string().min(2).max(110),
  hospital: z.string().min(2).max(50),
  
  
})
