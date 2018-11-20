import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducers'
import middleware from './middleware'

const persistConfig = {
  key: '6448CA31EED565DB1F1B872BD1A8B',
  storage,
  whitelist: ['authedUser']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
const store = createStore(persistedReducer, middleware)
const persistor = persistStore(store)
export {
  store,
  persistor
}