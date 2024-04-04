import { HeaderProps } from './Header.props';
import styles from './Header.module.css'

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
	return (
		<div className={styles.header_bg} {...props}>
			<h1>Header</h1>
		</div>
	);
};