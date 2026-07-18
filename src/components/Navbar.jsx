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

const Navbar = () => {
  const session = null;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-10">
        {/* Logo */}

        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight cursor-pointer select-none">
            Doctor<span className="text-gray-500">.</span>
            <span className="font-light">Appointment</span>
          </h1>
        </Link>

        {/* Right */}

        {session ? (
          <Menubar className="border-none bg-transparent shadow-none">
            <MenubarMenu>
              <MenubarTrigger className="cursor-pointer rounded-full p-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent">
                <Avatar className="h-11 w-11 border-2 border-gray-200 transition hover:border-black">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>
              </MenubarTrigger>

              <MenubarContent align="end" className="w-52 rounded-xl">
                <Link href="/Profile">
                  <MenubarItem className="cursor-pointer">
                    👤 My Profile
                  </MenubarItem>
                </Link>

                <Link href="/Appointment">
                  <MenubarItem className="cursor-pointer">
                    📅 My Appointments
                  </MenubarItem>
                </Link>

                <MenubarSeparator />

                <MenubarItem className="cursor-pointer text-red-600">
                  Logout
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        ) : (
          <Link href="/Signin">
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