import React from 'react'
import { Icon, Page } from 'react-onsenui'
import './transactions-style.sass'
import c from 'classnames'
import uberLogo from 'src/logo/uber.png'
import msLogo from 'src/logo/ms.png'
import a1Logo from 'src/logo/a1.png'

export const Transaction = ({company, amount, date, logo, manual, number, url}) =>
    <div className={c({'transaction': true, 'kard': true})}>
        <div className={'left'}>
            <img src={logo}/>
        </div>
        <div className={'right'}>
            <div className={'top'}>
                <div className={'to'}>
                    {company}
                </div>
            </div>
            <div className={'mid'}>
                <div className={'date'}>
                    {date}
                </div>
                <div className={'amount'}>
                    {amount} €
                </div>
            </div>
            {number ?
                <div className={'doc'}>
                    <>
                        <Icon icon="ion-ios-document"/>
                        <a className={'number'}
                           href={url}>
                            {number}
                        </a>
                    </>
                </div>
                : <div className={'missing'}>
                    Missing invoice
                    <Icon icon="ion-ios-alert"/>
                </div>
            }
        </div>
    </div>

const items = [
    {
        company: 'Uber Austria GmbH',
        logo: uberLogo,
        date: '15.11.2018',
        amount: '-8,00',
        number: '2018/1100127',
        url: 'https://www.chillbill.co/images/blog/2016-07-07-email-rechnungen/uber-email-4750563b.png '
    },
    {
        company: 'Microsoft Payments',
        logo: msLogo,
        date: '14.11.2018',
        amount: '-10,00',
        number: '001188652',
        url: 'https://chakrii.com/wp-content/uploads/microsoft-invoice-understand-your-invoice-for-office-365-for-microsoft-invoice.png'
    },
    {
        company: 'A1 Telekom invoice',
        date: '20.10.2018',
        amount: '-60,00',
        url: 'http://6gst.com/wp-content/uploads/2018/07/Telekom-Invoice.jpg',
        logo: a1Logo
    }
]

const Transactions = ({renderToolbar}) =>
    <Page
        className={'invoice'}
        renderToolbar={renderToolbar({
            title: 'Transactions'
        })}>
        {items.map(i =>
            <Transaction {...i}/>
        )}
    </Page>

export default Transactions
