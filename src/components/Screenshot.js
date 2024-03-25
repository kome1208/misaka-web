import styles from "./Screenshot.module.css";

export default function Screenshot({ file, type }) {
    return (
			<div className={styles.screenshot}>
        {
					type?.startsWith("video") ?
					<video controls className={styles.video}>
						<source src={file} type={type} />
					</video> :
					<img src={file} alt="screenshot" className={styles.image} />
        }
    </div>
    );
}