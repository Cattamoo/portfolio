import React from 'react';
import PageLayout from "../layout/PageLayout";
import Title from "../ui/Title";

export default function Portfolio() {
	return (
		<PageLayout className="flex flex-col">
			<Title title="Portfolio" className="text-center" />
		</PageLayout>
	);
}