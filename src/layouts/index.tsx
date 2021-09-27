import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

const Layout: React.FC<RouteConfigComponentProps> = React.memo(function Layout(props) {
  const { route } = props
  console.log('hybird layout')
  return renderRoutes(route?.routes)
})

export const H5Layout: React.FC<RouteConfigComponentProps> = React.memo(function H5Layout(props) {
  const { route } = props

  return <>{renderRoutes(route?.routes)}</>
})

export default Layout
