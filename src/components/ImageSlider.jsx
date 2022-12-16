import React, {useEffect, useState} from 'react';
import {FaAngleLeft, FaAngleRight} from "react-icons/fa";

export default function ImageSlider({ auto, width = 'w-52', height = 'h-48', className = '', items = [] }) {
	const [position, setPosition] = useState(0);
	const prevClickHandler = () => {
		setPosition(() => position === 0 ? items.length - 1 : position - 1);
	}
	const nextClickHandler = () => {
		setPosition(() => position === items.length - 1 ? 0 : position + 1);
	}
	useEffect(() => {
		let autoSlide
		if(auto) {
			autoSlide = setInterval(() => {
				nextClickHandler();
			}, auto);
		}
		return () => {
			clearInterval(autoSlide);
		}
	})
	return (
		<div className={`relative w-max h-max ${className}`}>
			<ul className={`relative flex ${width} ${height} overflow-hidden`}>
				{
					items.map((item, index) => (
						<li key={`${item.title}_${index}`} className={`absolute top-1/2 ${index === position ? 'z-1' : '-z-10'} w-full -translate-y-2/4 -translate-x-2/4 duration-500`} style={{ left: `${(index - position) * 100 + 50}%` }}>
							<img className="w-full h-max" src={item.url} alt={item.title} />
						</li>
					))
				}
			</ul>
			{
				items.length > 1 && (
					<>
						<button
							className="absolute top-1/2 -translate-y-2/4 left-0 mx-2 opacity-0 duration-300 hover:opacity-100"
							onClick={prevClickHandler}>
							<FaAngleLeft/>
						</button>
						<button className="absolute top-1/2 -translate-y-2/4 right-0 mx-2 opacity-0 duration-300 hover:opacity-100" onClick={nextClickHandler}>
							<FaAngleRight />
						</button>
					</>
				)
			}
		</div>
	);
}