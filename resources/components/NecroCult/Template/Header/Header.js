import styles from './Header.module.scss'
import Container from '@components/Template/Container/Container'
import Image from 'next/image'

import MasterCSS from '@components/Layout/MasterCSS/MasterCSS'

export default function Header({ title }) {
  return (
  	<header className={styles.header}>
  	  <MasterCSS/>
  	  <Container className={styles.container}>
  	    
  	    <div className={styles.contentLeft}>
              
  	      
              <div className={styles.title}>
                <h1 className="old_english">{title}</h1>
              </div>
  	    </div>
  
  	    <div className={styles.contentRight}>
  	      
  	    </div>
  	    
  	  </Container>
  	</header>
  )
}
