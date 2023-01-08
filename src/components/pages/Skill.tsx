import PageLayout from "../layout/PageLayout";
import Title from "../ui/Title";
import Progress from "../ui/Progress";

type SkillItemType = {
	title: string;
	size: number;
	color: string;
}

export default function Skill() {
	const skills: SkillItemType[] = [
		{title: 'HTML', size: 95, color: 'bg-[#e34c26]'},
		{title: 'CSS', size: 78, color: 'bg-[#264de4]'},
		{title: 'Javascript', size: 97.6, color: 'bg-[#f7df1e]'},
		{title: 'Typescript', size: 67.2, color: 'bg-[#3178c6]'},
		{title: 'React', size: 83, color: 'bg-[#61dafb]'},
	]
	return (
		<PageLayout>
			<Title title="Skills" />
			<ul className="grid grid-cols-3 gap-2">
				{
					skills.map(({ title, size, color }) => <SkillItem title={title} size={size} color={color} />)
				}
			</ul>
		</PageLayout>
	);
}

function SkillItem({ title, size, color }: SkillItemType) {
	return (
		<li className="group relative flex flex-col items-center justify-center">
			<span className="font-title">{title}</span>
			<Progress size={size} color={color} />
		</li>
	);
}