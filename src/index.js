import React from 'react'
import './logging/setup'
import ReactDOM from 'react-dom'
import { AppContext } from 'src/app-context/AppContext'
import { BrowserRouter } from 'react-router-dom'
// import App from 'src/ui/App'
import { Provider } from 'react-redux'
import { createContext } from 'src/app-context/create'
// import { notifs } from 'src/notifications'
import Root from 'src/Root'
import { PersistGate } from 'redux-persist/integration/react'

// Force style for a platform
import ons from 'onsenui'
import { logger } from 'src/logging'

ons.platform.select('ios')
// ons.platform.select('android')
ons.disableAutoStyling()

const log = logger('app')

log.info('Starting')

const ctx = createContext()

if (window._DEV) {
    console.log('Running in dev mode')
}

const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') !== -1

if (!window._DEV && !isSafari && 'serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('SW registered: ', registration)
        }).catch(registrationError => {
            console.error('SW registration failed: ', registrationError)
        })
    })
}

ReactDOM.render(
    <Provider store={ctx.store}>
        <PersistGate loading={null} persistor={ctx.persistor}>
            <AppContext value={ctx}>
                <BrowserRouter>
                    <Root/>
                </BrowserRouter>
            </AppContext>
        </PersistGate>
    </Provider>,
    document.getElementById('app'))
