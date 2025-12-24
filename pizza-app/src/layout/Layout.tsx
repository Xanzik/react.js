import { Link, Outlet } from 'react-router-dom';
import cn from 'classnames';
import styles from './Layout.module.css';
import Button from '../components/Button/Button';

export function Layout() {
	return (
		<div className={cn(styles['layout'])}>
			<div className={cn(styles['menu'])}>
				<img className={cn(styles['menu__avatar'])} src="/avatar.jpg" alt="" />
				<span className={cn(styles['menu__full-name'])}>Tony Soprano</span>
				<span className={cn(styles['menu__email'])}>tonysoprano2008@mail.com</span>
				<Link className={cn(styles['menu__link'])} to="/">
					<img src="/menu-icon.svg" alt="menu-icon" />
					Menu
				</Link>
				<Link className={cn(styles['menu__link'])} to="/cart">
					<img src="/cart-icon.svg" alt="cart-icon" />
					Cart
					<span className={styles['cart-badge']}>2</span>
				</Link>
				<Button size="small" className={cn(styles['menu__button'])}>
					<img src="/logout-icon.svg" alt="" />
					Logout
				</Button>
			</div>
			<div className={cn(styles['content'])}>
				<Outlet></Outlet>
			</div>
		</div>
	);
}
