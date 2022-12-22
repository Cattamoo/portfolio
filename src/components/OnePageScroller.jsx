import React, {useEffect, useRef} from 'react';
import { isDesktop } from "react-device-detect";

const titles = ['Hello, Cattamoo!', 'Introduce', 'Skill', 'Portfolio', 'ContactMe'];

export default function OnePageScroller({ children, page, setPage }) {
	const scrollDivRef = useRef();
	const wheelHandler = (e) => {
		e.preventDefault();
		scrollHandler(e.deltaY);
	}
	const scrollHandler = (deltaY) => {
		if(deltaY > 0) {
			// 다음페이지
			scroll(page + 1);
		} else {
			// 이전페이지
			scroll(page - 1);
		}
	}
	const scroll = (_page) => {
		if(_page < 0) {
			_page = 0;
		} else if(_page > children.length - 1) {
			_page = children.length - 1;
		}
		setPage(_page);
		scrollDivRef.current.children[_page].scrollIntoView({
			block: 'start', inline: 'start', behavior: 'smooth'
		});
	}
	useEffect(() => {
		const scrollDiv = scrollDivRef.current;
		if(isDesktop) {
			scrollDiv.addEventListener('wheel', wheelHandler, { passive: false })
		} else {
			let st = 0;
			let rs = 0;
			scrollDiv.addEventListener('touchstart', ({ touches }) => { st = touches[0].pageY });
			scrollDiv.addEventListener('touchmove', ({ touches }) => { rs = st - touches[0].pageY });
			scrollDiv.addEventListener('touchend', () => { (rs > 50 || rs < -50) && setTimeout(() => scrollHandler(rs), 100) });
		}

		return () => {
			scrollDiv.removeEventListener('wheel', wheelHandler)
		}
	})
	return (
		<>
			<div ref={scrollDivRef}>
				{ children }
			</div>
			<ul className="fixed right-0 top-1/2 -translate-y-2/4 flex flex-col gap-1 mr-1">
				{
					children.map((_, index) => <li key={index} className={`relative cursor-pointer w-2 h-2 rounded-full ${index === page ? 'bg-black scale-125' : 'bg-zinc-300'} duration-500 group`} onClick={() => scroll(index)}>
						<span className={`mr-1 absolute text-xs opacity-0 top-1/2 -translate-y-2/4 right-full ${index === page ? 'font-bold' : ''} duration-500 group-hover:opacity-100`}>{titles[index]}</span>
					</li>)
				}
			</ul>
		</>
	);
}