import { Heading } from '../../components/Heading/Heading';
import Search from '../../components/Search/Search.tsx';
import cn from 'classnames';
import styles from './Menu.module.css';
import Card from '../../components/Card/Card.tsx';
import type { Product } from '../../interfaces/product.interface.ts';
import { type ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios';

export function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [filter, setFilter] = useState<string>('');

	const getMenu = async (name?: string) => {
		try {
			const { data } = await axios.get<Product[]>(
				'/pizza-api-demo/products',

				{
					params: { name },
				},
			);
			setProducts(data);
		} catch (e) {
			console.error(e);
			return;
		}
	};

	const updateFilter = async (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	useEffect(() => {
		getMenu();
	}, []);

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	return (
		<>
			<div className={cn(styles['head'])}>
				<Heading>Menu</Heading>
				<Search onChange={updateFilter} />
			</div>
			<div className={cn(styles['card__list'])}>
				{products.map((product) => (
					<Card
						key={product.id}
						id={product.id}
						name={product.name}
						description={product.ingredients.join(',')}
						rating={product.rating}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</>
	);
}
