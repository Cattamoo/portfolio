import React, {useState} from 'react';
import {IoIosMail, IoIosMailOpen} from "react-icons/io";
import PageLayout from "../layout/PageLayout";
import Title from "../ui/Title";

export default function ContactMe() {
	const [visible, setVisible] = useState(false);
	const MailIcon = visible ? IoIosMailOpen : IoIosMail;
	const handleClick = () => {
		setVisible(true);
		setTimeout(() => {
			setVisible(false)
		}, 3000);
	}
	return (
		<PageLayout className="relative">
			<Title title="Contact Me" />
			<div className="absolute top-1/2 left-1/2 -translate-y-2/4 -translate-x-2/4 flex flex-col justify-center items-center">
				<MailIcon className={`text-8xl ${visible ? '' : 'cursor-pointer animate-bounce'}`} onClick={handleClick} />
				<span className={`origin-top ${visible ? 'scale-y-100' : 'scale-y-0'} duration-300`}>ouob77@kakao.com</span>
			</div>
		</PageLayout>
	);
}