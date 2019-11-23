import React from 'react'
import { compose } from 'ramda'
import { Navigator } from 'react-onsenui'
import Login from 'src/auth/components/Login'
import { withAppContext } from 'src/app-context/AppContext'
import { loggedIn, loggedOut } from 'src/auth/msg'
import App from 'src/App'
import { lifecycle, withProps } from 'recompose'
import { connect } from 'react-redux'
import { isLoggedIn } from 'src/auth/state/selectors'

// Don't import fonts (we use our own version of Ionic icons v4)
// import 'onsenui/css/onsen-css-components.css'
// import 'src/ui/style/onsen-css-components.scss'
import 'onsenui/css/onsenui-core.min.css'
import 'src/ui/style/onsen-css-components.css'
// import './onsen/style/onsen-css-components.css'
// import './onsen/style/theme.css'

class Nav extends React.Component {

    componentDidMount () {
        console.log('mounted--------')
        this.props.onNavMount(this.navigator)
    }

    renderPage = (opts, nav) => {
        console.log('rendering', opts)
        const {comp: Comp, props} = opts
        return <Comp {...props}
                     navigator={nav}/>
    }

    ref = el => {
        this.navigator = el
    }

    render () {
        return <Navigator ref={this.ref}
                          initialRoute={{comp: this.props.initialComp}}
                          renderPage={this.renderPage}/>

    }
}

const setupNavActions = ({navigator, pubSub}) => {
    pubSub.on(loggedOut,
        () => navigator.pushPage({
            comp: Login
        }))

    pubSub.on(loggedIn,
        () => navigator.pushPage({
            comp: App
        }))
}

export default compose(
    withAppContext(),
    connect(s => ({
        isLoggedIn: isLoggedIn(s)
    })),
    lifecycle({
        componentDidMount () {

        }
    }),
    withProps(({pubSub, isLoggedIn}) => ({
        initialComp: isLoggedIn ? App : Login,
        onNavMount: navigator => setupNavActions({navigator, pubSub})
    })))(Nav)
