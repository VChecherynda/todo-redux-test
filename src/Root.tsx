import { Page } from "./layout/Page"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, store, persistor } from './store'

function Root() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <Page />
       </PersistGate>
    </Provider>
  )
}

export default Root
