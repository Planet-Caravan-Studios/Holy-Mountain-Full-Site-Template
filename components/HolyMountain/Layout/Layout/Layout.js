import React, { useState, useEffect } from 'react';
import styles from './Layout.module.scss'
import Head from 'next/head'
import MasterJS from '@components/HolyMountain/Layout/MasterJS/MasterJS'
import MasterCSS from '@components/HolyMountain/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/HolyMountain/Navigation/DesktopNav/DesktopNav'
//import MobileNav from '@components/HolyMountain/Navigation/MobileNav/MobileNav'
import NavMenu from '@components/HolyMountain/Navigation/NavMenu/NavMenu'
import Footer from '@components/HolyMountain/Navigation/Footer/Footer'
import ModalWrapper from '@components/HolyMountain/Modals/ModalWrapper/ModalWrapper'



export default function Layout({ 
	//props
	children,
}) {

	useEffect(() => {
		$(document).ready(function() {
			//js code
		});
	});

  return (
	<>
		<MasterCSS/>
		<div className={styles.OuterLayout}>
  			<NavMenu/>
  			<div className={styles.InnerLayout}>
  				<DesktopNav/>
	  			{/*<MobileNav/>*/}
				{children}
				<Footer/>
  			</div>
		</div>
		<ModalWrapper/>
		<MasterJS/>
	</>
  )
}
