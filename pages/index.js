// pages/index.js
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>公司主页</title>
        <meta name="description" content="公司官网" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <h1 className={styles.title}>
          欢迎来到我们的公司主页！
        </h1>

        <p className={styles.description}>
          这里是我们的最新产品和服务展示。
        </p>

        <div className={styles.features}>
          <div className={styles.featureItem}>
            <h2 className={styles.featureTitle}>产品 A</h2>
            <p>这里是产品 A 的简介。它具有极高的性能和稳定性。</p>
          </div>
          <div className={styles.featureItem}>
            <h2 className={styles.featureTitle}>服务 B</h2>
            <p>服务 B 提供快速可靠的解决方案，适用于各类需求。</p>
          </div>
          <div className={styles.featureItem}>
            <h2 className={styles.featureTitle}>解决方案 C</h2>
            <p>解决方案 C 能够帮助您的公司实现数字化转型。</p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
