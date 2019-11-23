import React from 'react'

import {Page, Tab, Tabbar, Toolbar} from 'react-onsenui'
import {CSSTransition, TransitionGroup} from 'react-transition-group'
import Transactions from 'src/domain/invoice/components/Transactions'
import Investments from 'src/domain/stats/components/Investments'
import Accounts from './domain/invoice/components/Accounts'
import Info from './domain/invoice/components/Info'

const screens = [
    {
        key: 'other',
        icon: 'ion-ios-card',
        label: 'Accounts',
        comp: Accounts
    },
    {
        key: 'transactions',
        icon: 'ion-logo-usd',
        label: 'Transactions',
        comp: Transactions
    },
    {
        key: 'investments',
        icon: 'ion-ios-stats',
        label: 'Investments',
        comp: Investments
    },
    {
        key: 'investments',
        icon: 'ion-ios-stats',
        label: 'Info',
        comp: Info
    }
]

class Tabs extends React.Component {

    state = {
        index: 0
    }

    renderToolbar = ({title}) => () => {
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

export default Tabs
