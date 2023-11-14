import { Inter } from 'next/font/google'
import styles from './layout.module.css'
import { Footer, Header, Logo, Navbar } from '.'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const metadata = {
  title: 'Shell/Host - MF1 - Layout',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={inter.className}>
      <Head>
        <title>{metadata.title}</title>
        <meta content={metadata.description} />
      </Head>

      <div className={styles.containerHero}>
        <div className={styles.sidebar}>
          <Logo />
          <Navbar />
        </div>
        <div className={styles.pageContainer}>
          <Header />
          <main className={styles.mainContainer}>{children}</main>
          <Footer />
        </div>
        H H
      </div>
    </div>
  )
}