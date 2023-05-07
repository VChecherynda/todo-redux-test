import { Page } from "./layout/Page"
import { Provider, store } from './store'

function App() {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

export default App
