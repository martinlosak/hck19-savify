import React from 'react'
import {
    BackButton,
    Icon,
    Page,
    ProgressCircular,
    Toolbar
} from 'react-onsenui'
import './actions-style.sass'
import Button from 'src/ui/components/Button'
import c from 'classnames'
import '../../general.sass'
import { compose } from 'ramda'
import { withState } from 'recompose'
import './anim.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import io from 'socket.io-client'

const Detail = compose(withState('open', 'setOpen', false))(
    ({
         amount, to, overdue, dueDate, dueDate2, info1, info2, open, setOpen,
         detail, referenceId, invoiceUrl, invoiceNumber
     }) =>
        <Page className={'payment-detail'}
              renderToolbar={() => {
                  return <Toolbar>
                      <div className="left"><BackButton/></div>

                      <div className="center"><Icon icon={'ion-ios-card'}/>Payment
                      </div>
                  </Toolbar>
              }}>

            <div>
                <div className={'top'}>
                    <div className={'attr to'}>
                        <div>Recipient</div>
                        <div>{to}</div>
                    </div>
                    <div className={'attr amount'}>
                        <div>Amount</div>
                        <div>
                            € {amount}
                        </div>
                    </div>
                    <div className={'attr info'}>
                        <div>Info</div>
                        <div>{info1}</div>
                        <div>{info2}</div>
                    </div>
                    <div className={'attr date'}>
                        <div>due in</div>
                        <div>
                            {dueDate2} {' '}
                            ({!overdue ? 'due' : 'overdue'} in {dueDate})
                        </div>
                    </div>
                    <div className={'attr ref-id'}>
                        <div>Reference id</div>
                        <div>
                            {referenceId}
                        </div>
                    </div>
                </div>
                <div className={'bottom'}>
                    <div className={'date'}>
                    </div>
                </div>
                <div className={'doc'}>
                    <Icon icon="ion-ios-document"/>
                    <a className={'number'}
                       href={invoiceUrl}>
                        {invoiceNumber}
                    </a>
                </div>
                <Button modifier={'large'}
                        onClick={e => {
                            e.stopPropagation()
                            setOpen(true)
                        }}>
                    <Icon icon={'ion-logo-usd'}/>
                    Pay
                </Button>
            </div>
        </Page>)

const Confirmation = ({onYes, onNo, style}) =>
    <div className={'confirmation user-input'} style={style} onClick={e => {
        e.stopPropagation()
    }}>
        <div>
            Send the payment ?
        </div>
        <div className={'buttons'}>
            <div onClick={onYes}>Yes</div>
            <div onClick={onNo}>No</div>
        </div>
    </div>

const PairActions = compose(
    withState('pending', 'setPending', false)
)(({onTimer, onPhoto, onFile, pending, setPending}) => {

    const delay = f => () => {
        setPending(true)
        setTimeout(f, 2000)
    }

    return <div className={'pair-actions user-input'} onClick={e => {
        e.stopPropagation()
    }}>
        {pending ? <ProgressCircular indeterminate/> : <>
            <label htmlFor="camera">
                <Icon icon={'ion-ios-camera'}/>
            </label>
            <input type="file"
                   onChange={delay(onTimer)}
                   id="camera"
                   accept="image/*"/>

            <label htmlFor="file-upload">
                <Icon icon={'ion-ios-cloud-upload'}/>
            </label>
            <input type="file"
                   onChange={delay(onTimer)}
                   id="file-upload"/>

            <Icon icon={'ion-ios-time'}
                  onClick={onTimer}/>
        </>}
    </div>
})

const ToPay = compose(
    withState('open', 'setOpen', false),
    withState('done', 'setDone', false)
)(
    ({to, amount, dueDate, overdue, nav, open, setOpen, done, setDone, ...rest}) =>
        <ReactCSSTransitionGroup
            transitionName="example"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            {done ? null :
                <div className={'wrapper'}>
                    <div className={c(
                        {'action': true, kard: true, open, overdue})}
                         onClick={() => nav.pushPage(
                             {
                                 comp: Detail,
                                 props: {to, amount, dueDate, overdue, ...rest}
                             },
                             {animation: 'lift'})}>
                        <div className={'header'}>
                            <Icon icon={'ion-ios-card'}/>
                            Payment
                        </div>

                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {!open && <div className={'body'}>
                                <div className={'top'}>
                                    <div className={'to'}>
                                        {to}
                                    </div>
                                    <div className={'amount'}>
                                        € {amount}
                                    </div>
                                </div>
                                <div className={'bottom'}>
                                    <div className={'date'}>
                                        {!overdue
                                            ? 'due'
                                            : 'overdue'} in {dueDate}
                                    </div>
                                </div>
                            </div>}
                        </ReactCSSTransitionGroup>
                    </div>
                    <Button large={true}
                            className={c({'action-btn': true, hidden: open})}
                            modifier={''}
                            onClick={e => {
                                e.stopPropagation()
                                setOpen(true)
                            }}>
                        <Icon icon={'ion-logo-usd'}/>
                        Pay
                    </Button>
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={300}>
                        {open && <Confirmation
                            onYes={setDone}
                            onNo={() => setOpen(false)}/>}
                    </ReactCSSTransitionGroup>
                </div>}
        </ReactCSSTransitionGroup>
)

