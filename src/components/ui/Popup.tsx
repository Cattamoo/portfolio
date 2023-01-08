import React, {useEffect, useRef, useState} from "react";
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
import {IoIosClose} from "react-icons/io";

type Props = {
	id: string;
	title: string;
	open: boolean;
	children: React.ReactNode;
	onClose: (id: string) => void;
	onMove: (id: string) => void;
	className?: string;
}

export default function Popup({id, title, open, children, onClose, onMove, className = ''}: Props) {
	const dragRef = useRef<HTMLDivElement>(null);
	const [disabled, setDisabled] = useState(false);
	const [bounds, setBounds] = useState({ left: 0, top: 0, bottom: 0, right: 0 });
	const titleElement = <DraggableTitle title={title} disabled={disabled} setDisabled={setDisabled} onClose={() => onClose(id)} />;
	const handleDragStart = (e: DraggableEvent, data: DraggableData) => {
		const { clientWidth, clientHeight } = window.document.documentElement;
		const targetRect = dragRef.current?.getBoundingClientRect();
		if (!targetRect) {
			return;
		}
		setBounds({
			left: -targetRect.left + data.x,
			right: clientWidth - (targetRect.right - data.x),
			top: -targetRect.top + data.y,
			bottom: clientHeight - (targetRect.bottom - data.y),
		});
	};
	useEffect(() => {
		open && dragRef.current && dragRef.current.click();
	}, [open])
	return (
		<>
			{open && <Draggable
				disabled={disabled}
				bounds={bounds}
				onStart={(e, data) => handleDragStart(e, data)}
				onDrag={() => onMove(id)}
			>
				<div ref={dragRef} className={`popup ${className}`} onClick={() => onMove(id)}>
					{titleElement}
					{children}
				</div>
			</Draggable>}
		</>
	);
}

type TitleProps = {
	title: string;
	disabled: boolean;
	setDisabled: (value: boolean) => void;
	onClose: () => void;
}

function DraggableTitle({title, disabled, setDisabled, onClose}: TitleProps) {
	return (
		<div className="title"
			onMouseOver={() => {
				if (disabled) {
					setDisabled(false);
				}
			}}
			onMouseOut={() => {
				setDisabled(true);
			}}
			onFocus={() => {}}
			onBlur={() => {}}
		>
			<span>{title}</span>
			<button className="cursor-pointer" onClick={onClose}>
				<IoIosClose />
			</button>
		</div>
	)
}