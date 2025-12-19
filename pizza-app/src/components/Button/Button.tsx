import type { ButtonProps } from './Button.props.ts';
import styles from './Button.module.css';
import cn from 'classnames';

function Button({ children, className, size, ...props }: ButtonProps) {
	return (
		<button className={cn(styles['button'], styles[`button--size-${size}`], className)} {...props}>
			{children}
		</button>
	);
}

export default Button;
