import React, { useEffect } from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'
import { useHistory } from 'react-router-dom'
import { Toast } from 'antd-mobile'

const Layout: React.FC<RouteConfigComponentProps> = React.memo((props) => {
  const { route } = props
  const history = useHistory()
  const token = localStorage.getItem('token')
  const whiteList = ['/user/login', '/user/register']
  const { pathname } = history?.location
  if (!token && whiteList.indexOf(pathname) === -1) {
    Toast.show({
      content: '登录信息失效!',
      afterClose: () => history.replace('/user/login')
    })
  }
  return renderRoutes(route?.routes)
})

export default Layout
