import { combineReducers, createStore as _createStore } from 'redux'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'

import auth from 'src/auth/state/reducer'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth']
}

export const createStore = () => {
    const reducer = combineReducers({auth})

    const persistedReducer = persistReducer(persistConfig, reducer)

    const devTool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

    const store = _createStore(persistedReducer, devTool && devTool())
    const persistor = persistStore(store)

    return {store, persistor}
}
