"use client";
import TweakCard from "@/components/TweakCard";

const { useState } = require("react");

export default function Home() {
    const [ query, setQuery ] = useState("");
    const [ results, setResults ] = useState([]);
    const isSearchable = !query.trim() ? false : true;
    const handleSearch = async () => {
        const data = await getData(query);
        if (!data) return alert("tweak not found");
        setResults(data);
    }
    const handleEnter = (e) => {
        if (e.key === 'Enter' && isSearchable) {
            handleSearch();
        }
    };
    const list = results.map((tweak) => (
        <TweakCard key={tweak.packageid}
            icon={tweak.icon}
            title={tweak.name}
            description={tweak.description}
            author={tweak?.author || tweak.repository.default.Author.Label}
            version={tweak.package.version}
            packageId={tweak.packageid}
        />
    ))
    return (
        <>
        <h1 className="text-4xl font-bold m-4">Search</h1>
        <div className="m-4 flex">
            <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Search tweaks..."
            className="border border-gray-300 rounded-lg px-4 py-2 w-full"
            />
            <button
            onClick={handleSearch}
            disabled={!isSearchable}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg ml-2"
            >
            Search
            </button>
        </div>
        {list}
        </>
      )
}

export async function getData(query) {
    const api_response = await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/tweaks/search?q=${query}`);
    const api_data = await api_response.json();
    
    if (!api_data.count) return false;
    return api_data.tweaks;
}