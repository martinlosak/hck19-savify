import React from 'react'
import './investments-style.sass'
import {Page, Segment} from 'react-onsenui'
import {compose} from 'ramda'
import {withState} from 'recompose'
import Current from 'src/domain/stats/components/Current'
import Alternative from 'src/domain/stats/components/Alternative'
import KartItem from './KartItem'
import ChooseAccount from './ChooseAccount'

const screens = [
    {
        comp: Current
    },
    {
        comp: Alternative
    }
]

const Investments = ({renderToolbar, setIndex, index, setAccount, accountIndex}) => {
    const Comp = screens[index].comp
    return <Page renderToolbar={renderToolbar({
        title: 'Investments'
    })}>
        <div className="row">
            Please choose your banking account.
        </div>

        <ChooseAccount name={'Bank account:'} onChange={setAccount} value={accountIndex}/>
        <KartItem name={'Balance:'} value={accountIndex === "1" ? 2000 : null}/>
        {accountIndex === "1" &&
        <Segment id="investments" onPostChange={e => setIndex(e.index)}>
            <button>Current saving</button>
            <button>Alternative ETH</button>
        </Segment>}
        {accountIndex === "1" && <Comp/>}
    </Page>
}

export default compose(
    withState('index', 'setIndex', 0),
    withState('accountIndex', 'setAccount', null)
)(Investments)
