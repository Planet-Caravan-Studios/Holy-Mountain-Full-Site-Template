import styles from './BlogListing.module.scss'
import styled from "styled-components";
//import Texture from '../../Textures/Texture/Texture'



export default function BlogListing({ 
  //page vars
  postUrl,
  postImage,
  postAlbumCredit,
  postColumn,
  postHeadline,
  postSnippet,
  postDate,
  reverse
}) {
  return (
	<article className={styles.blogListing +" "+ (reverse ? styles.reverse : " ")} >

		<div className={styles.image}>
			<a href={postUrl}>
			<img className="" src={postImage} alt={postAlbumCredit} />
			</a>
			<span className={styles.imageCredit + " labelmaker"}>{postAlbumCredit}</span>
		</div>


		<div className={styles.copy + " "}>
			<div className={styles.inner}>

				<div className={styles.title }>
					<p className={styles.columnName}>
						{postColumn}
					</p>
					<a className={styles.titleMain} href={"/posts/"+postUrl}>
						{/*<Texture option="8"/>*/}
						{postHeadline}
					</a>
				</div>

				<div className={styles.snippet }>
					{/*<Texture option="8"/>*/}
					<p>{postSnippet}...</p>
					<a className={styles.readMore} href={"/posts/"+postUrl}>
						Read More
					</a>
				</div>

			</div>
		</div>

	</article>
  )
}
