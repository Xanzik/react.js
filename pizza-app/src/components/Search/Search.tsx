import { forwardRef } from 'react';
import styles from './Search.module.css';
import cn from 'classnames';
import type { SearchProps } from './Search.props.ts';

const Search = forwardRef<HTMLInputElement, SearchProps>(function Input(
	{ isValid = true, className, ...props },
	ref,
) {
	return (
		<div className={cn(styles['search-wrapper'])}>
			<input
				ref={ref}
				className={cn(styles['input'], className, {
					[styles['invalid']]: isValid,
				})}
				placeholder="Введите блюдо или состав"
				{...props}
			/>
			<img className={cn(styles['search-icon'])} src="/search-icon.svg" alt="search" />
		</div>
	);
});

export default Search;
