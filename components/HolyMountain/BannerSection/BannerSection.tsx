import styles from './styles.module.scss'
import styled from "styled-components";
import Container from "@components/HolyMountain/Layout/Container";
import Button1 from "@components/HolyMountain/Buttons/Button1";


const Banner = styled.section`

  background-color: ${props => props.backgroundColor || "transparent" };
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-position: ${props => props.backgroundPosition || "center" };
  background-repeat: none;
  
`;


export default function BannerSection({ 
	children,
  classname,
  backgroundImage,
  backgroundColor,
  backgroundPosition,
  heading,
  body,
  ctaLink,
  ctaText,
}) {
  return (
  	<Banner className={styles.Banner} >
  		<Container className={styles.inner}>
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
  		</Container>

	</Banner>
  )
}
