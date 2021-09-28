import React from 'react'
import { AddCircleOutline } from 'antd-mobile-icons'
import styles from './index.module.less'

const Header = () => {
  return (
    <div className={styles.box}>
      <div />
      <div />
      <div>
        <AddCircleOutline className={styles.icon} />
      </div>
    </div>
  )
}

export default Header
