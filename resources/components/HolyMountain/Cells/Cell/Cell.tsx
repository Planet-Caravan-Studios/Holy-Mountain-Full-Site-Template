import styles from './styles.module.scss'
import styled from "styled-components";

const Outer = styled.div`
	width: calc(100% / ${props => props.columns || "1"}); 
	padding: ${props => props.padding || "25px"};
	display: flex;
	justify-content: center;
	align-items: center;

		@media only screen and (max-width : 1200px) { 
	  	width: 100%;
		}
  }

`;

const Inner = styled.div`
	max-width: ${props => props.cellInnerWidth || "650px"};
	display: flex;
	justify-content: center;
	align-items: center;
`;


export default function CellGrid({ 
	children,
  classname,
  columns,
  cellInnerWidth,
}) {
  return (
	  <Outer 
	    className={styles.cell, classname}
	    columns={columns}
	    cellInnerWidth={cellInnerWidth}
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
