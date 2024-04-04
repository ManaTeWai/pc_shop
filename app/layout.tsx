import type { Metadata } from "next";
import './globals.css'
import styles from './page.module.css'
import { Header, Sidebar, Footer } from '../components'

export const metadata: Metadata = {
  title: "PC SHOP",
  description: "pc shop project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={styles.wrapper}>
        <Header className={styles.header} />
        <Sidebar className={styles.sidebar} />
        <div className={styles.body}>
          {children}
        </div>
        <Footer className={styles.footer} />
      </body>
    </html>
  );
}
