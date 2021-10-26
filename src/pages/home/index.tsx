import { useStores } from '@/hooks'
import { observer } from 'mobx-react'
import React, { useEffect, useState, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import styles from './index.module.less'
import { InfiniteScroll, Loading, SwipeAction, Dialog, Toast } from 'antd-mobile'
import Block from '@/components/Block'
import Header from './components/header'
import Card from './components/card'
import { getDayList, deteleDay } from './service'
import { getDayListItem } from './types'
import './index.less'
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
  const loadMore = useCallback(async (p = false) => {
    try {
      page = page + 1
      if (p) {
        page = 1
        const result = await getDayList({ page })
        setDayList(result?.data)
        setHasMore(result?.data.length === 10)
      } else {
        const result = await getDayList({ page })
        setDayList((dayList) => [...dayList, ...result?.data])
        setHasMore(result?.data.length === 10)
      }
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

  const handleDel = async (id: string) => {
    try {
      const result = await Dialog.confirm({
        title: '提示',
        content: '确定删除吗?'
      })
      if (result) {
        await deteleDay({ id })
        await loadMore(true)
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <Block>
      <Header />
      {dayList &&
        dayList.length !== 0 &&
        dayList.map((e) => (
          <SwipeAction
            key={e?._id}
            rightActions={[
              {
                key: 'primary',
                text: '编辑',
                color: 'primary',
                onClick: () => history.push(`/days/edit?id=${e?._id}`)
              },
              {
                key: 'delete',
                text: '删除',
                color: 'danger',
                onClick: () => handleDel(e?._id)
              }
            ]}
          >
            <Card data={e} />
          </SwipeAction>
        ))}
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore}>
        <InfiniteScrollContent hasMore={hasMore} />
      </InfiniteScroll>
    </Block>
  )
})

export default Home
