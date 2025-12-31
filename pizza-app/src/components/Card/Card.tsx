import styles from './Card.module.css';
import cn from 'classnames';
import Button from '../Button/Button.tsx';
import type { AppDispatch } from '../../store/store.ts';
import { cartActions } from '../../store/cart.slice.ts';
import type { CardProps } from './Card.props.ts';
import { useDispatch } from 'react-redux';
import type { MouseEvent } from 'react';

function Card(props: CardProps) {
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) => {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	return (
		<div className={cn(styles['card__wrapper'])}>
			<img src={props.image} alt="card" className={cn(styles['card__image'])} />
			<div className={cn(styles['card__header'])}>
				<div className={cn(styles['price__container'])}>
					<span className={cn(styles['price'])}>
						{props.price} <span className={cn(styles['currency'])}>$</span>
					</span>
				</div>
				<Button onClick={add}>
					<img src="/add-icon.png" alt="" />
				</Button>
			</div>
			<div className={cn(styles['card__body'])}>
				<div className={cn(styles['rate__container'])}>
					<span className={cn(styles['rate__text'])}>{props.rating}</span>
					<img src="/rate-icon.svg" alt="" />
				</div>
				<h2 className={cn(styles['title'])}>{props.name}</h2>
				<span className={cn(styles['description'])}>{props.description}</span>
			</div>
		</div>
	);
}

export default Card;
