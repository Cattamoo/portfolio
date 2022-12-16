import React from 'react';
import Tags from "./Tags";

export default function ListItem({ item, setOpen, isOpen }) {
	const openHandler = () => {
		setOpen(item.id);
	}
	return (
		<li className={`flex flex-col text-left ${isOpen ? 'bg-blue-300' : ''} p-2 rounded-lg`} onClick={() => openHandler(item)}>
			<span className="text-lg font-semibold">{item.title}</span>
			<Tags tags={item.tags} />
		</li>
	);
}