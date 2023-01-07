import {IconType} from "react-icons";

type Props = {
	Icon: IconType;
	name?: string;
	className?: string;
	onClick?: () => void
	onDoubleClick?: () => void
}

export default function Icon({ Icon, name, className, onClick, onDoubleClick }: Props) {
	return (
		<button className={`flex flex-col items-center justify-center rounded hover:bg-zinc-100 focus:bg-zinc-100/50 ${className}`} onClick={onClick} onDoubleClick={onDoubleClick}>
			<Icon className="flex-1 text-3xl" />
			{ name && <span>{name}</span> }
		</button>
	);
}