"use client"
import Link from "next/link"


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