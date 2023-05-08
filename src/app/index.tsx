import { IssuePage } from "../pages/IssuePage"
import { PersistGate } from 'redux-persist/integration/react'
import { Provider, store, persistor } from './store'

function Root() {
  return (
    <Provider store={store}>
       <PersistGate loading={null} persistor={persistor}>
          <IssuePage />
       </PersistGate>
    </Provider>
  )
}

export default Root
