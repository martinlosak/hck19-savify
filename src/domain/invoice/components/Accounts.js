import React from 'react'
import {Page} from 'react-onsenui'
import {compose} from 'ramda'
import './overview-style.sass'

const Accounts = ({renderToolbar}) =>
    <Page
        className={'overview'}
        renderToolbar={renderToolbar({
            title: 'Accounts'
        })}>
        <div className={'kard checking'}>
            <div className={'title'}>Checking account</div>
            <div className={'name'}>My salary</div>
            <div className={'amount'}>€ 1 900,00</div>
        </div>
        <div className={'kard savings'}>
            <div className={'title'}>Savings account</div>
            <div className={'name'}>Loosing money here</div>
            <div className={'amount'}>€ 40 000,00</div>
        </div>
        <div className={'kard checking'}>
            <div className={'title'}>Checking account</div>
            <div className={'name'}>Other account</div>
            <div className={'amount'}>$ 1 260,00</div>
        </div>
    </Page>

export default compose(x => x)(Accounts)
