import React from 'react'
import './alternative-style.sass'
import Chart from 'src/domain/stats/components/Chart'
import {Button, Icon} from 'react-onsenui'

const Alternative = () => <div id="container">
    <div className="row">
        <Chart withInvestments={true}/>
    </div>
    <Button>
        <Icon icon={'ion-ios-information-circle-outline'}/>
        More info about ETF
    </Button>
    <div className="row">

    </div>
</div>

export default Alternative
