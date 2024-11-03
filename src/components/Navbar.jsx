import {Menubar,MenubarContent,MenubarItem,MenubarMenu,MenubarSeparator,MenubarTrigger,
  } from "@/components/ui/menubar"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
const Navbar = () => {
  return (
    <div className='flex justify-between container px-14 p-4  bg-gray-100'> 
    <h1 className="font-mono font-bold text-2xl">Doctor-Appointment  🩺 </h1>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>
    <Avatar className="bg-transparent border-2 border-gray-300 !shadow-none">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>
    </MenubarTrigger>
    <MenubarContent>
      <MenubarItem>My Profile</MenubarItem>
      <MenubarItem>Appointment</MenubarItem>
      <MenubarSeparator />
      <MenubarItem>Logout</MenubarItem>
      <MenubarSeparator />
    </MenubarContent>
  </MenubarMenu>
</Menubar>
    </div>
  )
}

export default Navbar
