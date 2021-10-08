import React from 'react'
import styles from './index.module.less'
import classNames from 'classnames'
import { Ellipsis } from 'antd-mobile'

interface CardProps {
  data: {
    title: string
    time: string
    status: number // 1:倒计日，2：累计日
    text: string
  }
}
const Card: React.FC<CardProps> = ({ data: { title, time, status, text } }) => {
  return (
    <div className={classNames(styles['list-box'])}>
      <div className={classNames(styles.title)}>
        <Ellipsis direction="end" content={title} />
      </div>
      <div className={classNames(styles.time)}>
        {status === 1 ? '目标日' : '起始日'}:{time}
      </div>
      <div className={classNames(styles.tags)}>
        <span>{status === 1 ? '倒计日' : '累计日'}</span>
      </div>
      <div className={classNames(styles.days)}>
        <div className={classNames(styles.day)}>Days</div>
        <span>{text}</span>
      </div>
    </div>
  )
}

export default Card
