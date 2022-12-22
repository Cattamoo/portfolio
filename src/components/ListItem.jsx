import React from 'react';
import Tags from "./Tags";

export default function ListItem({ item, setOpen, isOpen }) {
	const openHandler = () => {
		setOpen(item.id);
	}
	return (
		<li className={`flex flex-col text-left ${isOpen ? 'bg-[#eae7dc]' : ''} p-2 rounded-lg m-1`} onClick={() => openHandler(item)}>
			<h2 className="text-lg font-semibold">{item.title}</h2>
			<Tags tags={item.tags} />
		</li>
	);
}