import styles from './Footer.module.scss'
import MasterJS from '@components/Layout/MasterJS/MasterJS'

export default function Footer({ footerMessage }) {
  return (
    <>
      <footer className={styles.footer}>
       <p className={styles.footer_message}>{footerMessage}</p>
      </footer>

      <MasterJS/>
    </>
  )
}
