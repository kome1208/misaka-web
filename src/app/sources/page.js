import Link from "next/link";
import styles from "./page.module.css";
import { BsChevronRight } from "react-icons/bs";

export const metadata = {
  title: "Sources | Misaka Web",
  description: "Misaka Web Viewer",
};

export default async function Home() {
	const repos = await getData();

	const repos_list = repos
	.sort((a, b) => a.name.localeCompare(b.name))
	.map((repo) =>
		<Link href={`/sources/${repo.slug}`} key={repo.slug}>
			<div className={styles.repo_container}>
				<img src={repo.icon} alt="Icon" className={styles.icon} />
				<div className={styles.text_container}>
					<div className={styles.name}>{repo.name}</div>
					<div className={styles.description}>{repo.description}</div>
				</div>
				<div className={styles.right_element}>
					<div className={styles.description}>{repo.tweakCount}</div>
					<BsChevronRight size={16} color="rgb(75,75,75)" />
				</div>
			</div>
		</Link>
	);

  return (
    <main className={styles.main}>
      <div className="header_view">
        <h1>Sources</h1>
      </div>
			{repos_list}
    </main>
  );
}

export async function getData() {
  const response = await fetch("https://kome1.xyz/api/v2/repos");
	const data = await response.json();
	return data.repos;
}