import styles from './MobileNav.module.scss'
import styled from "styled-components";
import Container from '@components/Layout/Container/Container'



export default function MobileNav({ 
  //props
}) {
  return (
  	<nav id="MobileNav" className={styles.MobileNav} >
  		
  		<Container flex className={styles.upperNav}>
  			
  		</Container>	  

		<Container flex className={styles.mainNav}>

			<div className={styles.logoSection}>
				<a href="/" className={styles.logoMain}>
					<img src="/img/logo.png" alt="Necro Cult Zine logo"/>
				</a>
			</div>

			<div className={styles.linkSection}>
				<div className={styles.navButton}>
					<i className="fas fa-bars"></i>
				</div>
			</div>

		</Container>	  

	</nav>
  )
}
