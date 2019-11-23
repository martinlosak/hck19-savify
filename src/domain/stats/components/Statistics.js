import React from 'react'
import './statistics-style.sass'
import { Page, Segment } from 'react-onsenui'
import { compose } from 'ramda'
import { withState } from 'recompose'
import Categories from 'src/domain/stats/components/Categories'
import Balance from 'src/domain/stats/components/Balance'

const screens = [
    {
        comp: Categories
    },
    {
        comp: Balance
    }
]

const Statistics = ({renderToolbar, setIndex, index}) => {
    const Comp = screens[index].comp
    return <Page renderToolbar={renderToolbar({
        title: 'Statistics'
    })}>
        <Segment id="statistics" onPostChange={e => setIndex(e.index)}>
            <button>Categories</button>
            <button>Balance</button>
        </Segment>
        <Comp/>
    </Page>
}

export default compose(
    withState('index', 'setIndex', 0)
)(Statistics)
