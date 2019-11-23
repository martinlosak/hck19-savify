import { handleActions } from 'redux-actions'
import { loggedIn, loggedOut } from 'src/auth/msg'

export default handleActions({
    [loggedIn]: () => ({
        token: 'blala'
    }),
    [loggedOut]: () => ({
        token: null
    })

}, { token: null })
