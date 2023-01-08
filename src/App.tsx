import React, {useState} from 'react';
import {IconType} from "react-icons";
import {RiUserStarFill} from "react-icons/ri";
import {GiSkills} from "react-icons/gi";
import {MdMonitor} from "react-icons/md";
import {IoIosMail} from "react-icons/io";
import Icon from "./components/ui/Icon";
import Popup from "./components/ui/Popup";
import Introduce from "./components/pages/Introduce";
import Skill from "./components/pages/Skill";
import Portfolio from "./components/pages/Portfolio";
import ContactMe from "./components/pages/ContactMe";

type PopupItem = {
	id: string;
	icon: IconType;
	title: string;
	open: boolean;
	children: React.ReactNode;
}

const initialItems = [
	{ id: '1', icon: RiUserStarFill, title: 'Introduce', open: false, children: <Introduce /> },
	{ id: '2', icon: GiSkills, title: 'Skills', open: false, children: <Skill /> },
	{ id: '3', icon: MdMonitor, title: 'Portfolio', open: false, children: <Portfolio /> },
	{ id: '4', icon: IoIosMail, title: 'ContactMe', open: false, children: <ContactMe /> },
];

export default function App() {
	const [items, setItems] = useState<PopupItem[]>(initialItems);
	const handleOpen = (id: string) => {
		setItems(prev => prev.map(item => {
			if(item.id === id) {
				item.open = true;
			}
			return item;
		}));
	}
	const handleClose = (id: string) => {
		setItems(prev => prev.map(item => {
			if(item.id === id) {
				item.open = false;
			}
			return item;
		}));
	}
	const handleMove = (id: string) => {
		const array = items;
		const item = array.find((item) => item.id === id);
		if(item) {
			array.splice(array.indexOf(item), 1);
			setItems([...array, item]);
		}
	}
	return (
		<main className="flex flex-col h-full p-1">
			<div className="flex-1 grid gap-1 grid-cols-5 grid-rows-[repeat(12,_1fr)] grid-flow-col sm:grid-cols-6 md:grid-cols-7 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10">
				{
					[...items]
						.sort((a, b) => a.id > b.id ? 1 : -1)
						.map(({ id,  icon, title }) => <Icon key={id} Icon={icon} name={title} onDoubleClick={() => handleOpen(id)} />)
				}
			</div>
			{
				items.map((item, idx) => (
					<Popup className={idx === items.length - 1 ? 'focus' : ''} key={item.id} id={item.id} title={item.title} open={item.open} onClose={handleClose} onMove={handleMove}>
						{item.children}
					</Popup>
				))
			}
		</main>
	);
}
