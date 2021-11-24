import styles from './MultiPartSlider.module.scss'
import styled from "styled-components";

import BlogListing from '@components/BlogListing/BlogListing'


// import Swiper core and required modules
import React, { useState } from 'react';
import SwiperCore, { Navigation, Pagination, A11y, Autoplay, Controller } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';



// install Swiper modules
SwiperCore.use([Navigation, Pagination, A11y, Autoplay, Controller]);




export default function MultiPartSlider({ 
  //page vars
}) {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  return (
	<div className={styles.wrapper}>

		<Swiper 
			className={styles.ContentSlider}
			onSwiper={setFirstSwiper} 
			controller={{ control: secondSwiper }}
			spaceBetween={100}
			slidesPerView={1}
			loop={true}
			speed={500}
			pagination={{ clickable: true }}
		>
			
			<SwiperSlide>
				<div className={styles.SlideInner}>
					<BlogListing
			        		postUrl = "#test"
			        		postImage = "/img/morbid.jpg"
			        		postAlbumCredit = "Morbid - Year of The Goat"
			        		postColumn = "Tales From The Basement"
			        		postHeadline = "Morbid - Year of The Goat"
			        		postSnippet = "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
			        	/>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className={styles.SlideInner}>
					<BlogListing
			        		postUrl = "#test"
			        		postImage = "/img/morbid.jpg"
			        		postAlbumCredit = "Morbid - Year of The Goat"
			        		postColumn = "Tales From The Basement"
			        		postHeadline = "Morbid - Year of The Goat"
			        		postSnippet = "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
			        	/>
				</div>
			</SwiperSlide>

			<SwiperSlide>
				<div className={styles.SlideInner}>
					<BlogListing
			        		postUrl = "#test"
			        		postImage = "/img/morbid.jpg"
			        		postAlbumCredit = "Morbid - Year of The Goat"
			        		postColumn = "Tales From The Basement"
			        		postHeadline = "Morbid - Year of The Goat"
			        		postSnippet = "It has only been a few hours since I've translated and spoke aloud the first of the demon resurrection passages from the Book of the Dead"
			        	/>
				</div>
			</SwiperSlide>

		</Swiper>

		<Swiper 
			className={styles.CopySlider}
			onSwiper={setSecondSwiper} 
			controller={{ control: firstSwiper }}
			spaceBetween={100}
			slidesPerView={1}
			loop={true}
			speed={500}
			navigation={{ clickable: true }}
		>
			
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 1
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 2
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className={styles.SlideInner}>
					Slide 3
				</div>
			</SwiperSlide>

		</Swiper>

	</div>
  	
  )
}
