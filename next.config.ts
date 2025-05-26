import type { NextConfig } from "next";
import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";

const nextConfig: NextConfig = {
	/* config options here */
	// skip strict mode
	reactStrictMode: false,
	env: {
		googleAnalyticsId:
			process.env.NODE_ENV === "production"
				? process.env.GA_MEASUREMENT_ID
				: "",
	},
};

if (process.env.NODE_ENV === "development") {
	await setupDevPlatform();
}

export default nextConfig;
