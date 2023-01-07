import React from "react";

type Props = {
	children: React.ReactNode;
	className?: string;
}

export default function PageLayout({ children, className = '' }: Props) {
	return (
		<div className={`body w-96 h-60 ${className}`}>
			{ children }
		</div>
	);
}