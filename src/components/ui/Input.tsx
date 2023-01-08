export type InputProps = {
	title: string;
	value: string;
	disabled?: boolean;
}

export default function Input({ title, value, disabled = false }: InputProps) {
	return (
		<div className="flex flex-col p-1">
			<span className="text-xs">{title}</span>
			<input className="px-2 py-1 rounded border-2 border-dashed" type="text" value={value} disabled={disabled} />
		</div>
	);
}