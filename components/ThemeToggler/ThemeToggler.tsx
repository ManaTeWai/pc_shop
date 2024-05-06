'use client'

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './ThemeToggler.module.css';

export const ThemeToggler = (): JSX.Element => {
	const [theme, setTheme] = useState(() => {
		if (typeof window !== 'undefined') {
			// При загрузке компонента проверяем значение темы в localStorage
			const savedTheme = localStorage.getItem('theme');
			return savedTheme || 'light'; // Если значение не найдено, используем светлую тему по умолчанию
		}
		return 'light';
	});

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
	};

	return (
		<button onClick={toggleTheme} className={styles.themeButton}>
			{theme === 'light' ? (
				<Image src="/images/theme_light.png" alt="Светлая тема" width={24} height={24} className={styles[theme]} />
			) : (
				<Image src="/images/theme_dark.png" alt="Темная тема" width={24} height={24} className={styles[theme]} />
			)}
		</button>
	);
};
