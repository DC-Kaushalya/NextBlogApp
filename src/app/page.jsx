import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.jpg";

export default function Home() {
	return (
		<div>
			<Image src={Hero} alt="" className={styles.img} />
		</div>
	);
}
