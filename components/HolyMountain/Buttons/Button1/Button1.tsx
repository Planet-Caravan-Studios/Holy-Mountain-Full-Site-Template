import styles from './styles.module.scss'
import styled from "styled-components";

const Button = styled.a`
	
	&.sideMargin{
		margin: 0px 15px;
	}
	&.topMargin{
		margin: 35px 0px 0px;
	}

`;

export default function Button1({ 
	//page vars
	classname,
	children,
	href,
	newTab,
	extraClass,
	skew,
	modal,
	dataYoutubeId
}) {
  return (
  	<Button  
  		href={(href? href : "#")} 
  		className={classname +' '+ styles.Button1+' '+(extraClass? extraClass : "")} 
  		target={(newTab? "_blank" : "")}
  		data-modal={(modal? modal : "")}
  		data-youtube-id={(dataYoutubeId? dataYoutubeId : "")}
  	>
  		<span className={styles.inner}>{children}</span>
  	</Button>
  	
  )
}
