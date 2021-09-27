import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './index.module.less'
import { Button, Space } from 'antd-mobile'

interface IHomeProps {
  title: string
  backurl?: string
}

const Home: React.FC<IHomeProps | any> = observer((props) => {
  const { backurl, title } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')

  return (
    <Space wrap>
      <Button
        onClick={() => {
          alert('hello.')
        }}
      >
        Default
      </Button>
      <Button color="primary">Primary</Button>
      <Button color="success">Success</Button>
      <Button color="danger">Danger</Button>
      <Button color="warning">Warning</Button>
    </Space>
  )
})

export default Home
