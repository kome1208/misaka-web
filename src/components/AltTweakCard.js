import Link from "next/link";
import { BsChevronRight } from "react-icons/bs"
export default function AltTweakCard({ icon, title, description, author, packageId }) {
    return (
    <Link href={"/packages/"+packageId}>
        <div className="flex items-center w-full h-24 p-4">
            <img src={icon} alt="Icon" className="w-[3.75rem] h-[3.75rem] rounded-2xl mr-4" />
            <div className="truncate w-full">
                <h1 className="text-xl font-semibold text-black">{title}</h1>
                <p className="text-sm text-gray-500">{description}</p>
                <p className="text-gray-500 text-sm text-right">{author}</p>
            </div>
            <BsChevronRight size={20} color="#87a6db" className="ml-auto" />
        </div>
    </Link>
    );
}