import React, {useState} from 'react';
import {IconType} from "react-icons";
import {FaAngleLeft} from "react-icons/fa";
import {SiJavascript, SiReact} from "react-icons/si";
import {RiFileEditFill, RiPaintBrushFill} from "react-icons/ri";
import PageLayout from "../layout/PageLayout";
import Title from "../ui/Title";
import Icon from "../ui/Icon";

type Project = {
	id: string;
	title: string;
	icon: IconType;
	url: string;
}

type Category = {
	id: string;
	title: string;
	icon: IconType;
	projects?: Project[];
}

const items: Category[] = [
	{
		id: '1',
		title: 'VanillaJS',
		icon: SiJavascript,
		projects: [
			{id: '1-1', title: 'Paint', icon: RiPaintBrushFill, url: 'https://github.com/cattamoo/paint'}
		]
	},
	{
		id: '2',
		title: 'React',
		icon: SiReact,
		projects: [
			{id: '2-1', title: 'Markdown Editor', icon: RiFileEditFill, url: 'https://github.com/cattamoo/editor'}
		]
	}
];

export default function Portfolio() {
	const [current, setCurrent] = useState<string[]>([]);

	const handlePageOpen = (url: string) => {
		const a = document.createElement('a');
		a.href = url;
		a.target = '_blank';
		a.click();
	}
	const handleDoubleClick = (title: string) => {
		setCurrent([...current, title]);
	}
	const handlePrev = () => {
		const newCurrent = current.slice(0, current.length - 1);
		setCurrent(newCurrent);
	}
	return (
		<PageLayout className="flex flex-col">
			<div className="relative flex items-center justify-center">
				{current.length !== 0 && <button className="absolute left-0" onClick={handlePrev}><FaAngleLeft /></button>}
				<Title title={current.length === 0 ? 'Portfolio' : current[current.length - 1]} className="text-center" />
			</div>
			<div className="flex-1 grid grid-cols-5 auto-rows-min">
				{
					items
						.filter((item) => current.length === 0 ? true : item.title === current[current.length - 1])
						.map((item) => {
							if(current.length !== 0) {
								return item.projects && item.projects.map(({id, title, icon, url}) => <Icon key={id} Icon={icon} name={title} onDoubleClick={() => handlePageOpen(url)} />)
							} else {
								const {id, title, icon} = item;
								return <Icon key={id} Icon={icon} name={title} onDoubleClick={() => handleDoubleClick(title)} />
							}
						} )
				}
			</div>
		</PageLayout>
	);
}