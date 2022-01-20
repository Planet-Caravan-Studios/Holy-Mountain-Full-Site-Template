import styles from './styles.module.scss'
import styled from "styled-components";

const Outer = styled.div`
	width: ${props => props.cellOuterWidth || "100%"}; 
	padding: ${props => props.padding || "25px"};
	display: flex;
	justify-content: center;
	align-items: center;

		@media only screen and (max-width : 1200px) { 
	  	width: 100%;
		}

`;

const Inner = styled.div`
	max-width: ${props => props.cellInnerWidth || "100%"};
	display: flex;
	justify-content: center;
	align-items: center;
`;


export default function Cell({ 
	children,
  classname,
  cellOuterWidth,
  cellInnerWidth,
}) {
  return (
	  <Outer 
	    className={styles.cell +" "+ classname}
	    cellOuterWidth={cellOuterWidth}
	  >
      <Inner 
      	className={styles.inner} 
      	cellInnerWidth={cellInnerWidth}
      >
      	{children}
      </Inner>
	  </Outer>
  )
}
