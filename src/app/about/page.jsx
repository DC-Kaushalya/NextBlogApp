import React from "react";

import Button from "@/components/Buttons/Button";
import styles from "./page.module.css";
import Image from "next/image";

const About = () => {
	return (
		<div className={styles.container}>
			<div className={styles.imgContainer}>
				<Image
					src="https://images.pexels.com/photos/7933505/pexels-photo-7933505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
					fill={true}
					alt=""
					className={styles.img}
				/>
				<div className={styles.imgText}>
					<h1 className={styles.imgTittle}>Digital Storytellers</h1>
					<h1 className={styles.imgDesc}>
						Handcrafting award winning digtal experience
					</h1>
				</div>
			</div>
			<div className={styles.textContainer}>
				<div className={styles.item}>
					<h1 className={styles.title}>Who Are We?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus cupiditate aut, fugit blanditiis culpa, cum in
						rerum deleniti non aspernatur nobis exercitationem.
						Consectetur accusantium doloremque atque perferendis
						sunt, ducimus impedit!
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</p>
				</div>
				<div className={styles.item}>
					<h1 className={styles.title}>What We Do?</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Delectus cupiditate aut, fugit blanditiis culpa, cum in
						rerum deleniti non aspernatur nobis exercitationem.
						Consectetur accusantium doloremque atque perferendis
						sunt, ducimus impedit!
						<br />
						<br />
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<br />
						<br></br>
						-Lorem ipsum adipisicing elit.
						<br />
						-Lorem ipsum adipisicing elit.
						<br />
						-Lorem ipsum adipisicing elit.
					</p>
					<Button url="/contact" text="contact" />
				</div>
			</div>
		</div>
	);
};

export default About;
