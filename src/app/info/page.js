import Link from "next/link";
import { BsDownload, BsDiscord, BsGithub } from "react-icons/bs";

export default async function Home() {
  return (
    <>
    <h1 className="text-4xl font-bold m-4">Info</h1>
    <h1 className="text-3xl font-bold m-4">Credits</h1>
    <div className="m-4">
        <Link href="https://twitter.com/straight_tamago">
            <div className="bg-white p-4 w-full h-24 flex items-center">
                <img src="https://avatars.githubusercontent.com/u/121408851" alt="Icon" className="w-[3.75rem] h-[3.75rem] rounded-2xl mr-4" />
                <div className="truncate w-full">
                    <h1 className="text-xl font-semibold text-black">straight-tamago</h1>
                    <p className="text-sm text-gray-500">Original App Developer</p>
                </div>
            </div>
        </Link>
        <Link href="https://twitter.com/zs590ks">
            <div className="bg-white p-4 w-full h-24 flex items-center">
                <img src="https://avatars.githubusercontent.com/u/101552871" alt="Icon" className="w-[3.75rem] h-[3.75rem] rounded-2xl mr-4" />
                <div className="truncate w-full">
                    <h1 className="text-xl font-semibold text-black">kome1</h1>
                    <p className="text-sm text-gray-500">This Website Developer</p>
                </div>
            </div>
        </Link>
    </div>
    <h1 className="text-3xl font-bold m-4">Links</h1>
    <div className="m-4">
        <Link href="https://github.com/straight-tamago/misaka/releases/latest">
            <div className="bg-white p-4 w-full h-24 flex items-center">
                <BsDownload size={45} className="mr-4" />
                <div className="truncate w-full">
                    <h1 className="text-xl font-semibold text-black">Download Misaka</h1>
                </div>
            </div>
        </Link>
        <Link href="https://discord.gg/KSExeZVAGX">
            <div className="bg-white p-4 w-full h-24 flex items-center">
                <BsDiscord size={45} className="mr-4" />
                <div className="truncate w-full">
                    <h1 className="text-xl font-semibold text-black">Join Support Server</h1>
                </div>
            </div>
        </Link>
        <Link href="https://github.com/kome1208/misaka-web">
            <div className="bg-white p-4 w-full h-24 flex items-center">
                <BsGithub size={45} className="mr-4" />
                <div className="truncate w-full">
                    <h1 className="text-xl font-semibold text-black">Source Code</h1>
                </div>
            </div>
        </Link>
    </div>
    </>
  )
}