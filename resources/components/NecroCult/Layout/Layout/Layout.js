import styles from './Layout.module.scss'
import Head from 'next/head'
import MasterJS from '@components/NecroCult/Layout/MasterJS/MasterJS'
import MasterCSS from'@components/NecroCult/Layout/MasterCSS/MasterCSS'
import DesktopNav from '@components/NecroCult/Navigation/DesktopNav/DesktopNav'
import MobileNav from '@components/NecroCult/Navigation/MobileNav/MobileNav'
import NavMenu from '@components/NecroCult/Navigation/NavMenu/NavMenu'
import Footer from '@components/NecroCult/Navigation/Footer/Footer'
import FilmGrainFilter from '@components/NecroCult/FilmGrainFilter/FilmGrainFilter'
import Texture from '@components/NecroCult/Texture/Texture/Texture'



export default function Layout({ 
	//props
	children
}) {
  return (
	<>
		<Head>
			<MasterCSS/>
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"  />
		</Head>
		
		<FilmGrainFilter/>
		<div className={styles.OuterLayout}>
			{/*<Texture option="3" opacity="0.75"/>*/}
			<NavMenu/>
			<div className={styles.InnerLayout}>
				<DesktopNav/>
  			{/*<MobileNav/>*/}
				{children}
				<Footer/>
			</div>
		</div>
		{/*<MasterJS/>*/}
		<>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossOrigin="anonymous"></script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/headroom.min.js" integrity="sha512-9UsrKTYzS9smDm2E58MLs0ACtOki+UC4bBq4iK5wi7lJycwqcaiHxr1bdEsIVoK0l5STEzLUdYyDdFQ5OEjczw==" crossOrigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/headroom/0.12.0/jQuery.headroom.min.js" integrity="sha512-3zxNImEhQ2pnOSHdyGCCJhpMrU35j7UgnlycU/sLnbsdmcH+pXm9bR9htu6p6ggqx6b5VEKeinajKDpUW7LuTQ==" crossOrigin="anonymous"></script>

			<script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/js/all.js" integrity="sha512-AsoAG+OFcSvtqlspW166UTUYg7F4GEu0yNhzTIRfOGysIQA8Dqk1WZwyoN4eX6mX4DaSk703Q1iM0M47rw25Kw=="></script>

			<script src="/scripts/main.js"></script>
		</>
	</>
  )
}
