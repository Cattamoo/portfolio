import React from 'react';

export default function Layout({ className, children }) {
	return (
		<section className={`w-full h-screen flex flex-col items-center justify-center ${className || ''}`}>
			{children}
		</section>
	);
}