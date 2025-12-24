import { Heading } from '../../components/Heading/Heading';
import Search from '../../components/Search/Search.tsx';
import cn from 'classnames';
import styles from './Menu.module.css';
import Card from '../../components/Card/Card.tsx';

export function Menu() {
	return (
		<>
			<div className={cn(styles['head'])}>
				<Heading>Menu</Heading>
				<Search />
			</div>
			<div>
				<Card />
			</div>
		</>
	);
}
