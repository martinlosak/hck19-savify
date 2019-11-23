import { createActions } from 'redux-actions'

export const { loggedIn, loggedOut } = createActions('LOGGED_IN', 'LOGGED_OUT')
