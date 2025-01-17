import Image from "next/image"

export default function Header() {
    return(
        <header className="bg-[#F2CF1D] h-[90vh]  md:h-96 w-full flex flex-row">
            <div className="flex-1 flex flex-col items-end justify-center pr-5 gap-5">
                <div>Bibliioteca</div>
                <div>Comunidade</div>
                <div>Blog</div>
            </div>
            <Image src="bee.svg" className="w-[12%]" height={100} width={100} alt="black bee"/>
            <div className="flex-1 flex flex-col items-start justify-center pl-5 gap-5">
                <div  className="">Bibliioteca</div>
                <div >Comunidade</div>
                <div >Blog</div>
            </div>
        </header>
    )
}2