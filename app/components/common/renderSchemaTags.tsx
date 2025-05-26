import config from "@/app/constants/config";
import React from "react";

// Fill the fields with your own data
const renderSchemaTags = () => {
	return (
		<script
			type="application/ld+json"
			dangerouslySetInnerHTML={{
				__html: JSON.stringify({
					"@context": "http://schema.org",
					"@type": "Person",
					name: "Tuan Anh Hoang",
					url: `https://${config.domainName}`,
					jobTitle: "Fullstack Developer",
					description:
						"Personal portfolio showcasing creative and technical capabilities through an immersive 3D experience",
					image: `${config.domainName}/icon.png`,
					sameAs: [
						"https://github.com/anhht2000",
						"https://www.linkedin.com/in/tuan-anh-hoang-12565b1a5/",
					],
					knowsAbout: [
						"Frontend Development",
						"3D Web Development",
						"React",
						"TypeScript",
						"Next.js",
						"React Three Fiber",
					],
					worksFor: {
						"@type": "Organization",
						name: "Freelance",
					},
					mainEntityOfPage: {
						"@type": "WebPage",
						"@id": `https://${config.domainName}`,
					},
				}),
			}}
		/>
	);
};

export default renderSchemaTags;
