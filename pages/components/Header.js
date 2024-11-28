// components/Header.js
import styles from './Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img src="/logo.png" alt="公司 Logo" width={100} />
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><a href="#home">首页</a></li>
          <li><a href="#products">产品</a></li>
          <li><a href="#services">服务</a></li>
          <li><a href="#about">关于我们</a></li>
          <li><a href="#contact">联系我们</a></li>
        </ul>
      </nav>
    </header>
  )
}
