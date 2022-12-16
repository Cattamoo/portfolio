import React from 'react';
import Progress from "./Progress";

export default function SkillItem({ title, size, color, message }) {
	return (
		<li className="group cursor-pointer relative flex flex-col items-center justify-center">
			<span className="font-title">{title}</span>
			<Progress size={size} color={color} />
			<div className="scale-0 absolute top-full z-10 w-max max-w-[35vw] break-keep bg-white/90 border-2 p-2 m-1 duration-300 rounded-lg group-hover:scale-100">
				{message}
			</div>
		</li>
	);
}