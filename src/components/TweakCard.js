import Link from "next/link";
import styles from "./TweakCard.module.css";

export function TweakCard({icon, name, description, author, version, packageId}) {
	return (
		<Link href={`/packages/?packageId=${packageId}`}>
			<div className={styles.tweak_container}>
				<img src={icon} alt="TweakIcon" className={styles.tweak_icon}/>
				<div className={styles.text_container}>
					<div className={styles.tweak_name}>{name}</div>
					<div className={styles.tweak_author}>{author} {version}</div>
					<div className={styles.tweak_description}>{description}</div>
				</div>
			</div>
		</Link>
	)
}