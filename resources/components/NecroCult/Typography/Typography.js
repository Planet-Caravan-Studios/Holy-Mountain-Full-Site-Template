import styles from './Typography.module.scss'
import styled from "styled-components";

const Wrapper = styled.div`
	
`;


export default function Typography({ 
  //page vars
}) {
  return (
<>
	<Wrapper 
		className={styles.wrapper} 
	>
		<ul>
			<li className={styles.old_english + " old_english"} >
				Display Font: <span>AncientMedium</span>
			</li>
			<li className={styles.labelmaker + " labelmaker"}>
				Alt Font: <span>Impact Label</span>
			</li>
			<li className={styles.typewriter + " typewriter"}>
				Body Font: <span>MyUnderwood</span>
			</li>
		</ul>
	</Wrapper>

	<Wrapper 
		className={styles.wrapper} 
	>
		<ul>
			<li className={styles.heading + " old_english"} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead + " old_english"}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body + " old_english"}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail + " old_english"}>
				Font Size: <span>Detail</span>
			</li>
		</ul>

		<ul>
			<li className={styles.heading + " labelmaker"} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead + " labelmaker"}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body + " labelmaker"}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail + " labelmaker"}>
				Font Size: <span>Detail</span>
			</li>
		</ul>

		<ul>
			<li className={styles.heading + " typewriter"} >
				Font Size: <span>Heading</span>
			</li>
			<li className={styles.subhead + " typewriter"}>
				Font Size: <span>Subhead</span>
			</li>
			<li className={styles.body + " typewriter"}>
				Font Size: <span>Body</span>
			</li>
			<li className={styles.detail + " typewriter"}>
				Font Size: <span>Detail</span>
			</li>
		</ul>
	</Wrapper>
</>
  )
}
