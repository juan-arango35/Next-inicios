"use client"
import Link from "next/link"
import style from "./ActiveLink.module.css"
import { usePathname } from "next/navigation"

interface Props {
    path: string,
    name: string,
}
const ActiveLink = ({path, name}:Props) => {
  
  return (
    <Link 
    href={path} >{name}</Link>
  )
}

export default ActiveLink