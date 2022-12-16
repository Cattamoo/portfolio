import React from 'react';

export default function Progress({ size, color }) {
	return (
		<div className={`relative w-16 h-16 rounded-full overflow-hidden`}>
			<div className={`w-full h-full ${color} opacity-50`} />
			<div className={`absolute bottom-0 w-full ${color}`} style={{ height: `${size}%` }} />
			<div className="absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 text-white">{ `${size}%` }</div>
		</div>
	);
}