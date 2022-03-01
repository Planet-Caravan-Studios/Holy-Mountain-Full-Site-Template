import styles from './Footer.module.scss'
import styled from "styled-components";
import Container from '@components/NecroCult/Layout/Container/Container'


export default function Footer({ 
  //props
}) {
  return (
    <footer id="Footer" className={styles.Footer} >
      <Container>
        Necro Cult Zine Footer
      </Container>
    </footer>
  )
}
