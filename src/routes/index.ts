import loadable from '@loadable/component'
import Layout from '@/layouts'
import { RouteConfig } from 'react-router-config'
import Home from '@/pages/home'

const routesConfig: RouteConfig[] = [
  {
    component: Layout,
    routes: [
      {
        path: '/',
        exact: true,
        component: Home
      },
      {
        path: '/user',
        component: loadable(() => import('@/pages/user')),
        routes: [
          {
            path: '/user/login',
            component: loadable(() => import('@/pages/user/login'))
          },
          {
            path: '/user/register',
            component: loadable(() => import('@/pages/user/register'))
          }
        ]
      },
      {
        path: '/my',
        component: loadable(() => import('@/pages/my'))
      }
    ]
  }
]

export default routesConfig
