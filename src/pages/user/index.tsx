import React from 'react'
import { RouteConfigComponentProps, renderRoutes } from 'react-router-config'

const User: React.FC<RouteConfigComponentProps> = ({ route }) => {
  return <>{renderRoutes(route?.routes)}</>
}

export default User
