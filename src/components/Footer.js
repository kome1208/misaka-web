"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsStarFill, BsNewspaper, BsGlobeAmericas, BsSearch } from "react-icons/bs";

export default function Footer() {
    const pathname = usePathname();
    return (
        <nav className="fixed bottom-0 left-0 w-full h-14 bg-white/90">
            <div className="container mx-auto">
                <div className="flex justify-center items-center my-2">
                
                <Link href="/">
                    <div className="flex flex-col items-center w-24" color="#2393fc">
                        <BsStarFill size={24} />
                        <small className="text-xs">Featured</small>
                    </div>
                </Link>

                <Link href="/news">
                    <div className="flex flex-col items-center w-24" color="#2393fc">
                        <BsNewspaper size={24} />
                        <small className="text-xs">News</small>
                    </div>
                </Link>
                
                <Link href="/sources">
                    <div className="flex flex-col items-center w-24" color="#2393fc">
                        <BsGlobeAmericas size={24} />
                        <small className="text-xs">Sources</small>
                    </div>
                </Link>
                
                <Link href="/search">
                    <div className="flex flex-col items-center w-24" color="#2393fc">
                        <BsSearch size={24} />
                        <small className="text-xs">Search</small>
                    </div>
                </Link>
                </div>
            </div>
        </nav>
    );
}