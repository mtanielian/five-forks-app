import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import authReducer from '../reducers/auth.reducer'

const reducers = combineReducers({
  auth: authReducer
})

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)


export const store = createStore(
  persistedReducer,
  applyMiddleware(thunk)

)
export const persistor = persistStore(store);