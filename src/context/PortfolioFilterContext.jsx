import {createContext, useContext, useState} from "react";

const PortfolioFilterContext = createContext();

export function PortfolioFilterProvider({ children }) {
	const [filter, setFilter] = useState([]);
	const filtering = (item) => (filter.length === 0 ? true : item.tags.filter(tag => filter.includes(tag)).length !== 0);
	const setFiltering = (name) => {
		setFilter(prev => prev.includes(name) ? prev.filter((tag) => tag !== name) : [...prev, name]);
	}
	return (
		<PortfolioFilterContext.Provider value={{ filter, filtering, setFiltering }}>
			{children}
		</PortfolioFilterContext.Provider>
	)
}

export function usePortfolioFilter() {
	return useContext(PortfolioFilterContext);
}