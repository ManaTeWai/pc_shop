'use Client'

import { useEffect, useState } from 'react';
import { productCardProps } from './productCard.props';
import styles from './productCard.module.css'
import cn from 'classnames';
import Image from 'next/image';
import { Htag, P } from '../';
import Link from 'next/link';

interface Pc {
	id: number;
	title: string;
	description: string;
	imageUrl: string;
	alt: string;
	pcType: string;
}

const pcmock: Pc[] = [
	{
		id: 1,
		title: 'Название товара 1',
		description: 'Описание товара 1',
		imageUrl: '/images/pc1.jpeg',
		alt: 'Изображение товара 1',
		pcType: 'Тип товара 1',
	},
	{
		id: 2,
		title: 'Название товара 2',
		description: 'Описание товара 2',
		imageUrl: '/images/pc1.jpeg',
		alt: 'Изображение товара 2',
		pcType: 'Тип товара 2',
	},
	{
		id: 3,
		title: 'Название товара 3',
		description: 'Описание товара 3',
		imageUrl: '/images/pc1.jpeg',
		alt: 'Изображение товара 3',
		pcType: 'Тип товара 3',
	},
];

export const ProductCard = ({ className, ...props }: productCardProps): JSX.Element => {

	return (
		<>
			{
				pcmock.map((pc) => (
					<Link className="mt-10" key={pc.id} href={`/product/${pc.id}`}>
						<div className='className="border border-gray-300 p-4 rounded-lg"'>
							<Htag tag='h2'>{pc.title}</Htag>
							<P>{pc.description}</P>
							<Image src={pc.imageUrl} alt={pc.alt} width={100} height={100} />
							<P>{pc.pcType}</P>
						</div>
					</Link>
				))
			}
		</>
	);
};