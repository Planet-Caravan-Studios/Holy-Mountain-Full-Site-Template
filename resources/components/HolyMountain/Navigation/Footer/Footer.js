import styles from './Footer.module.scss'
import styled from "styled-components";
import Container from '@components/HolyMountain/Layout/Container/Container'


export default function Footer({ 
  //props
}) {
  return (
    <footer id="Footer" className={styles.Footer} >
      <Container className={styles.container}>
        
        <div>
          Holy Mountain Frontend Framework
          <br/>
          Created by Planet Caravan Studios
        </div>

      </Container>
    </footer>
  )
}
