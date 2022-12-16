import React from 'react';
import Progress from "./Progress";

export default function SkillItem({ title, size, color }) {
	return (
		<li className="group cursor-pointer relative flex flex-col items-center justify-center">
			<span className="font-title">{title}</span>
			<Progress size={size} color={color} />
		</li>
	);
}