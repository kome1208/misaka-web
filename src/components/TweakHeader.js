import Link from "next/link";
import styles from "./TweakHeader.module.css";

export default function HeaderCard({ icon, title, packageId }) {
    return (
    <Link href={`/packages?packageId=${packageId}`}>
			<div style={{
				marginRight:16
			}}>
				<div className={styles.header_container}>
					<div className={styles.image_container}>
						<img src={icon} alt="Icon" className={styles.header_image}/>
						<div className={styles.gradient_background}></div>
						<div className={styles.header_title}>{title}</div>
					</div>
				</div>
			</div>
    </Link>
    );
}