import type { HeadingProps } from './HeadingProps.ts';
import styles from './Heading.module.css';
import cn from 'classnames';

export function Heading({ children, className = '', ...props }: HeadingProps) {
	return (
		<h1 className={cn(styles['head'], className)} {...props}>
			{children}
		</h1>
	);
}
