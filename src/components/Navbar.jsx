import {Menubar,MenubarContent,MenubarItem,MenubarMenu,MenubarSeparator,MenubarTrigger,
  } from "@/components/ui/menubar"
const Navbar = () => {
  return (
    <div className='flex justify-between container px-14 p-4  bg-gray-100'> 
    <h1 className="font-mono font-bold text-2xl">Doctor-Appointment  🩺 </h1>
      <Menubar>
  <MenubarMenu>
    <MenubarTrigger>Login</MenubarTrigger>
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
