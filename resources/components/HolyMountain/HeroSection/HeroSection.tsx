import styles from './styles.module.scss'
import styled from "styled-components";


const Hero = styled.section`
  background-image: ${props => props.background};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  

  &.screenHeight{
    height: 100vh;    
  }
`;

export default function HeroSection({ 
	children,
	background,

}) {
  return (
      <Hero >
        <div className="heroInner container">
          {children}
        </div>
      </Hero>
  )
}
