import Image from 'next/image';
import { Htag, P } from '../../../components';
import styles from './page.module.css'

export default function productPage() {
	return (
		<div className={styles.product_page_container}>
			<Htag tag='h1'>Самый лучший в мире компьютер</Htag>
			<div className={styles.important}>
				<div className={styles.images}>
					<Image src="/images/pc1.jpeg" alt='pc1' width={250} height={150}></Image>
				</div>
				<div className={styles.specifications}>
					<P>Характеристики самого лучшего в мире пк</P>
				</div>
			</div>
			<div className={styles.not_important}>
				<P>Описание самого лучшего в мире пк</P>
			</div>
		</div>
	);
}