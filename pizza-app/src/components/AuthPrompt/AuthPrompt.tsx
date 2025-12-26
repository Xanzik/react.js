import type { AuthPromptProps } from './AuthPrompt.props.ts';
import cn from 'classnames';
import styles from './AuthPrompt.module.css';
import { Link } from 'react-router-dom';

export function AuthPrompt({ text, linkText, to }: AuthPromptProps) {
	return (
		<div className={cn(styles['auth-prompt'])}>
			<span className={cn(styles['auth-prompt__annotation'])}>{text}</span>
			<Link to={to} className={cn(styles['auth-prompt__link'])}>
				{linkText}
			</Link>
		</div>
	);
}
