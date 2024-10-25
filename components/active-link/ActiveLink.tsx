"use client"
import Link from "next/link"

import { usePathname } from "next/navigation"

interface Props {
    path: string,
    name: string,
}
const ActiveLink = ({path, name}:Props) => {
  const pathName= usePathname()
  return (
    <Link
    href={path} >{name}</Link>
  )
}

export default ActiveLink