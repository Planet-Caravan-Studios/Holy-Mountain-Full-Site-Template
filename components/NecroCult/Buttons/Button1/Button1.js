import styles from './Button1.module.scss'
import styled from "styled-components";

const Button = styled.a`
	&.skew1{
		transform: rotate(-1deg);

		span{
			transform: rotate(2deg);
		}
	}

	&.skew2{
		transform: rotate(-3deg);

		span{
			transform: rotate(1deg);
		}
	}

	&.skew3{
		transform: rotate(2deg);

		span{
			transform: rotate(-1deg);
		}
	}

	&.skew4{
		transform: rotate(1deg);

		span{
			transform: rotate(-3deg);
		}
	}
`;

export default function Button1({ 
  //page vars
  children,
  href,
  newTab,
  className,
  skew,
  modal,
  dataYoutubeId
}) {
  return (
  	<Button  
  		href={(href? href : "#")} 
  		className={styles.Button1+' '+className+' '+skew} 
  		target={(newTab? "_blank" : "")}
  		data-modal={(modal? modal : "")}
  		data-youtube-id={(dataYoutubeId? dataYoutubeId : "")}
  	>
  		<span className={styles.inner}>{children}</span>
  	</Button>
  	
  )
}
