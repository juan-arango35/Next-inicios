import { Metadata } from "next"

export const metadata: Metadata={
    title: "pagína sobre el about",
    description: "descripción del about",

}

const AbaoutPage = () => {
  return (
    <div className=" flex flex-col items-center p-24">
        <span className="text-lg">Hola mundo desde about</span>
        <span className="text-7xl">página de about</span>

    </div>
  )
}

export default AbaoutPage
