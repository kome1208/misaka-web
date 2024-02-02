import AltTweakCard from "@/components/AltTweakCard";
import HeaderCard from "@/components/HeaderCard";
import Link from "next/link";

export default async function Home() {
  const { headerTweaks, popularTweaks } = await getHeaders();
  const headers = headerTweaks.tweaks.map((tweak) =>
    <div key={tweak.packageid} className="mr-4">
      <HeaderCard
      icon={tweak.icon}
      packageId={tweak.packageid}
      title={tweak.name}
      />
    </div>
  );

  const populars = popularTweaks.tweaks.map((tweak) =>
    <AltTweakCard key={tweak.packageid}
    icon={tweak.icon}
    title={tweak.name}
    description={tweak.description}
    author={tweak.author}
    packageId={tweak.packageid}
    />
  );

  return (
    <>
    <h1 className="text-4xl font-bold m-4">Featured</h1>
    <div className="flex overflow-x-auto ml-8 mt-8">
      {headers}
    </div>
    <h1 className="text-3xl font-bold m-4">Popular</h1>
    <div className="m-4">
      {populars}
    </div>
    <div className="text-center">
      <h1 className="text-xl font-bold">Misaka Web</h1>
      <Link href="/info">
        <p className="text-blue-500">website info</p>
      </Link>
    </div>
    </>
  )
}

export async function getHeaders() {
  const response = await fetch("https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Server/Featured.json").then((res) => res.json());
  const headerTweaks = await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/tweaks/${response.Header.map(((tweak) => tweak.PackageID))}`).then((res) => res.json());
  const popularTweaks= await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/tweaks/${response.Popular.map(((tweak) => tweak.PackageID))}`).then((res) => res.json());
  return {
    headerTweaks,
    popularTweaks
  };
}