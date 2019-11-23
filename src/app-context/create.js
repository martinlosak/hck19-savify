import io from 'socket.io-client'
import { createStore } from 'src/state/create'
import { PubSub } from 'src/msg/PubSub'
import AuthService from 'src/auth/AuthService'

export const createContext = () => {

    const {store, persistor} = createStore()

    const pubSub = PubSub()

    pubSub.onAny(store.dispatch)
    return {
        store,
        persistor,
        pubSub,
        auth: AuthService(({pubSub}))
    }

}
