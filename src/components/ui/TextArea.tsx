import {InputProps} from "./Input";

export default function TextArea({ title, value, disabled = false }: InputProps) {
	return (
		<div className="flex flex-col p-1">
			<span className="text-xs">{title}</span>
			<textarea className="px-2 py-1 rounded border-2 border-dashed resize-none" value={value} disabled={disabled} />
		</div>
	);
}