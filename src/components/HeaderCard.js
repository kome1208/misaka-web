import Link from "next/link";

export default function HeaderCard({ icon, title, packageId }) {
    return (
    <Link href={"/packages/"+packageId}>
        <div className="flex justify-center items-center relative rounded-xl w-72 h-44 overflow-hidden">
            <img src={icon} alt="Icon" className="object-cover" />
            <div className="absolute top-0 w-full h-full flex items-center justify-center">
            <div className="absolute bottom-0 bg-gradient-to-t from-black/75 w-full h-1/3 p-4">
                <h1 className="text-xl font-bold text-white/75 truncate">{title}</h1>
            </div>
            </div>
        </div>
    </Link>
    );
}