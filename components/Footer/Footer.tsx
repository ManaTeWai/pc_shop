import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';
import { format } from 'date-fns';
import Link from 'next/link';

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props}>
			<p>MTW&apos;s_shop © 2024 - {format(new Date(), 'yyyy')} Все права защищены</p>
			<p><a href="#" target='_blank'>Пользовательское соглашение</a></p>
			<p><Link href='/about' target='_blank'>Политика конфиденциальности</Link></p>
		</footer>
	);
};