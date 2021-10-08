import React from 'react'
import { AddCircleOutline } from 'antd-mobile-icons'
import styles from './index.module.less'
import { useHistory } from 'react-router-dom'

const Header = () => {
  const history = useHistory()
  const handleClick = () => history.push('/days/edit')
  return (
    <div className={styles.box}>
      <div />
      <div />
      <div>
        <AddCircleOutline className={styles.icon} onClick={handleClick} />
      </div>
    </div>
  )
}

export default Header
