import AuthApi from 'src/auth/AuthApi'
import { loggedIn } from 'src/auth/msg'

class AuthService {

    constructor ({pubSub}) {
        this.api = AuthApi()
        this.pubSub = pubSub
    }

    logIn = ({username, password}) =>
        this.api.logIn({username, password})
            .then(loggedIn)
            .then(this.pubSub.publish)
}

export default (...args) => new AuthService(...args)
