import React from 'react';
import Layout from "../components/Layout";
import SkillItem from "../components/SkillItem";

export default function Skill() {
	return (
		<Layout title="Skill">
			<ul className="grid grid-cols-3 gap-2">
				<SkillItem title="HTML" size={95} color="bg-[#e34c26]" />
				<SkillItem title="CSS" size={78} color="bg-[#264de4]" />
				<SkillItem title="Javascript" size={99.6} color="bg-[#f7df1e]" />
				<SkillItem title="Typescript" size={67.2} color="bg-[#3178c6]" />
				<SkillItem title="React.js" size={83} color="bg-[#61dafb]" />
			</ul>
		</Layout>
	);
}