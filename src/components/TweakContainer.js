import Link from "next/link";
import { BsChevronRight } from "react-icons/bs"
import styles from "./TweakContainer.module.css";

export default function TweakContainer({ icon, title, description, author, packageId }) {
	return (
		<Link href={`/packages?packageId=${packageId}`}>
			<div className={styles.container}>
				<img src={icon} alt="Icon" className={styles.image} />
				<div className={styles.text_container}>
					<div className={styles.title}>{title}</div>
					<div className={styles.description}>{description}</div>
					<div className={styles.author}>{author}</div>
				</div>
				<BsChevronRight size={20} color="#87a6db" className={styles.icon}/>
			</div>
		</Link>
	);
}