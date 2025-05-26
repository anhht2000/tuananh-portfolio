import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const soriaFont = localFont({
	src: "../public/soria-font.ttf",
	variable: "--font-soria",
});

const vercettiFont = localFont({
	src: "../public/Vercetti-Regular.woff",
	variable: "--font-vercetti",
});

export const metadata: Metadata = {
	title: "Tuan Anh Hoang - Fullstack Developer Portfolio",
	description:
		"A fullstack developer by profession, a creative at heart. Specializing in Vue.js, React, Next.js, and modern web technologies.",
	keywords:
		"Tuan Anh Hoang, Fullstack Developer, Vuejs, React, Nextjs, Three.js, Creative Developer, Web Development, Angular, JavaScript, TypeScript, Portfolio, Frontend Developer, Backend Developer",
	authors: [{ name: "Tuan Anh Hoang" }],
	creator: "Tuan Anh Hoang",
	publisher: "Tuan Anh Hoang",
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-image-preview": "large",
			"max-snippet": -1,
			"max-video-preview": -1,
		},
	},
	openGraph: {
		title: "Tuan Anh Hoang - Fullstack Developer Portfolio",
		description:
			"Fullstack developer by profession, creative at heart. Specializing in Vue.js, React, Next.js, and modern web technologies.",
		url: "https://tuananhhoang.com",
		siteName: "Tuan Anh Hoang's Portfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tuan Anh Hoang - Fullstack Developer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Tuan Anh Hoang - Fullstack Developer Portfolio",
		description:
			"Fullstack developer by profession, creative at heart. Specializing in Vue.js, React, Next.js, and modern web technologies.",
		images: ["/og-image.jpg"],
		creator: "@clevirli",
	},
	verification: {
		google: "GsRYY-ivL0F_VKkfs5KAeToliqz0gCrRAJKKmFkAxBA",
	},
	alternates: {
		canonical: "https://tuananhhoang.com",
	},
	metadataBase: new URL("https://tuananhhoang.com"),
};

export const viewport: Viewport = {
	themeColor: "#000000",
	initialScale: 1,
	minimumScale: 1,
	maximumScale: 1,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="overscroll-y-none">
			<body
				className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
			>
				{children}
			</body>
			<GoogleAnalytics gaId={"G-7WD4HM3XRE"} />
		</html>
	);
}
