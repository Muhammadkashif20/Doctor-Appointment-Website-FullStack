"use client";
import Link from "next/link";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {useState} from "react"
const Navbar = () => {
const [session, setSession] = useState({
  user: {
    name: "Muhammad Kashif",
    email: "kashif@example.com",
    image: "https://github.com/shadcn.png",
  },
});
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}
        <Link href="/">
          <h1 className="select-none text-2xl font-bold tracking-tight">
            Doctor<span className="text-gray-500">.</span>
            <span className="font-light">Appointment</span>
          </h1>
        </Link>

        {/* Right */}
        {session ? (
          <div className="flex items-center gap-4">
            <div className="hidden text-right md:block">
              <p className="text-sm font-semibold">
                {session.user.name}
              </p>
              <p className="text-xs text-gray-500">
                {session.user.email}
              </p>
            </div>

            <Menubar className="border-none bg-transparent shadow-none">
              <MenubarMenu>
                <MenubarTrigger className="cursor-pointer rounded-full p-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                  <Avatar className="h-11 w-11 border-2 border-gray-200 transition hover:border-black">
                    <AvatarImage src={session.user.image} />
                    <AvatarFallback>
                      {session.user.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </MenubarTrigger>

                <MenubarContent align="end" className="w-56 rounded-xl">
                  <div className="px-3 py-2">
                    <p className="font-medium">
                      {session.user.name}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {session.user.email}
                    </p>
                  </div>

                  <MenubarSeparator />
<Link href="/">
  <MenubarItem className="cursor-pointer">
    🏠 Home
  </MenubarItem>
</Link>
                  <Link href="/">
                    <MenubarItem className="cursor-pointer">
                      👤 My Profile
                    </MenubarItem>
                  </Link>

                  <Link href="/user/Appointment">
                    <MenubarItem className="cursor-pointer">
                      📅 My Appointments
                    </MenubarItem>
                  </Link>

                  <Link href="/user/SeeDoctors/ApplyDoctor">
                    <MenubarItem className="cursor-pointer">
                      🩺 Apply as Doctor
                    </MenubarItem>
                  </Link>

                  <MenubarSeparator />

                  <MenubarItem onClick = {()=> setSession(null)} className="cursor-pointer text-red-600">
                    Logout
                  </MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>
        ) : (
          <Link href="/auth/login">
            <Button className="rounded-full bg-black px-6 hover:bg-gray-900">
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;