import styles from './Layout.module.scss'
import Head from 'next/head'
import MasterJS from '@components/HolyMountain/Layout/MasterJS/MasterJS'
import MasterCSS from '@components/HolyMountain/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/HolyMountain/Navigation/DesktopNav/DesktopNav'
//import MobileNav from '@components/HolyMountain/Navigation/MobileNav/MobileNav'
import NavMenu from '@components/HolyMountain/Navigation/NavMenu/NavMenu'
import Footer from '@components/HolyMountain/Navigation/Footer/Footer'



export default function Layout({ 
	//props
	children,
}) {
  return (
	<>
		<Head>
			<MasterCSS/>
		</Head>
		
		<div className={styles.OuterLayout}>
  			<NavMenu/>
  			<div className={styles.InnerLayout}>
  				<DesktopNav/>
  				<NavMenu/>
	  			{/*<MobileNav/>*/}
					{children}
					<Footer/>
  			</div>
		</div>
		<MasterJS/>
	</>
  )
}
