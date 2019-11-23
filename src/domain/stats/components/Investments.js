import React from 'react'
import './investments-style.sass'
import { Page, Segment } from 'react-onsenui'
import { compose } from 'ramda'
import { withState } from 'recompose'
import Current from 'src/domain/stats/components/Current'
import Alternative from 'src/domain/stats/components/Alternative'

const screens = [
    {
        comp: Current
    },
    {
        comp: Alternative
    }
]

const Investments = ({renderToolbar, setIndex, index}) => {
    const Comp = screens[index].comp
    return <Page renderToolbar={renderToolbar({
        title: 'Investments'
    })}>
        <Segment id="investments" onPostChange={e => setIndex(e.index)}>
            <button>Current saving</button>
            <button>Alternative ETH</button>
        </Segment>
        <Comp/>
    </Page>
}

export default compose(
    withState('index', 'setIndex', 0)
)(Investments)
