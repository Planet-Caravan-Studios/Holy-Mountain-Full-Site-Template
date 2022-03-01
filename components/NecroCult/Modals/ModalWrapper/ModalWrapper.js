import styles from './ModalWrapper.module.scss'
import styled from "styled-components";
import $ from 'jquery'; 

import ModalOverlay from '@components/Modals/ModalOverlay/ModalOverlay'
import DefaultModal from '@components/Modals/DefaultModal/DefaultModal'
import VideoModal from '@components/Modals/VideoModal/VideoModal'

//import functions from '@components/Modals/ModalWrapper/functions.js'



export default function ModalWrapper({ 
  //page vars
}) {
return (
	<div className={styles.ModalWrapper}>

		<ModalOverlay className={styles.overlay}/>

		<DefaultModal className={styles.modal}/>
		<VideoModal className={styles.modal}/>
	</div>  	
)}