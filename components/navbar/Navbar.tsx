import Link from "next/link";
import { FaHome } from "react-icons/fa";
import ActiveLink from "../active-link/ActiveLink";


const navItems=[
   
    {path:"/about", name:"About"},
    {path:"/contact", name:"Contact"},
    {path:"/profile", name:"Profile"},  
]

const Navbar = () => {
    
  return (
  <nav className="flex bg-blue-700 bg-opacity-30 p-2 m-2">
    <Link href="/" className="flex items-center gap-3">
    <FaHome />
    <span>Home</span>

    </Link>

    <div className="flex flex-1"></div>
    {navItems.map((item)=>(
     
        <ActiveLink key={item.path} path={item.path} name={item.name}/>
        ))}
    
  </nav>
  )
}

export default Navbar