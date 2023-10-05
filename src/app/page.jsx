import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.jpg";

export default function Home() {
	return (
		<div>
			<Image
				width={500}
				height={500}
				src="https://images.pexels.com/photos/1005417/pexels-photo-1005417.jpeg?auto=compress&cs=tinysrgb&w=600"
				alt=""
				className={styles.img}
			/>
		</div>
	);
}
