import {Page, ProgressCircular} from 'react-onsenui'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const Invocies = () =>
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


export default Invocies
