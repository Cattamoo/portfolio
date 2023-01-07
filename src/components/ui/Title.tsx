type Props = {
	title: string;
	size?: number;
	className?: string;
}
export default function Title({ title, size = 1, className = '' }: Props) {
	const fontSize = size === 3 ? 'text-2xl' : size === 2 ? 'text-xl' : 'text-lg';
	return (
		<h2 className={`font-bold ${fontSize} ${className}`}>{title}</h2>
	);
}