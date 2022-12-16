import React from 'react';
import Layout from "../components/Layout";
import {age} from "../util/date";
import ImageSlider from "../components/ImageSlider";

export default function Introduce() {
	return (
		<Layout title="Introduce">
			<div className="flex flex-col items-center gap-2 md:flex-row">
				<ImageSlider auto={3000} items={[
					{ title: 'profile', url: "/portfolio/logo192.png" },
				]} />
				<div className="flex flex-col  md:text-left">
					<span className="text-xl font-semibold">이예진</span>
					<span>{`1998.04.19 (만 ${age('1998.04.19')}세)`}</span>
					<span>안산디자인문화고등학교 미디어콘텐츠과 졸업</span>
					<span>명지전문대학 컴퓨터공학과 졸업</span>
				</div>
			</div>
		</Layout>
	);
}