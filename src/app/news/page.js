import AltTweakCard from "@/components/AltTweakCard";

export const metadata = {
  title: "News | Misaka Web",
  description: "misaka for web app",
}

export default async function Home() {
  const { tweaks, lastUpdate } = await getData();
  const list = tweaks.map((tweak) =>
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
      <h1 className="text-4xl font-bold m-4">News</h1>
      <p className="font-semibold text-right m-4">{lastUpdate}</p>
      <div className="m-4">
        {list}
      </div>
    </>
  )
}

export async function getData() {
  const response = await fetch("https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Server/News.json").then((res) => res.json());
  const api_response = await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/tweaks/${response.NewRelease.map((tweak) => tweak.PackageID)}`).then((res) => res.json());

  return {
    tweaks: api_response.tweaks,
    lastUpdate: response.LastUpdate
  };
}