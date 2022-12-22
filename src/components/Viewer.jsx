import React from 'react';
import ImageSlider from "./ImageSlider";
import {IoMdOpen} from "react-icons/io";

export default function Viewer({ item }) {
	return (
		<div className={`flex flex-col w-full px-4 duration-300`}>
			<div className="flex justify-end font-semibold">
				<a href={item.url || `/${item.title}`} target="_blank" rel="noreferrer">{item.title}<IoMdOpen className="inline ml-1" /></a>
			</div>
			{ item.images && <ImageSlider className="self-center" width="w-screen sm:w-[500px]" height="h-96" auto={2500} items={item.images} /> }
			<div className="text-left">
				{item.description}
			</div>
		</div>
	);
}