import React from 'react'
import { Icon, Page } from 'react-onsenui'
import { compose } from 'ramda'
import './overview-style.sass'
import Button from 'src/ui/components/Button'

//todo replace redirect url
const gOauth = 'https://accounts.google.com/o/oauth2/v2/auth?scope=https://mail.google.com&include_granted_scopes=true&state=state_parameter_passthrough_value&redirect_uri=http://localhost:8080&response_type=token&client_id=829626060121-i5osf4eoqo0qb9vsnb0mvlvsjirs73gn.apps.googleusercontent.com&output=embed'


const cHandler = () => {
    // e.preventDefault();
    window.location = gOauth
}

const Overview = ({renderToolbar}) =>
    <Page
        className={'overview'}
        renderToolbar={renderToolbar({
            title: 'Overview'
        })}>
        <div className={'kard checking'}>
            <div className={'title'}>Checking account</div>
            <div className={'name'}>Jane Doe</div>
            <div className={'amount'}>€ 900,00</div>
        </div>
        <div className={'kard savings'}>
            <div className={'title'}>Savings account</div>
            <div className={'name'}>Jane Doe</div>
            <div className={'amount'}>€ 1200,00</div>
        </div>
        <Button onClick={cHandler}>
            <Icon icon={'ion-logo-google'}/>
            Connect Gmail
        </Button>
    </Page>

export default compose(x => x)(Overview)
