import TweakCard from "@/components/TweakCard";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { repo } = await getData(params.slug);
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
  const { repo, tweaks } = await getData(params.slug);
  if (!repo) return notFound();

  const list = tweaks
  .sort((a, b) => a.name.localeCompare(b.name))
  .map((content) =>
    <TweakCard key={content.packageid}
      icon={content.icon}
      title={content.name}
      description={content.description}
      author={content?.author || repo.default.Author.Label}
      version={content.package.version}
      packageId={content.packageid}
    />
  )
  return (
    <div className="h-screen">
      <div className="flex items-center justify-center h-1/2 relative overflow-hidden">
        <img src={repo.icon} alt="Repository Icon" className="h-full w-full object-cover"/>
        <div className="absolute top-0 w-full h-full flex items-center justify-center">
          <div className="absolute bottom-0 bg-gradient-to-t from-white w-full h-1/5 p-4">
            <h1 className="text-4xl font-bold text-black text-ellipsis line-clamp-2">{repo.name}</h1>
          </div>
        </div>
      </div>
      <p className="text-xl font-bold text-black pt-6 px-4">{repo.description}</p>
      {list}
    </div>
  )
}

export async function getData(slug) {
  const api_response = await fetch(`https://misaka-search-ydkr.koyeb.app/api/v2/repos/${slug}?withTweaks=true`);
  const api_data = await api_response.json();
  
  if (!api_data.repo) return false;

  return api_data;
}