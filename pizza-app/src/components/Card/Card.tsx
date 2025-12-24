import styles from './Card.module.css';
import cn from 'classnames';
import Button from '../Button/Button.tsx';

function Card() {
	return (
		<div className={cn(styles['card__wrapper'])}>
			<img src="/card-image.png" alt="card" className={cn(styles['card__image'])} />
			<div className={cn(styles['card__header'])}>
				<div className={cn(styles['price__container'])}>
					<span className={cn(styles['price'])}>
						300 <span className={cn(styles['currency'])}>$</span>
					</span>
				</div>

				<Button>
					<img src="/add-icon.png" alt="" />
				</Button>
			</div>
			<div className={cn(styles['card__body'])}>
				<div className={cn(styles['rate__container'])}>
					<span className={cn(styles['rate__text'])}>4.5</span>
					<img src="/rate-icon.svg" alt="" />
				</div>
				<h2 className={cn(styles['title'])}>Dish</h2>
				<span className={cn(styles['description'])}>Салями, руккола, помидоры, оливки</span>
			</div>
		</div>
	);
}

export default Card;
