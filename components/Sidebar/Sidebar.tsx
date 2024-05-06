import Link from 'next/link';
import { SidebarProps } from './Sidebar.props';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<ul>
				<li><Link href="/">Главная</Link></li>
				<li><Link href="/about">О Нас</Link></li>
				<li><Link href="/itt">ITT</Link></li>
			</ul>
		</div>
	);
};