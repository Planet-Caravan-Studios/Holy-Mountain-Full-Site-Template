import styles from './BodyWrapper.module.scss'
import styled from "styled-components";

const Wrapper = styled.div`

  $breakpoint: ${props => props.breakpoint || "1200px"};

  


`;


export default function BodyWrapper({ 
  children,
  pageTransform,
}) {
  return (
  	<Wrapper className={styles.bodyWrapper} >
  		{children}
	</Wrapper>
  )
}
