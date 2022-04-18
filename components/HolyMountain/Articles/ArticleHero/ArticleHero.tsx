import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";
import Button1 from "@components/HolyMountain/Buttons/Button1";



const Hero = styled.section`
  background: url("${props => props.background}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  &.screenHeight{
    height: 100vh;    
  }
`;

export default function ArticleHero({ 
  children,
  classname,
  background,
  headline,
  subhead,
  body,
  ctaLink,
  ctaText,
}) {
  return (
      <Hero className={classname +' '+ styles.ArticleHero} background={background}>
        <Container className={styles.inner + " container"}>
          {headline && 
            <h1 className={styles.headline}>{headline}</h1>
          }
          
          {subhead && 
            <p className={styles.subhead}>{subhead}</p>
          }

          {body && 
            <p className={styles.body}>{body}</p>
          }
          {ctaLink && 
            <Button1 
              className={styles.cta +' button'}
              extraClass="topMargin" 
              href={ctaLink}>{ctaText}
            </Button1>
          }
        </Container>
      </Hero>
  )
}
