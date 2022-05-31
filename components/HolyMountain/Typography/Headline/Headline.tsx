import styles from './styles.module.scss'
import styled from "styled-components";


export default function Headline({ 
  //page vars
  children
}) {
  return (
  	<span className={styles.Headline}>
  			{children}
  	</span>
  	
  )
}
