import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

// const ClientMF2 = dynamic(() => import('client/Client').then((m) => m.Header), {
//   ssr: false
// })
const ClientMF2 = dynamic(() => import('client/Client'), {
  ssr: false
})

function Home() {
  return (
    <div className={styles.mainContent}>
      Remote pages or components should render here
      <br />
      <br />
      Client MF 2 rendered
      <br />
      <ClientMF2 />
    </div>
  )
}

export default Home
