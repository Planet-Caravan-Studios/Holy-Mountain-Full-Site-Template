import styles from './ContentCardLarge.module.scss'
import styled from "styled-components";

const Cell = styled.article`

`;


export default function ContentCardLarge({ 
  image,
  tag,
  headline,
  bodyCopy,
  link
}) {
	return (
	<Cell className={styles.cell}>
		<div className={styles.inner}>

			<div className={styles.image}>
				<span className={styles.tag}>{tag}</span>
				<img src={image} alt="" />
			</div>

			<div className={styles.copy}>
				<header>{headline}</header>
				<p>{bodyCopy}</p>
				<a href={"/posts/" + link}>Read More</a>
			</div>

		</div>
	</Cell>
	)
}
