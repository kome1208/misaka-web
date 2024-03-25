import TweakContainer from "@/components/TweakContainer";
import styles from "./page.module.css";

export const metadata = {
  title: "News | Misaka Web",
  description: "Misaka Web Viewer",
};

export default async function Home() {
	const { tweaks, lastUpdate } = await getData();
	const tweaks_list = tweaks.map((tweak) =>
    <TweakContainer key={tweak.packageid}
    icon={tweak.icon}
    title={tweak.name}
    description={tweak.description}
    author={tweak.author}
    packageId={tweak.packageid}
    />
  );
  return (
    <main className={styles.main}>
      <div className="header_view">
        <h1>News</h1>
				<h4>{lastUpdate}</h4>
      </div>
			{tweaks_list}
    </main>
  );
}

export async function getData() {
  const response = await fetch("https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Server/News.json").then((res) => res.json());
  const api_response = await fetch(`https://misaka-search-api.onrender.com/api/v2/tweaks/${response.NewRelease.map((tweak) => tweak.PackageID)}`).then((res) => res.json());

  return {
    tweaks: api_response.tweaks,
    lastUpdate: response.LastUpdate
  };
}