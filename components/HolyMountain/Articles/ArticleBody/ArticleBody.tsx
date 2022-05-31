import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";


export default function ArticleBody({ 
  //props
  children,
  heroImage,
  headline,
}) {
  return (
    <div className={styles.outer} >
        <Container >
          <section className={styles.inner}>
            
            {children}

          </section>
        </Container>
    </div>
  )
}
