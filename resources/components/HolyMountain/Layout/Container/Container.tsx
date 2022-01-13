import styles from './Container.module.scss'

export default function Container({ 
	children,
  className,
	containerSize, 
	flex,
}) {
  return (
      <div className={ className +' '+styles.container + (flex ? ' '+styles.flex: '') }>
        {children}
      </div>
  )
}
