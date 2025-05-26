"use client";

import CanvasLoader from "./components/common/CanvasLoader";
import renderSchemaTags from "./components/common/renderSchemaTags";
import ScrollWrapper from "./components/common/ScrollWrapper";
import Experience from "./components/experience";
import Footer from "./components/footer";
import Hero from "./components/hero";

const Home = () => {
	return (
		<CanvasLoader>
			<ScrollWrapper>
				<Hero />
				<Experience />
				<Footer />
				{renderSchemaTags()}
			</ScrollWrapper>
		</CanvasLoader>
	);
};
export default Home;
