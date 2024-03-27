import Link from "next/link";
import styles from "./page.module.css";
import { BsDiscord, BsDownload, BsGithub } from "react-icons/bs";

export default async function Home() {

  return (
    <main className={styles.main}>
      <div className="header_view">
        <h1>Info</h1>
      </div>
			<div className="header_view">
        <h1>Credits</h1>
      </div>
			<LinkView
				icon="https://avatars.githubusercontent.com/u/121408851?v=4"
				name="straight-tamago"
				description="Original App Developer"
				link="https://twitter.com/straight_tamago"
			/>
			<LinkView
				icon="https://avatars.githubusercontent.com/u/101552871?v=4"
				name="kome1"
				description="This Website Developer"
				link="https://twitter.com/ZS590KS"
			/>
			<div className="header_view">
        <h1>Links</h1>
      </div>
			<LinkView
				icon={<BsGithub className={styles.bsicon} />}
				name="Source Code"
				description="source code is here"
				link="https://github.com/kome1208/misaka-web"
				type="link"
			/>
			<LinkView
				icon={<BsDownload className={styles.bsicon} />}
				name="Download App"
				description="download original app"
				link="https://github.com/straight-tamago/misaka/releases/latest"
				type="link"
			/>
			<LinkView
				icon={<BsDiscord className={styles.bsicon} />}
				name="Discord"
				description="join our support server"
				link="https://discord.gg/KSExeZVAGX"
				type="link"
			/>
    </main>
  );
}

export function LinkView({icon, name, description, link, type}) {
	return (
		<Link href={link}>
			<div className={styles.author_view}>
				{type === "link" ? icon : <img src={icon} alt="Icon" className={styles.icon} />}
				<div>
					<div className={styles.name}>{name}</div>
					<div className={styles.description}>{description}</div>
				</div>
			</div>
		</Link>
	)
}