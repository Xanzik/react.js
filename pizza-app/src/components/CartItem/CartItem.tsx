import styles from './CartItem.module.css';
import type { AppDispatch } from '../../store/store.ts';
import { cartActions } from '../../store/cart.slice.ts';
import { useDispatch } from 'react-redux';
import type { CardItemProps } from './CartItem.props.ts';

function CartItem(props: CardItemProps) {
	const dispatch = useDispatch<AppDispatch>();

	const increase = () => {
		dispatch(cartActions.add(props.id));
	};

	const decrease = () => {
		dispatch(cartActions.remove(props.id));
	};

	const remove = () => {
		dispatch(cartActions.delete(props.id));
	};

	return (
		<div className={styles['item']}>
			<div className={styles['image']} style={{ backgroundImage: `url('${props.image}')` }}></div>
			<div className={styles['description']}>
				<div className={styles['name']}>{props.name}</div>
				<div className={styles['price']}>{props.price} $</div>
			</div>
			<div className={styles['actions']}>
				<button className={styles['minus']} onClick={decrease}>
					<img src="/minus-icon.svg" alt="decrease from cart" />
				</button>
				<div className={styles['number']}>{props.count}</div>
				<button className={styles['plus']} onClick={increase}>
					<img src="/plus-icon.svg" alt="add to cart" />
				</button>
				<button className={styles['remove']} onClick={remove}>
					<img src="/delete-icon.svg" alt="delete everything cart" />
				</button>
			</div>
		</div>
	);
}

export default CartItem;
