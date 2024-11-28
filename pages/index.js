// pages/index.js
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>公司主页</title>
        <meta name="description" content="公司官网" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎来到我们的公司主页！
        </h1>

        <p className={styles.description}>
          这里是我们的最新产品和服务展示。
        </p>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 公司名</p>
      </footer>
    </div>
  )
}
