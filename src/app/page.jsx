import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.jpg";

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
				<button className={styles.button}>See our Works</button>
			</div>
			<div className={styles.item}></div>
			<Image src={Hero} alt="" className={styles.img} />
		</div>
	);
}
