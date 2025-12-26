import type { LabelProps } from './Label.props.ts';
import cn from 'classnames';
import styles from './Label.module.css';

export function Label({ children, className = '', ...props }: LabelProps) {
	return (
		<label className={cn(styles['label'], className)} {...props}>
			{children}
		</label>
	);
}
