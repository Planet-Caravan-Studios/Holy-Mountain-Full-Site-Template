import React, { useState, useEffect } from 'react';
import styles from './DesktopNav.module.scss'
import Container from '@components/HolyMountain/Layout/Container'



export default function DesktopNav({ 
    //props
    title,
  }) {

  useEffect(() => {
    $(document).ready(function() {
      
      $("#DesktopNavButton").click(function(){
        //console.log("click");
        if($("#NavMenu").hasClass("active")){
          $("#NavMenu").removeClass("active");
          $("#NavMenuBackdrop").removeClass("active");
        }else{
          $("#NavMenu").addClass("active");
          $("#NavMenuBackdrop").addClass("active");
        }        
      });

      $(".navMenu_close").click(function(){
        //console.log("click");
        if($("#NavMenu").hasClass("active")){
          $("#NavMenu").removeClass("active");
          $("#NavMenuBackdrop").removeClass("active");
        }else{
          //do nothing
        }        
      });

    });
  });

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
  	      <div id="DesktopNavButton" className={styles.navButton}>
            <i className="fas fa-bars"></i>
          </div>
  	    </div>
  	    
  	  </Container>
  	</nav>
  )
}
