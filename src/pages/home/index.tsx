import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.less'
import { Button, Space } from 'antd-mobile'
import Block from '@/components/Block'
import Header from './components/header'
import Card from './components/card'
interface IHomeProps {
  title: string
  backurl?: string
}

const Home: React.FC<IHomeProps | any> = observer((props) => {
  const history = useHistory()
  const { backurl, title } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')

  return (
    <Block>
      <Header />
      <Card />
    </Block>
  )
})

export default Home
