import styles from './styles.module.scss'
import styled from "styled-components";
import Button1 from "@components/HolyMountain/Buttons/Button1";


const Cell = styled.div`

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


export default function FixedSplit({ 
	children,
  classname,
	
  fixedLeft,
  fixedRight,
  fixedWidth,

  backgroundLeft,
  contentLeft,
  headingLeft,
  bodyLeft,
  ctaLinkLeft,
  ctaTextLeft,

  backgroundRight,
  contentRight,
  headingRight,
  bodyRight,
  ctaLinkRight,
  ctaTextRight,
}) {
  return (
  	<div className={styles.cellWrapper} >
  		
	  <Cell 
			className={ styles.cell + (fixedLeft ? " fixedWidth " : " dynamicWidth ") }
			backgroundLeft={backgroundLeft}
			fixedWidth={fixedWidth}
	  >
		
		{contentLeft && 
			<div className={styles.inner}>
				
				{headingLeft && 
					<h2 className={styles.heading}>
						{headingLeft}
					</h2>
				}

				{bodyLeft && 
					<p className={styles.body}>
						{bodyLeft}
					</p>
				}

				{ctaLinkLeft && 
          <Button1 
          	className={styles.cta +' button'} 
          	href={ctaLinkLeft}>
          	{ctaTextLeft}
          </Button1>
        }
				
			</div>
		}
	
	  </Cell>

	  <Cell 
	    className={ styles.cell + (fixedRight? " fixedWidth " : " dynamicWidth ") }
	    backgroundRight={backgroundRight}
	    fixedWidth={fixedWidth}
	  >

	    {contentRight && 
  			<div className={styles.inner}>
  				
  				{headingRight && 
  					<h2 className={styles.heading}>
  						{headingRight}
  					</h2>
  				}

  				{bodyRight && 
  					<p className={styles.body}>
  						{bodyRight}
  					</p>
  				}

  				{ctaLinkRight && 
            <Button1 
            	className={styles.cta} 
            	href={ctaLinkRight}>
            	{ctaTextRight}
            </Button1>
          }
  				
  			</div>
  		}

	  </Cell>

	</div>
  )
}
