import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h2>Home page</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting 
        industry. Lorem Ipsum has been the industry's standard dummy text 
        ever since the 1500s, when an unknown printer took a galley of t
        ype and scrambled it to make a type specimen book. It has survived 
        not only five centuries, but also the leap into electronic t
        ypesetting, reing essentially unchanged. It was popularised i
        n the 1960s with the release of Letraset sheets containing Lorem.
      </p>
    </>
  )
}
