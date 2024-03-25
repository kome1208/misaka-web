"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { TweakCard } from "@/components/TweakCard";

export default function Home() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isNotFound, setIsNotFound] = useState(false);

	useEffect(() => {
		setTimeout(async () => {
		  const tweaks = await searchTweak(query);
			if (!tweaks.length) {
				setResults([]);
				setIsNotFound(true)
			} else {
				setResults(tweaks);
				setIsNotFound(false);
			};
		}, 1000);
	}, [query]);

  return (
    <main className={styles.main}>
      <div className="header_view">
        <h1>Search</h1>
			</div>
			<div className={styles.container}>
				<input
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search"
					className={styles.text_input}
				/>
			</div>
			{results?.length > 0 &&
				results.map((tweak) =>
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
			}
			{isNotFound &&
				<p style={{
					padding:16
				}}>not found</p>
			}
    </main>
  );
}

export async function searchTweak(query) {
  const response = await fetch(`https://misaka-search-api.onrender.com/api/v2/tweaks/search?q=${query}`);
	const data = await response.json();
  return data.tweaks;
}