import styles from "./page.module.css";
import TweakHeader from '@/components/TweakHeader';
import TweakContainer from '@/components/TweakContainer';
import Link from "next/link";

export default async function Home() {
  const { headerTweaks, popularTweaks } = await getFeaturedTweaks();
  const headers = headerTweaks.tweaks.map((tweak) =>
    <TweakHeader
      icon={tweak.icon}
      title={tweak.name}
      packageId={tweak.packageid}
      key={tweak.packageid}
    />
  );

  const populars = popularTweaks.tweaks.map((tweak) =>
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
        <h1>Featured</h1>
      </div>
      <div className={styles.h_scroll_container}>
        {headers}
      </div>
      <div className="header_view">
        <h1>Popular</h1>
      </div>
      {populars}
      <div className={styles.bottom_text}>
        <p>misaka web</p>
        <Link className={styles.website_info} href="/info">website info</Link>
      </div>
    </main>
  );
}

export async function getFeaturedTweaks() {
  const response = await fetch("https://raw.githubusercontent.com/shimajiron/Misaka_Network/main/Server/Featured.json").then((res) => res.json());
  const headerTweaks = await fetch(`https://api.kome1.xyz/v2/tweaks/${response.Header.map(((tweak) => tweak.PackageID))}`).then((res) => res.json());
  const popularTweaks= await fetch(`https://api.kome1.xyz/v2/tweaks/${response.Popular.map(((tweak) => tweak.PackageID))}`).then((res) => res.json());
  return {
    headerTweaks,
    popularTweaks
  };
}