import Link from "next/link";

export default function TweakCard({ icon, title, description, author, version, packageId }) {
    return (
    <Link href={"/packages/"+packageId}>
        <div className="flex items-center w-full h-20 p-4">
            <img src={icon} alt="Icon" className="w-14 h-14 rounded-2xl mr-4" />
            <div className="truncate">
                <h1 className="text-base font-semibold text-black">{title}</h1>
                <p className="text-sm text-gray-500">{author} {version}</p>
                <p className="text-xs text-gray-500">{description}</p>
            </div>
        </div>
    </Link>
    );
}