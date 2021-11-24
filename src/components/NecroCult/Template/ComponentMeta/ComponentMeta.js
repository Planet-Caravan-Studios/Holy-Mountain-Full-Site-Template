import styles from './ComponentMeta.module.scss'

export default function ComponentMeta({ 
  title,
  author,
  authorTeam,
  description,
  contentProps,
  libraries,
}) {
  return (
  <div className={styles.descriptionWrapper}>
  	

	<div className={styles.row}>
		<div className={styles.cell +' '+ styles.title}>
			<ul className={styles.inner}>
				<li className={styles.title}>
					<span>Component:</span> 
					{title}
				</li>
				<li className={styles.author}>
					<span>Developer:</span> 
					{author}<br/>
					{authorTeam}
				</li>
			</ul>
		</div>
	
		<div className={styles.cell +' '+ styles.description}>
			<ul className={styles.inner}>
				<li className={styles.description}>
					<span>Description:</span> 
					{description}
				</li>
			</ul>
		</div>
	</div>

	<div className={styles.row}>
		<div className={styles.cell +' '+ styles.contentProps}>
			<ul className={styles.inner}>
				<li className={styles.props}>
					<span>Available Props:</span> 
				</li>
				{/*{contentProps}*/}
				<div dangerouslySetInnerHTML={{__html: contentProps}}></div>
			</ul>
		</div>
	
		<div className={styles.cell +' '+ styles.libraries}>
			<ul className={styles.inner}>
				<li className={styles.libraries}>
					<span>Libraries Used:</span> 
				</li>
				{/*{libraries}*/}
				<div dangerouslySetInnerHTML={{__html: libraries}}></div>
			</ul>
		</div>
	</div>
    
    
  </div>
  )
}
