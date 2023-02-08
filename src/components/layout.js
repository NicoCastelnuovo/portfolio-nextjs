import { Footer } from "./footer";
import { Header } from "./header";
import styles from '@/styles/layout.module.css'
import { Navigation } from "./navigation";

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />
        <Navigation />
        <Footer />
      </div>
      <main className={styles.main}>
        { children }
      </main>
    </div>
  )
};