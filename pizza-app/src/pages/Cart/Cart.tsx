import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store/store';
import CartItem from '../../components/CartItem/CartItem';
import { useEffect, useState } from 'react';
import type { Product } from '../../interfaces/product.interface';
import axios from 'axios';
import styles from './Cart.module.css';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
import { cartActions } from '../../store/cart.slice';
import { Heading } from '../../components/Heading/Heading.tsx';

const DELIVERY_FEE = 169;

export function Cart() {
	const [cartProducts, setCardProducts] = useState<Product[]>([]);
	const items = useSelector((s: RootState) => s.cart.items);
	const jwt = useSelector((s: RootState) => s.user.jwt);
	const dispatch = useDispatch<AppDispatch>();
	const navigate = useNavigate();

	const total = items
		.map((i) => {
			const product = cartProducts.find((p) => p.id === i.id);
			if (!product) {
				return 0;
			}
			return i.count * product.price;
		})
		.reduce((acc, i) => (acc += i), 0);

	const getItem = async (id: number) => {
		const { data } = await axios.get<Product>(`pizza-api-demo/products/${id}`);
		return data;
	};

	const loadAllItems = async () => {
		const res = await Promise.all(items.map((i) => getItem(i.id)));
		setCardProducts(res);
	};

	const checkout = async () => {
		await axios.post(
			`pizza-api-demo/order`,
			{
				products: items,
			},
			{
				headers: {
					Authorization: `Bearer ${jwt}`,
				},
			},
		);
		dispatch(cartActions.clean());
		navigate('/success');
	};

	useEffect(() => {
		loadAllItems();
	}, [items]);

	return (
		<>
			<Heading className={styles['headling']}>Cart</Heading>
			{items.map((i) => {
				const product = cartProducts.find((p) => p.id === i.id);
				if (!product) {
					return;
				}
				return <CartItem key={product.id} count={i.count} {...product} />;
			})}
			<div className={styles['line']}>
				<div className={styles['text']}>Result</div>
				<div className={styles['price']}>
					{total}
					<span> $</span>
				</div>
			</div>
			<hr className={styles['hr']} />
			<div className={styles['line']}>
				<div className={styles['text']}>Delivery</div>
				<div className={styles['price']}>
					{DELIVERY_FEE}
					<span> $</span>
				</div>
			</div>
			<hr className={styles['hr']} />
			<div className={styles['line']}>
				<div className={styles['text']}>
					Result <span className={styles['total-count']}>({items.length})</span>
				</div>
				<div className={styles['price']}>
					{total + DELIVERY_FEE}
					<span> $</span>
				</div>
			</div>
			<div className={styles['checkout']}>
				<Button size="medium" onClick={checkout}>
					design
				</Button>
			</div>
		</>
	);
}
