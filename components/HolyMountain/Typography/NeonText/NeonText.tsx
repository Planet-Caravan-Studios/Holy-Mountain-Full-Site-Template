import styles from './styles.module.scss'
import styled from "styled-components";


export default function NeonText({ 
  //page vars
  children,
}) {
  return (
  	<span className={styles.NeonText}>
		  {children}
  	</span>
  	
  )
}
