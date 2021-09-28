import React from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
import { Ellipsis } from 'antd-mobile'

const Card = () => {
  return (
    <div className={classNames(styles['list-box'])}>
      <div className={classNames(styles.title)}>
        <Ellipsis
          direction="end"
          content="咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚咚"
        />
      </div>
      <div className={classNames(styles.time)}>目标日:2021-09-22</div>
      <div className={classNames(styles.tags)}>
        <span>累计日</span>
        {/* <span>倒计日</span> */}
      </div>
      <div className={classNames(styles.days)}>
        <div className={classNames(styles.day)}>Days</div>
        <span>300天</span>
      </div>
    </div>
  )
}

export default Card
