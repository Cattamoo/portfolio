import PageLayout from "../layout/PageLayout";
import Title from "../ui/Title";
import Input from "../ui/Input";
import TextArea from "../ui/TextArea";

export default function Introduce() {
	return (
		<PageLayout>
			<Title title="Introduce" />
			<div className="flex relative items-start">
				<img className="sticky top-2 w-36 aspect-[3/4] object-cover" src="/images/no_image.png" alt="profile" />
				<div className="flex-1 overflow-auto">
					<Input title="이름" value="이예진" disabled={true} />
					<Input title="생년월일" value="1998.04.19" disabled={true} />
					<TextArea title="고등학교" value={"안산디자인문화고등학교\n미디어콘텐츠과"} disabled={true} />
					<TextArea title="대학교" value={"명지전문대학\n컴퓨터공학과"} disabled={true} />
				</div>
			</div>
		</PageLayout>
	);
}