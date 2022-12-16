import React from 'react';
import Progress from "./Progress";

export default function SkillItem({ title, size, color, message }) {
	return (
		<li className="group cursor-pointer relative flex flex-col items-center justify-center">
			<span className="font-title">{title}</span>
			<Progress size={size} color={color} />
			<pre className="scale-0 absolute top-1/2 -translate-y-2/4 z-10 w-max bg-white/90 border-2 p-2 m-1 duration-300 rounded-lg group-hover:scale-100">
				{message.replace(/\\n/g, '\n')}
			</pre>
		</li>
	);
}