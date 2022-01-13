import styles from './styles.module.scss'
import styled from "styled-components";



export default function CellGrid({ 
	children,
  classname,
  columns,
}) {
  return (
  	<div className={styles.cellGrid +" "+ classname} columns={columns} >
	  	{children}
		</div>
  )
}
