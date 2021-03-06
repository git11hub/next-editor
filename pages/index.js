import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MyEditor from './MyEditor'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <h2>Lets build draft editor</h2> */}
      <MyEditor/>
    </div>
  )
}
