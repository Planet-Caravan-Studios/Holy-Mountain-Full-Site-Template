import styles from './Container.module.scss'

export default function Container({ 
	children,
	containerSize, 
	flex,
  className
}) {
  return (
      <div className={ className +' '+styles.container + (flex ? ' '+styles.flex: '') }>
        {children}
      </div>
  )
}
