import styles from './ArticleHero.module.scss'
import styled from "styled-components";
import Container from '@components/Template/Container/Container'
import Texture from '@components/Textures/Texture/Texture'


const Hero = styled.section`
	background-image:url(${props => props.image || "/img/evil-dead-1.jpg"});
	background-position:${props => props.backgroundPosition || "center center"});
	background-size: cover;
`;


export default function ArticleHero({ 
  image,
  columnName,
  title,
  imageCredit
}) {
  return (
  	<Hero className={styles.ArticleHero} image={image}>
  		
  		<Texture option="8" opacity="0.65"/>

  		<div className={styles.imageCredit}>
  			<p>Image Credit: <span>{imageCredit}</span></p>
  		</div>

  		<div className={styles.Content}>
  			<h1 className={styles.heading}>
  				<p className={styles.columnName}>
  					{columnName}
  				</p>
  				<p className={styles.title}>
  					{title}
  				</p>
  			</h1>
  		</div>

  	</Hero>
  )
}
