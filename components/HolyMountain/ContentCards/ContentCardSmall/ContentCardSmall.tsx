import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";
import Button1 from "@components/HolyMountain/Buttons/Button1";


const Card = styled.div`

  background-color: ${props => props.backgroundColor || "transparent" };
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: ${props => props.backgroundPosition || "center" };
  background-repeat: no-repeat;
  
  height: 100%;
  
`;

const Image = styled.div`
  
`;

const Text = styled.div`
  color: ${props => props.theme.colors.black};

	@media only screen and (max-width : 1200px) { 
  	min-height: none;
	}
`;

const Link = styled.div`
	  
`;


export default function ContentCardSmall({ 
	children,
  classname,
  image,
  imageAlt,
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
  			<Image className={styles.image}>
  				<img src={image} alt={imageAlt && imageAlt || ""} />
  			</Image>
  		}

  		<Text className={styles.text}>
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
			</Text>
			
			<Link className={styles.link}>
				{ctaLink && 
	        <Button1 
	        	className={styles.cta +' button'} 
	        	href={ctaLink}>
	        	{ctaText}
	        </Button1>
	      }
			</Link >
				
  		
			

	</Card>
  )
}
