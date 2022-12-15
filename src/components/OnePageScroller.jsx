import React, {useEffect, useRef} from 'react';

export default function OnePageScroller({ children, page, setPage }) {
	const scrollDivRef = useRef();
	const scrollHandler = (e) => {
		e.preventDefault();
		const { deltaY } = e;
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
		scrollDivRef.current.addEventListener('wheel', scrollHandler, { passive: false })
	})
	return (
		<>
			<div ref={scrollDivRef}>
				{ children }
			</div>
			<ul className="fixed right-0 top-1/2 -translate-y-2/4 flex flex-col gap-1 mr-1">
				{
					children.map((_, index) => <li className={`cursor-pointer w-2 h-2 rounded-full ${index === page ? 'bg-black' : 'bg-zinc-300'}`} onClick={() => scroll(index)} />)
				}
			</ul>
		</>
	);
}