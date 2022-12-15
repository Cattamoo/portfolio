import React from 'react';
import Typewriter from 'typewriter-effect';

export default function Layout({ className, typingEffect, title, children }) {
	return (
		<section className={`w-full h-screen flex flex-col items-center justify-center ${className || ''} gap-2`}>
			{
				typingEffect
				? <Typewriter options={{
					strings: title,
					autoStart: true,
					loop: true,
					wrapperClassName: "Typewriter__wrapper font-title text-5xl",
					cursorClassName: "Typewriter__cursor font-title text-5xl"
				}} />
				: <span className="font-title text-5xl">{title}</span>
			}
			{children}
		</section>
	);
}