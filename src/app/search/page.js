"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";
import { TweakCard } from "@/components/TweakCard";

export default function Home() {
	const [query, setQuery] = useState("");
	const [results, setResults] = useState([]);
	const [isNotFound, setIsNotFound] = useState(false);
	const [timerId, setTimerId] = useState(null);

	const handleTextInput = (e) => {
    setQuery(e.target.value);
		if (e.target.value.length < 2) {
			return setResults([]);
		};
		if (timerId) {
			clearTimeout(timerId)
		}
    setTimerId(setTimeout(async () => {
      const tweaks = await searchTweak(e.target.value);
			if (!tweaks?.length) {
				setResults([]);
				setIsNotFound(true)
			} else {
				setResults(tweaks);
				setIsNotFound(false);
			};
    }, 1000));
  };

  return (
    <main className={styles.main}>
      <div className="header_view">
        <h1>Search</h1>
			</div>
			<div className={styles.container}>
				<input
					type="text"
					value={query}
					onChange={handleTextInput}
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
  const response = await fetch(`https://kome1.xyz/api/v2/tweaks/search?q=${query}`);
	const data = await response.json();
  return data.tweaks;
}