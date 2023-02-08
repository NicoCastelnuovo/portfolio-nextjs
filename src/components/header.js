import Link from "next/link"
import { MenuButton } from "./menu-button"
import styles from '@/styles/layout.module.css'

export const Header = ({ isMenuActive, setIsMenuActive }) => {
  return (
    <header className={styles.header}>
      <h1>Logo</h1>
    </header>
  )
}


