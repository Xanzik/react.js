import { Link, Outlet, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import styles from './Layout.module.css';
import Button from '../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile, userActions } from '../store/user.slice.ts';
import { useEffect } from 'react';
import type { AppDispatch, RootState } from '../store/store.ts';

export function Layout() {
	const navigate = useNavigate();
	const { profile } = useSelector((s: RootState) => s.user);
	const items = useSelector((s: RootState) => s.cart.items);
	const dispatch = useDispatch<AppDispatch>();

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	return (
		<div className={cn(styles['layout'])}>
			<div className={cn(styles['menu'])}>
				<img className={cn(styles['menu__avatar'])} src="/avatar.jpg" alt="" />
				<span className={cn(styles['menu__full-name'])}>{profile?.name}</span>
				<span className={cn(styles['menu__email'])}>{profile?.email}</span>
				<Link className={cn(styles['menu__link'])} to="/">
					<img src="/menu-icon.svg" alt="menu-icon" />
					Menu
				</Link>
				<Link className={cn(styles['menu__link'])} to="/cart">
					<img src="/cart-icon.svg" alt="cart-icon" />
					Cart
					<span className={styles['cart-badge']}>
						{items.reduce((acc, item) => (acc += item.count), 0)}
					</span>
				</Link>
				<Button size="small" className={cn(styles['menu__button'])}>
					<img onClick={logout} src="/logout-icon.svg" alt="" />
					Logout
				</Button>
			</div>
			<div className={cn(styles['content'])}>
				<Outlet />
			</div>
		</div>
	);
}
