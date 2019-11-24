import React from 'react'
import c from 'classnames'

const KartItem = ({name, value}) => <div className={c({'category': true, 'kard': true})}>
    <div className={'left'}>
        <div className={'name'}>
            {name}
        </div>
    </div>
    <div className={'right'}>
        {value} €
    </div>
</div>

export default KartItem
