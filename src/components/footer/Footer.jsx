import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
	console.log("Hello");
	return (
		<div className={styles.container}>
			<div>2023 DC-Kaushalya. All rights reserved</div>
			<div className={styles.social}>
				<Image
					src="/facebook.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="DC-Kaushalya facebook"
				/>
				<Image
					src="/youtube.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="DC-Kaushalya youtube"
				/>
				<Image
					src="/instagram.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="DC-Kaushalya instagram"
				/>
				<Image
					src="/gmail.png"
					width={15}
					height={15}
					className={styles.icon}
					alt="DC-Kaushalya gmail"
				/>
			</div>
		</div>
	);
};

export default Footer;
