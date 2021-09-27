import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, useHistory } from 'react-router-dom'
import { Provider } from 'mobx-react'
import '@/styles/global.less'
import { renderRoutes } from 'react-router-config'
import routes from './routes'
import stores from '@/stores'
import 'lib-flexible/flexible'

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Provider stores={stores}>
        <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
      </Provider>
    </React.StrictMode>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
