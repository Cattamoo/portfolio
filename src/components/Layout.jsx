import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Layout({ className, typingEffect, title, children }) {
	const titleClassName = 'font-title text-5xl';
	return (
		<section className={`w-full h-screen flex flex-col items-center justify-center ${className || ''} gap-2 text-center`}>
			{
				typingEffect
				? <Typewriter options={{
					strings: title,
					autoStart: true,
					loop: true,
					wrapperClassName: `Typewriter__wrapper ${titleClassName}`,
					cursorClassName: `Typewriter__cursor ${titleClassName}`
				}} />
				: <span className={titleClassName}>{title}</span>
			}
			{children}
		</section>
	);
}