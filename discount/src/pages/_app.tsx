import { Navlinks, navlinks } from '@/navigation'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

interface LayoutComponent {
  children: ReactNode
  navlinks?: Navlinks[]
}

const Layout = dynamic<LayoutComponent>(() => import('layout/Layout'), { ssr: false })

// import Layout from 'layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout navlinks={navlinks}>
      <Component {...pageProps} />
    </Layout>
  )
}
