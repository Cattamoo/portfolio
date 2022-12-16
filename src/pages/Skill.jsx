import React from 'react';
import Layout from "../components/Layout";
import SkillItem from "../components/SkillItem";

export default function Skill() {
	return (
		<Layout title="Skill">
			<ul className="grid grid-cols-3 gap-2">
				<SkillItem title="HTML" size={95} color="bg-[#e34c26]" message="기본적인 기능" />
				<SkillItem title="CSS" size={78} color="bg-[#264de4]" message="애니메이션 제외" />
				<SkillItem title="Javascript" size={99.6} color="bg-[#f7df1e]" message="에러 핸들링이 부족함" />
				<SkillItem title="Typescript" size={67.2} color="bg-[#3178c6]" message="다른 라이브러리, 프레임워크와 혼합하여 사용하는 것은 부족함" />
				<SkillItem title="React.js" size={83} color="bg-[#61dafb]" message="조금 부족함" />
			</ul>
		</Layout>
	);
}