class AuthApi {

    constructor () {

    }

    logIn = ({ username, password }) =>
        Promise.resolve('token')
}

export default (...args) => new AuthApi()
