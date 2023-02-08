import Link from "next/link"
import styles from '@/styles/layout.module.css'

export const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/projects'}>Projects</Link>
      <Link href={'/contact'}>Contact</Link>
    </nav>
  )
}