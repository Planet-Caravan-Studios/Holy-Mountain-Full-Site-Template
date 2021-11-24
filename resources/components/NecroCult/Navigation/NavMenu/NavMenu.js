import styles from './NavMenu.module.scss'
import styled from "styled-components";



export default function NavMenu({ 
  //props
}) {
  return (
  	<nav id="NavMenu" className={styles.NavMenu} >
  		<div className={styles.inner}>
  			
  			<div className={styles.buttonSection}>
  				<div className={styles.modalClose + " modal_close"}>
  					<img src="/img/graphics/x-1.png" alt=""/>
  				</div>
  			</div>

  			<div className={styles.logoSection}>
  				<a className={styles.logoLink} href="/" >
  					<img src="/img/logo.png" alt="Logo"/>
  				</a>
  			</div>

  			<div className={styles.linkSection}>
  				<ul className="nolist vertical">
  					<li className={styles.linkCell}>
  						<a href="/">Home</a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href="/">Articles</a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href="/">News</a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href="">About</a>
  					</li>
  				</ul>
  			</div>

  			<div className={styles.socialSection}>
  				<ul className="nolist">
  					<li className={styles.linkCell}>
  						<a href="/"><i className="fab fa-facebook"></i></a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href="/"><i className="fab fa-instagram"></i></a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href="/"><i className="fas fa-code"></i></a>
  					</li>
  					<li className={styles.linkCell}>
  						<a href=""><i className="fab fa-github"></i></a>
  					</li>
  				</ul>
  			</div>

  		</div>
	</nav>
  )
}
