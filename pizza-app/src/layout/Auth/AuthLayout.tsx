import cn from 'classnames';
import styles from './AuthLayout.module.css';
import { Outlet } from 'react-router-dom';

export function AuthLayout() {
	return (
		<div className={cn(styles['layout'])}>
			<div className={cn(styles['logo__wrapper'])}>
				<img className={cn(styles['logo'])} src="/logo.svg" alt="logo" />
			</div>
			<div className={cn(styles['content'])}>
				<Outlet />
			</div>
		</div>
	);
}
