import { connect } from 'react-redux'
import { compose } from 'ramda'
import Login from 'src/auth/components/Login'
import { branch, renderComponent } from 'recompose'
import { isLoggedIn } from 'src/auth/state/selectors'

export const loggedInGuard = () => compose(
  connect(s => ({
    isLoggedIn: isLoggedIn(s)
  })),
  branch(p => !p.isLoggedIn, renderComponent(Login)))
