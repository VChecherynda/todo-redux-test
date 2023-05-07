import { Page } from "./layout/Page"
import { Provider } from 'react-redux'
import store from './store'
import './App.scss'

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

export default App
