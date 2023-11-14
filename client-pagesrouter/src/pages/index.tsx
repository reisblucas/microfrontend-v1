import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useRouter } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter()

  return (
    <>
      This is a CLIENT Router Pages MF
      <br />
      <button onClick={() => router.push('/client-profile')}>Go to client profile</button>
    </>
  )
}
