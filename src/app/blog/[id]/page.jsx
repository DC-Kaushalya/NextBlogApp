import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
	return (
		<div className={styles.container}>
			<div className={styles.top}>
				<div className={styles.info}>
					<h1 className={styles.title}>title</h1>
					<p className={styles.desc}>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Illo, dicta magnam incidunt velit debitis vero
						eveniet distinctio facere temporibus obcaecati nobis
						suscipit aperiam voluptatem eligendi hic aut vitae,
						nesciunt nihil.
					</p>
					<div className={styles.author}>
						<Image
							src="https://images.pexels.com/photos/7933505/pexels-photo-7933505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
							alt=""
							width={40}
							height={40}
							className={styles.avatar}
						/>
						<span className={styles.username}>User</span>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image
						src="https://images.pexels.com/photos/7933505/pexels-photo-7933505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
						alt=""
						fill={true}
						className={styles.image}
					/>
				</div>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Neque sint dolorum, aut perspiciatis debitis, enim
					consequatur modi molestiae excepturi cupiditate mollitia
					minus provident nemo fugiat culpa aliquid illo eaque
					voluptatum.
				</p>
			</div>
		</div>
	);
};

export default BlogPost;
