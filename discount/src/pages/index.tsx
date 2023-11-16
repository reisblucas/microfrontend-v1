import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>We are rendering DISCOUNT - MF3</h1>
      </div>
    </main>
  )
}
