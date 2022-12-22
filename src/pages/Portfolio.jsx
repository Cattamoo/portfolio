import React, {useState} from 'react';
import {usePortfolioFilter} from "../context/PortfolioFilterContext";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";
import Viewer from "../components/Viewer";
import Tags from "../components/Tags";

export default function Portfolio() {
	const { filtering } = usePortfolioFilter();
	const [items] = useState({
		'1234-1234-1234': {
			id: '1234-1234-1234',
			title: 'Github Pages',
			url: 'https://cattamoo.github.io',
			images: [
				{title: 'GithubPages', url: '/portfolio/logo192.png'},
				{title: 'GithubPages', url: '/portfolio/logo192.png'},
				{title: 'GithubPages', url: '/portfolio/logo192.png'}
			],
			description: '기존 사용하던 jekyll 대신 직접 React.js를 사용해 만든 Github Page',
			tags: ['React', 'Javascript', 'Markdown', 'Firebase']
		},
		'1234-1234-1235': {
			id: '1234-1234-1235',
			title: 'Paint',
			url: 'https://cattamoo.github.io/paint',
			images: [
				{title: 'Paint', url: 'https://user-images.githubusercontent.com/87294942/208136544-f8071ba1-ed26-4167-858b-a4f73c7aab09.png'},
				{title: 'Paint', url: 'https://user-images.githubusercontent.com/87294942/208136548-6a15d2e2-65da-464f-84cf-8417396ad9a4.png'},
				{title: 'Paint', url: 'https://user-images.githubusercontent.com/87294942/208136551-c7d7d4d2-cf98-440f-8a7d-e8b78de25d3d.png'}
			],
			description: '바닐라 자바스크립트를 이용해 만든 웹 그림판',
			tags: ['HTML', 'CSS', 'Javascript']
		},
		'1234-1234-1236': {
			id: '1234-1234-1236',
			title: 'Color Storage',
			url: 'https://cattamoo.github.io/color-storage',
			images: [
				{title: 'ColorStorage', url: 'https://user-images.githubusercontent.com/87294942/208135437-655d155b-f72a-4b5a-9082-30dafb144b0e.png'},
				{title: 'ColorStorage', url: 'https://user-images.githubusercontent.com/87294942/208135439-d965a247-4f58-49ac-b85f-ca89a9e45fa3.png'},
				{title: 'ColorStorage', url: 'https://user-images.githubusercontent.com/87294942/208135442-b8cdda8a-c9b3-44c8-add5-69b74359472a.png'}
			],
			description: '색상을 저장하고, 쉽게 사용하기 위한 앱',
			tags: ['React', 'Javascript']
		},
		'1234-1234-1237': {
			id: '1234-1234-1237',
			title: 'Simple Normal Shop',
			url: 'https://cattamoo.github.io/simple-normal-shop',
			images: [
				{title: 'SimpleNormalShop', url: 'https://user-images.githubusercontent.com/87294942/209177952-af87e2ab-12f8-4de7-b9e3-037b5f81c6d6.png'},
				{title: 'SimpleNormalShop', url: 'https://user-images.githubusercontent.com/87294942/209177959-aadfe329-caeb-47e3-8bca-9c4cd13fe622.png'},
				{title: 'SimpleNormalShop', url: 'https://user-images.githubusercontent.com/87294942/209177965-21a08b7f-31c3-4116-8d65-b74084375a2b.png'},
				{title: 'SimpleNormalShop', url: 'https://user-images.githubusercontent.com/87294942/209177966-f52fc654-88b6-40c0-b537-e00e35ed6f55.png'},
				{title: 'SimpleNormalShop', url: 'https://user-images.githubusercontent.com/87294942/209177969-0f1efaea-a9cc-4f74-b7f5-e6b84fe80cc4.png'},
			],
			description: '쇼핑몰',
			tags: ['React', 'Javascript', 'Firebase']
		}
	});
	const [selected, setSelected] = useState('1234-1234-1234');
	return (
		<Layout title="Portfolio">
			<Tags tags={[...new Set(Object.values(items).map((item) => item.tags).flat())]} />
			{ selected != null && <Viewer item={items[selected]}/> }
			<ul className="w-full flex gap-2 px-2 overflow-x-scroll">
				{
					Object.values(items).filter(filtering).map((item) => (
						<ListItem setOpen={setSelected} key={item.id} isOpen={item.id === selected} item={item} />
					))
				}
			</ul>
		</Layout>
	);
}