import Button from "@/components/Buttons/Button";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Image from "next/image";

export default function Home() {
	return (
		<div className={styles.container}>
			<div className={styles.item}>
				<h1 className={styles.title}>
					Better design for your digital products
				</h1>
				<p className={styles.desc}>
					Turning your Idea into Reality. We bring together the team
					from the global graphic industry.
				</p>
				<Button url="/portfolio" text="See our Works" />
			</div>
			<div className={styles.item}></div>
			<Image src={Hero} alt="" className={styles.img} />
		</div>
	);
}
