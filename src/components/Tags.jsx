import React from 'react';
import {FaTags} from "react-icons/fa";
import {usePortfolioFilter} from "../context/PortfolioFilterContext";

export default function Tags({ tags }) {
	const { filter, setFiltering } = usePortfolioFilter();
	return (
		<div className="flex items-center gap-1">
			<FaTags />
			{
				tags.map((tag, index) => (
					<span
						key={index}
						className={`text-xs px-1 py-[0.2rem] ${filter.includes(tag) ? 'bg-black text-white' : 'bg-zinc-300'} rounded-md`}
						onClick={() => setFiltering(tag)}>
						{tag}
					</span>
				))
			}
		</div>
	);
}