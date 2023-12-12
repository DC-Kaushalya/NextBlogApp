import React from "react";
import styles from "./page.module.css";
import Button from "@/components/Buttons/Button";
import Image from "next/image";

const Category = ({ params }) => {
	console.log(params);
	return (
		<div className={styles.container}>
			<h1 className={styles.catTitle}>{params.category}</h1>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Creative Portfolio</h1>
					<p className={styles.desc}>
						Lorem ipsum, dolor sit amet consectetur adipisicing
						elit. Ducimus quo totam nobis sint, veniam distinctio
						omnis tenetur. Nemo, exercitationem alias asperiores,
						eius omnis non natus numquam assumenda totam eveniet
						praesentium.
					</p>
					<Button text="See More" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src="https://images.pexels.com/photos/7933505/pexels-photo-7933505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
			</div>
			<div className={styles.item}>
				<div className={styles.content}>
					<h1 className={styles.title}>Minimal Signal Product</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet accusamus fugit magni ipsum est aut quos ex.
						Deleniti nam, asperiores blanditiis delectus
						voluptatibus officia accusamus eum culpa distinctio
						fugit earum.
					</p>
					<Button text="See More" url="#" />
				</div>
				<div className={styles.imgContainer}>
					<Image
						className={styles.img}
						fill={true}
						src="https://images.pexels.com/photos/7933505/pexels-photo-7933505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default Category;
