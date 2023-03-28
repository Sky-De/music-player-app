import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RiCloseLine } from "react-icons/ri";
// change logo--fixIt
import { logo } from "../assets";
import { links } from "../assets/constants";
import { HiOutlineMenu } from "react-icons/hi";

const NavLinks = () => (
  <div className="mt-10 px-3">
    {links.map((item) => (
      <NavLink
       to={item.to}
       end
       key={item.name}
       className="flex flex-row justify-start items-center my-8 text-sm 
       font-medium text-gray-400 hover:text-cyan-400">
        <item.icon className="w-6 h-6 mr-2"/>
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
    <div className="md:flex hidden flex-col w-[240px] py-4 bg-[#191624] select-none">
      <div className="flex flex-col justify-around items-center">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <h6 className="text-white gradiant-text">Online Music Player</h6>
      </div>
      <NavLinks/>
    </div>

    <div className="absolute md:hidden block top-6 right-3 z-10 select-none">
      {mobileMenuOpen ? 
      <RiCloseLine onClick={() => setMobileMenuOpen(false)} className="w-8 h-8 text-white mr-2"/> :
      <HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className="w-8 h-8 text-white mr-2"/>}
    </div>
    <div 
    className={`absolute top-0 h-screen w-1/2 
    bg-gradient-to-tl from-white/10 to-[#483D8B] 
    backdrop-blur-lg z-10 p-6 md:hidden smooth-transition 
    ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
      <img src={logo} alt="logo" className="w-full h-14 object-contain" />
      <NavLinks/>
    </div>
    </>
  )
}
  
  
;

export default Sidebar;
