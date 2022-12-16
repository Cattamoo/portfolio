import Title from "./pages/Title";
import Introduce from "./pages/Introduce";
import Skill from "./pages/Skill";
import Portfolio from "./pages/Portfolio";
import ContactMe from "./pages/ContactMe";
import OnePageScroller from "./components/OnePageScroller";
import {useState} from "react";
import {PortfolioFilterProvider} from "./context/PortfolioFilterContext";

export default function App() {
	const [page, setPage] = useState(0);
	return (
		<OnePageScroller page={page} setPage={(newPage) => setPage(newPage)}>
			<Title />
			<Introduce />
			<Skill />
			<PortfolioFilterProvider>
			<Portfolio />
			</PortfolioFilterProvider>
			<ContactMe />
		</OnePageScroller>
	);
}
