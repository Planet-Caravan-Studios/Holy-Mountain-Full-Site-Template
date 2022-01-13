import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";
import Button1 from "@components/HolyMountain/Buttons/Button1";


const Card = styled.div`

  background-color: ${props => props.backgroundColor || "transparent" };
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: ${props => props.backgroundPosition || "center" };
  background-repeat: none;
  
`;


export default function ContentCardSmall({ 
	children,
  classname,
  image,
  backgroundImage,
  backgroundColor,
  backgroundPosition,
  heading,
  body,
  ctaLink,
  ctaText,
}) {
  return (
  	<Card className={styles.Card} backgroundColor={backgroundColor} >

  		{image && 
  			<div className={styles.image}>
  				<img src={image} alt={imageAlt && imageAlt || ""} />
  			</div>
  		}

  		<div className={styles.text}>
				{heading && 
					<h2 className={styles.heading}>
						{heading}
					</h2>
				}

				{body && 
					<p className={styles.body}>
						{body}
					</p>
				}

				{ctaLink && 
	        <Button1 
	        	className={styles.cta +' button'} 
	        	href={ctaLink}>
	        	{ctaText}
	        </Button1>
	      }
  		</div>
			

	</Card>
  )
}
