import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

export function Success() {
	const navigate = useNavigate();
	return (
		<div className={styles['success']}>
			<img src="/pizza.png" alt="pizza image" />
			<div className={styles['text']}>Your order has been successfully placed.!</div>
			<Button size="medium" onClick={() => navigate('/')}>
				Made new
			</Button>
		</div>
	);
}
