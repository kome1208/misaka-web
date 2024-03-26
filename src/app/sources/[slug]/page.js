import styles from "./page.module.css";
import { TweakCard } from "@/components/TweakCard";

export async function generateMetadata({ params }) {
	const { repo } = await getData(encodeURIComponent(params.slug));
  return {
    title: `Source: ${repo.name} | Misaka Web`,
    openGraph: {
      title: `Source: ${repo.name} | Misaka Web`,
      description: repo.description,
      siteName: "Misaka Web",
      images: [
        {
          url: repo.icon,
          width: 120,
          height: 120
        }
      ],
      type: "website"
    }
  }
}

export default async function Home({ params }) {
	const { repo, tweaks } = await getData(encodeURIComponent(params.slug));
	const tweaks_list = tweaks
	.sort((a, b) => a.name.localeCompare(b.name))
	.map((tweak) =>
		<TweakCard
			icon={tweak.icon}
			author={tweak.author}
			description={tweak.description}
			name={tweak.name}
			version={tweak.package.version}
			packageId={tweak.packageid}
			key={tweak.packageid}
		/>
	)
  return (
    <main>
			<div className={styles.icon_container}>
				<img src={repo.icon} alt="Icon" className={styles.icon}/>
				<div className={styles.gradient_background}></div>
				<div className={styles.name}>{repo.name}</div>
			</div>
			<p className={styles.description}>{repo.description}</p>
			{tweaks_list}
    </main>
  );
}

export async function getData(slug) {
  const response = await fetch(`https://api.kome1.xyz/v2/repos/${slug}?withTweaks=true`);
	const data = await response.json();
	return data;
}