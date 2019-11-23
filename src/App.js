import React from 'react'

import {
    Icon,
    Page,
    Tab,
    Tabbar,
    Toolbar,
    ToolbarButton
} from 'react-onsenui'

import Button from 'src/ui/components/Button'
import { withAppContext } from 'src/app-context/AppContext'
import { loggedOut } from 'src/auth/msg'
import Actions from 'src/domain/invoice/components/Actions'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { compose } from 'ramda'
import Typography from 'typography'
import Overview from 'src/domain/invoice/components/Overview'
import Transactions from 'src/domain/invoice/components/Transactions'
import Statistics from 'src/domain/stats/components/Statistics'

const typography = new Typography({
    baseFontSize: '18px',
    baseLineHeight: 1.45,
    headerFontFamily: [
        'Avenir Next',
        'Helvetica Neue',
        'Segoe UI',
        'Helvetica',
        'Arial',
        'sans-serif'],
    bodyFontFamily: ['Georgia', 'serif']
    // See below for the full list of options.
})

// typography.injectStyles()

const screens = [
    {
        key: 'invoice',
        icon: 'ion-ios-card',
        label: 'Reconciliation',
        comp: Actions
    },
    {
        key: 'other',
        icon: 'ion-ios-body',
        label: 'Overview',
        comp: Overview
    },
    {
        key: 'transactions',
        icon: 'ion-logo-usd',
        label: 'Transactions',
        comp: Transactions
    },
    {
        key: 'statistics',
        icon: 'ion-ios-stats',
        label: 'Stats',
        comp: Statistics
    },
]

class Tabs extends React.Component {

    state = {
        index: 0
    }

    renderToolbar = ({title}) => () => {
        const logOut = this.props.logOut
        return <Toolbar>
            <div className="center">
                <TransitionGroup>
                    <CSSTransition
                        key={title}
                        classNames="example"
                        timeout={300}>
                        <div>{title}</div>
                    </CSSTransition>
                </TransitionGroup>
            </div>
            <div className="right">
                {/*<ToolbarButton onClick={logOut}>*/}
                {/*<Icon icon="ion-ios-log-out"/>*/}
                {/*</ToolbarButton>*/}
            </div>
        </Toolbar>
    }

    renderTabs = (activeIndex, tabbar) =>
        screens.map((s, i) => ({
            content: <s.comp key={s.key}
                             active={activeIndex === i}
                             tabbar={tabbar}
                             nav={this.props.navigator}
                             renderToolbar={this.renderToolbar}/>,
            tab: <Tab key={s.key} label={s.label}
                      icon={s.icon}/>
        }))

    render () {
        return (
            <Page>
                <Tabbar
                    position={'bottom'}
                    swipeable
                    onPreChange={({index}) => this.setState({index})}
                    onPostChange={() => console.log('postChange')}
                    onReactive={() => console.log('postChange')}
                    index={this.state.index}
                    renderTabs={this.renderTabs}/>
            </Page>
        )
    }
}

export default compose(
    withAppContext(({pubSub}) => ({
        logOut: () => pubSub.publish(loggedOut())
    }))
)(Tabs)
