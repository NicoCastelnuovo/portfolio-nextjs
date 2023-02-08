import { Layout } from '@/components/layout'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Lentille portfolio website</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Add shared info which regard all the pages */}
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
