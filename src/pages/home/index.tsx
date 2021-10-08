import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.less'
import { InfiniteScroll, Loading } from 'antd-mobile'
import Block from '@/components/Block'
import Header from './components/header'
import Card from './components/card'
import { getDayList } from './service'
import { getDayListItem } from './types'

interface IHomeProps {
  title: string
  backurl?: string
}

const Home: React.FC<IHomeProps | any> = observer((props) => {
  const history = useHistory()
  const [dayList, setDayList] = useState<getDayListItem[]>([])
  const [hasMore, setHasMore] = useState(true)
  const { backurl, title } = props

  const counterStore = useStores('counterStore')
  const commonStore = useStores('commonStore')
  let page = 0
  const loadMore = useCallback(async () => {
    try {
      page = page + 1
      const result = await getDayList({ page })
      setDayList((dayList) => [...dayList, ...result?.data])
      setHasMore(result?.data.length === 10)
    } catch (error) {}
  }, [])

  const InfiniteScrollContent = ({ hasMore }: { hasMore?: boolean }) => {
    return (
      <div>
        {hasMore ? (
          <>
            <span>加载中</span>
            <Loading />
          </>
        ) : (
          <span>--- 我是有底线的 ---</span>
        )}
      </div>
    )
  }

  return (
    <Block>
      <Header />
      {dayList && dayList.length !== 0 && dayList.map((e) => <Card data={e} key={e?._id} />)}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </Block>
  )
})

export default Home
