import React from 'react'

import 'onsenui/css/onsenui.css'
import 'onsenui/css/onsen-css-components.css'
import 'src/ui/style/onsen-overrides/index.css'
// import './style/onsen-css-components.css'
// import './style/theme.css'
import {
    Page,
    Tabbar,
    Tab,
    Navigator
} from 'react-onsenui'

import Home from './components/Home'
import Dialogs from './components/Dialogs'
import Forms from './components/Forms'
import Animations from './components/Animations'

class Tabs extends React.Component {
    renderTabs () {
        return [
            {
                content: <Home key="home" navigator={this.props.navigator}/>,
                tab: <Tab key="home" label="Wow" icon="ion-ios-home-outline"/>
            },
            {
                content: <Dialogs key="dialogs"
                                  navigator={this.props.navigator}/>,
                tab: <Tab key="dialogs" label="Dialogs"
                          icon="ion-ios-albums-outline"/>
            },
            {
                content: <Forms key="forms"/>,
                tab: <Tab key="forms" label="Forms" icon="ion-edit"/>
            },
            {
                content: <Animations key="animations"
                                     navigator={this.props.navigator}/>,
                tab: <Tab key="animations" label="Animations"
                          icon="ion-film-marker"/>
            }
        ]
    }

    render () {
        return (
            <Page>
                <Tabbar
                    renderTabs={this.renderTabs.bind(this)}
                />
            </Page>
        )
    }
}

class App extends React.Component {

    renderPage (route, navigator) {
        route.props = route.props || {}
        route.props.navigator = navigator

        return React.createElement(route.comp, route.props)
    }

    render () {
        return (
            <Navigator
                initialRoute={{ comp: Tabs, props: { key: 'tabs' } }}
                renderPage={this.renderPage}
            />
        )
    }
}

export default Tabs
