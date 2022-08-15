import styles from './Button.module.css'

export const Button = ({ size, variant, loading, fullWidth, children, ...props }: any) => {
  const classNameList = [styles.button]
  if (size) classNameList.push(styles[`size-${size}`])
  if (variant) classNameList.push(styles[`variant-${variant}`])
  if (loading) classNameList.push(styles['loading'])
  if (fullWidth) classNameList.push(styles['full-width'])
  const classNames = classNameList.join(' ')

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}