const ToPair =
    compose(
        withState('open', 'setOpen', false),
        withState('done', 'setDone', false)
    )(
        ({to, amount, date, overdue, done, setDone, setOpen, open}) =>
            <ReactCSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={300}
                transitionLeaveTimeout={300}>
                {done ? null :
                    <div className={'wrapper'}>
                        <Button large={true}
                                modifier={''}
                                className={c(
                                    {'action-btn': true, hidden: open})}
                                onClick={e => {
                                    e.stopPropagation()
                                    setOpen(true)
                                }}
                        >
                            <Icon icon={'ion-ios-add-circle-outline'}/>
                            Pair</Button>
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={300}
                            transitionLeaveTimeout={300}>
                            {open &&
                            <PairActions
                                onTimer={() => setDone(true)}
                                onFile={() => setDone(true)}
                                onPhoto={() => setDone(true)}/>}
                        </ReactCSSTransitionGroup>
                        <div className={c(
                            {'action': true, kard: true, overdue})}>
                            <div className={'header'}>
                                <Icon icon={'ion-ios-document'}/>
                                Missing invoice
                            </div>
                            <ReactCSSTransitionGroup
                                transitionName="example"
                                transitionEnterTimeout={300}
                                transitionLeaveTimeout={300}>
                                {!open && <div className={'body'}>
                                    <div className={'top'}>
                                        <div className={'to'}>
                                            {to}
                                        </div>
                                        <div className={'amount'}>
                                            {amount} €
                                        </div>
                                    </div>
                                    <div className={'bottom'}>
                                        <div className={'date'}>
                                            {date}
                                        </div>
                                    </div>
                                </div>}
                            </ReactCSSTransitionGroup>
                        </div>
                    </div>}
            </ReactCSSTransitionGroup>
    )

const items = [
    {
        to: 'A1 Telekom AG',
        detail: 'AT00 1111 2222 3333 4444\n' +
            'AAABBBCCDDD',
        info1: 'A1 Invoice 000000001',
        info2: 'A1 Telekom Austria AG',
        dueDate: '2 days',
        dueDate2: '20.11.2018',
        referenceId: '0000-1111-2222',
        amount: '-60,47',
        invoiceNumber: '2018/12-12-45',
        invoiceUrl: 'http://6gst.com/wp-content/uploads/2018/07/Telekom-Invoice.jpg'
    },
    {
        to: 'Max Muster Design',
        info1: 'Invoice Number 012',
        info2: 'Max Muster Visual Design E.U.',
        dueDate: '4 days',
        dueDate2: '22.11.2018',
        amount: '-387,00',
        invoiceNumber: '2018/12-12-45',
        invoiceUrl: 'https://i.pinimg.com/474x/b9/62/91/b9629142a46f840a40ef6df5621dfe03--invoice-layout-invoice-template.jpg'
    }
]
const trans = [
    {
        to: 'Saturn Wien GmBh',
        date: '07.02.2018',
        amount: '121.88'

    }
]

class Actions extends React.Component {

    socket

    constructor (props) {
        super(props)

        this.state = {
            items,
            trans,
            pending: true
        }
    }

    componentDidMount () {
        this.socket = io('http://localhost:3000')

        this.socket.on('connect', () => {
            console.log('client connected')
            //TODO get access_token from url
            const access_token = 'ya29.GltYBkG9JQTT3qRFrR8wKUX7ceJmongL7Ked8AjHjkFBedEiM_kvFhgTlg_xH42qjgdv0w4Z-mvRJqoGnzcF1z_feDOBoGE_X81BXzvPS-PPzwju76pE95gAAYlA';

            this.socket.emit('REGISTER_JOB', {access_token})
        })

        this.socket.on('INVOICES_RECIVED', (data) => {
            const item =     {

                to: data.invoiceInfo.to,
                info1: 'Invoice Number 013',
                info2: data.invoiceInfo.to,
                dueDate: '5 days',
                dueDate2: '23.11.2018',
                amount: '-'+data.invoiceInfo.amount,
                invoiceNumber: '2018/12-12-45',
                invoiceUrl: 'https://i.pinimg.com/474x/b9/62/91/b9629142a46f840a40ef6df5621dfe03--invoice-layout-invoice-template.jpg',
            }

            const items = [...this.state.items, item]


            this.setState({items})
            console.log('invoice recived', data.invoiceInfo)
        })

        setTimeout(() =>
            this.setState({pending: false}), 1000)
    }

    render () {
        const {renderToolbar, nav} = this.props
        const {items, trans, pending} = this.state
        return (
            <Page
                className={'invoice'}
                renderToolbar={renderToolbar({
                    title: 'Reconciliation'
                })}>
                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}>
                    {!pending ?
                        <div key={1}>
                            {items.map(i =>
                                <ToPay
                                    nav={nav}
                                    {...i}/>
                            )}
                            {trans.map(i =>
                                <ToPair
                                    nav={nav}
                                    {...i}/>
                            )}
                        </div> : <div key={2} className={'spinner'}>
                            <ProgressCircular indeterminate/>
                        </div>}
                </ReactCSSTransitionGroup>
            </Page>
        )
    }
}

export default Actions
