import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Router from 'next/router'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      This is a CLIENT Router Pages MF
      <button onClick={() => Router.push('/client-profile')}></button>
    </>
  )
}
