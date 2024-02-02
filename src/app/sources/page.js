import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

export const metadata = {
  title: "Sources | Misaka Web",
  description: "misaka for web app",
}

export default async function Home() {
  const repo = await getData();

  const list = repo
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((repo) =>
    <Link href={`/sources/${repo.slug}`} key={repo.slug}>
        <div className="flex items-center w-full h-20 border-t-2 p-4">
            <img src={repo.icon} alt="Icon" className="w-11 h-11 rounded-xl mr-4" />
            <div className="truncate">
                <h1 className="text-base font-semibold text-black">{repo.name}</h1>
                <p className="text-sm text-gray-500">{repo.description}</p>
            </div>
            <div className="flex items-center ml-auto">
              <p className="text-sm text-gray-500">{repo.tweakCount}</p>
              <BsChevronRight size={15} color="#9ca3af"/>
            </div>
        </div>
    </Link>
  )
  return (
    <>
    <h1 className="text-4xl font-bold m-4">Sources</h1>
    <div >
      {list}
    </div>
    </>
  )
}

export async function getData() {
  const api_response = await fetch("https://misaka-search-ydkr.koyeb.app/api/v2/repos/");
  const api_data = await api_response.json();

  return api_data.repos;
}