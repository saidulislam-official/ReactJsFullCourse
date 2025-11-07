// import '../styles/Header.css'
import styles from './Header.module.css'
import second from '../Button/Button.module.css'

export default function Header() {
  return (
    <div className={styles.header}>
        <h3>Hi, Steve</h3>
        <button className={second.btn}>Log in</button>
    </div>
  )
}
