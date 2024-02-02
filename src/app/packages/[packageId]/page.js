import { notFound } from "next/navigation";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import mime from "mime";
import Screenshot from "@/components/Screenshot";

export async function generateMetadata({ params }) {
  const tweak = await getData(params.packageId);
  return {
    title: `Package: ${tweak.name} | Misaka Web`,
    openGraph: {
      title: `Package: ${tweak.name} | Misaka Web`,
      description: tweak.description,
      siteName: "Misaka Web",
      images: [
        {
          url: tweak.icon,
          width: 120,
          height: 120
        }
      ],
      type: "website"
    }
  }
}

export default async function Home({ params }) {
  const tweak = await getData(params.packageId);
  if (!tweak) return notFound();

  return (
    <>
      <div className="flex justify-center items-center relative overflow-hidden">
        <img src={tweak.banner || tweak.repository.default.HeaderImage} alt="Header" className="h-64 object-cover"/>
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="absolute bottom-0 bg-gradient-to-t from-white w-full h-1/3 p-4" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center w-full h-36">
          <img src={tweak.icon} alt="icon" className="w-28 h-28 rounded-2xl mr-6" />
          <div className="flex flex-col">
            <h1 className="text-black font-semibold text-xl line-clamp-2">{tweak.name}</h1>
            <p className="text-gray-500 text-base line-clamp-2">{tweak.description}</p>
            <Link
              href={`misaka://opentweak=${tweak.repository.link}&${tweak.packageid}`}
              className="bg-blue-500 text-white rounded-lg w-16 h-6 text-center">
              GET
            </Link>
          </div>
        </div>
        <div className="flex items-center overflow-x-auto border-t-2 border-b-2 w-full h-[4.5rem] whitespace-nowrap">
          <div className="flex flex-col items-center px-8">
            <p className="text-gray-500 text-xs font-semibold">AUTHOR</p>
            <h1 className="text-gray-500 text-base font-semibold">{tweak.author}</h1>
          </div>
          <div className="flex flex-col items-center px-8">
            <p className="text-gray-500 text-xs font-semibold">VERSION</p>
            <h1 className="text-gray-500 text-base font-semibold">{tweak.package.version}</h1>
          </div>
          <div className="flex flex-col items-center px-8">
            <p className="text-gray-500 text-xs font-semibold">REQUIRED iOS</p>
            <h1 className="text-gray-500 text-base font-semibold">{tweak.package.compatible?.min} - {tweak.package.compatible?.max}</h1>
          </div>
          <div className="flex flex-col items-center px-8">
            <p className="text-gray-500 text-xs font-semibold">REQUIRED OS</p>
            <h1 className="text-gray-500 text-base font-semibold">{tweak.package.compatible?.os?.length ? tweak.package.compatible?.os?.join(", ") : "iOS"}</h1>
          </div>
          <div className="flex flex-col items-center px-8">
            <p className="text-gray-500 text-xs font-semibold">REQUIRED EXPLOITS</p>
            <h1 className="text-gray-500 text-base font-semibold">{tweak.package.compatible?.exploit?.length ? tweak.package.compatible?.exploit?.join(", ") : "-"}</h1>
          </div>
          <div className="flex flex-col items-center px-8">
            <Link href={`/sources/${tweak.repository.slug}`}>
              <p className="text-gray-500 text-xs font-semibold">REPOSITORY</p>
              <h1 className="text-gray-500 text-base font-semibold">{tweak.repository.name}</h1>
            </Link>
          </div>
        </div> 
        <div className="my-4">
          <Markdown >
            {tweak.caption}
          </Markdown>
        </div>
        <div className="flex overflow-x-auto">
          {tweak.screenshots?.map((file, i) =>
            <div key={i} className="mr-4">
              <Screenshot file={file} type={mime.getType(file.split(".").pop())} />
            </div>
          )}
        </div>
        <p className="flex justify-end pt-4">{tweak.packageid}</p>
      </div>
    </>
  )
}

export async function getData(packageId) {
  const api_response = await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/tweaks/${packageId}`);
  const api_data = await api_response.json();
  
  if (!api_data.tweaks) return false;
  return api_data.tweaks[0];
}