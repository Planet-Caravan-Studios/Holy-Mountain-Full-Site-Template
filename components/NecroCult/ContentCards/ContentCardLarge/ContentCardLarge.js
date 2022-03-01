import styles from './ContentCardSmall.module.scss'
import styled from "styled-components";

const Cell = styled.article`

  $breakpoint: ${props => props.breakpoint || "1200px"};

  background: ${props => props.backgroundLeft};
  background: ${props => props.backgroundRight};

  @media only screen and (max-width : 1200px) { 
    	min-height: 50vw;
    }

  &.fixedWidth{
    width: ${props => props.fixedWidth || "50%"};
    @media only screen and (max-width : 1200px) { 
    	width: 100%;
    }
  }

  &.dynamicWidth{
	width: calc(100% -  ${props => props.fixedWidth});
	@media only screen and (max-width : 1200px) { 
		width: 100%;
	}
  }

`;


export default function ContentCardSmall({ 
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
