import styles from './DesktopNav.module.scss'
import Container from '@components/HolyMountain/Layout/Container/Container'

export default function DesktopNav({ 
    //props
    title,
  }) {
  return (
  	<nav className={styles.DesktopNav}>
  	  <Container className={styles.container}>
  	    
  	    <div className={styles.contentLeft}>
              
              <a className={styles.logo} href="/">
                <img
                 src="/images/hm-logo-small.png"
                 alt="Holy Mountain Logo"
               />
              </a>
  	      
              <div className={styles.title}>
                <h1 className="computerfont">
                  Holy Mountain Framework
                </h1>
              </div>

  	    </div>
  
  	    <div className={styles.contentRight}>
  	      
  	    </div>
  	    
  	  </Container>
  	</nav>
  )
}
