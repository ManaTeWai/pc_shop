import { FooterProps } from './Footer.props';
import styles from './Footer.module.css'

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<div className={styles.footer_bg} {...props}>
			<h1>Footer</h1>
		</div>
	);
};