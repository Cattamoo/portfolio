import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({ children, className = '' }: Props) {
	return (
		<div className={`body w-[90vw] h-60 ${className} sm:w-96`}>
			{ children }
		</div>
	);
}