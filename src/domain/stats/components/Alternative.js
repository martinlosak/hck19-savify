import React from 'react'
import './alternative-style.sass'
import Chart from 'src/domain/stats/components/Chart'

const Alternative = () => <div id="container">
    <div className="row">
        <Chart withInvestments={true}/>
    </div>
    <div className="row">

    </div>
</div>

export default Alternative
