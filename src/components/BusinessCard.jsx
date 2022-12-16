import React from 'react';

export default function BusinessCard() {
	return (
		<div className="group relative w-48 h-64 mt-4">
			<div className="absolute top-0 left-0 rounded-xl border-4 border-yellow-500 flex flex-col justify-center items-center w-full h-full bg-black scale-x-100 duration-300 group-hover:scale-x-0">
				<span className="text-4xl font-bold font-title text-yellow-300">Cattamoo</span>
				<span className="text-yellow-300 font-semibold">Frontend Developer</span>
			</div>
			<div className="absolute top-0 left-0 rounded-xl border-4 border-zinc-500 flex flex-col justify-center items-center w-full h-full bg-black scale-x-0 duration-300 group-hover:scale-x-100">
				<span className="text-3xl text-zinc-300 font-bold">이예진</span>
				<span className="mt-2">✉️</span>
				<span className="text-zinc-400 font-semibold">ouob77@kakao.com</span>
			</div>
		</div>
	);
}