import { notFound } from "next/navigation";
import styles from "./page.module.css";
import Link from "next/link";
import Markdown from "markdown-to-jsx";
import mime from "mime";
import Screenshot from "@/components/Screenshot";

export async function generateMetadata({ searchParams }) {
  const { packageId } = searchParams;
	const tweak = await getData(encodeURIComponent(packageId));
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

export default async function Home({ searchParams }) {
	const { packageId } = searchParams
	const tweak = await getData(encodeURIComponent(packageId));
	if (!tweak) notFound();
  return (
    <main>
			<div className={styles.banner_container}>
				<img src={tweak.banner || tweak.repository.default.HeaderImage} alt="Banner" className={styles.banner_image}/>
				<div className={styles.gradient_background}></div>
			</div>
			<div className={styles.container}>
				<img src={tweak.icon} alt="Icon" className={styles.icon}/>
				<div>
					<div className={styles.tweak_name}>{tweak.name}</div>
					<div className={styles.description}>{tweak.description}</div>
					<div style={{
						marginTop:4,
					}}>
						<Link
							className={styles.get_button}
							href={`misaka://opentweak=${tweak.repository.link}&${tweak.packageid}`}>
							GET
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.tweak_info}>
				<InfoView name="AUTHOR" value={tweak.author} />
				<InfoView name="VERSION" value={tweak.package.version} />
				<InfoView name="REQUIRED iOS" value={`${tweak.package.compatible?.min} - ${tweak.package.compatible?.max}`} />
				<InfoView name="REQUIRED OS" value={tweak.package.compatible?.os?.length ? tweak.package.compatible?.os?.join(", ") : "iOS"} />
				<InfoView name="REQUIRED EXPLOITS" value={tweak.package.compatible?.exploit?.length ? tweak.package.compatible?.exploit?.join(", ") : "-"} />
				<Link href={`/sources?slug=${tweak.repository.slug}`}>
					<InfoView name="REPOSITORY" value={tweak.repository.name} />
				</Link>
			</div>
			<div className={styles.full_description}>
				<Markdown>
					{tweak.caption}
				</Markdown>
			</div>
			<div className={styles.screenshots_container}>
				{tweak.screenshots?.map((file, i) =>
					<div key={i} className={styles.screenshot}>
						<Screenshot file={file} type={mime.getType(file.split(".").pop())} />
					</div>
				)}
			</div>
			<p className={styles.packageid}>{tweak.packageid}</p>
    </main>
  );
}

export async function getData(packageId) {
  const response = await fetch(`https://misaka-search-api.onrender.com/api/v2/tweaks/${packageId}`);
	const data = await response.json();
  if (!data.count) {
		return false
	} else {
		return data.tweaks[0];
	}
}

export function InfoView({name, value}) {
	return (
		<div className={styles.info}>
			<p className={styles.info_title}>{name}</p>
			<p className={styles.info_value}>{value}</p>
		</div>
	)
}