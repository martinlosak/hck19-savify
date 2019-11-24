import React from 'react'
import c from 'classnames'
import {Select} from 'react-onsenui'

const ChooseAccount = ({name, value, onChange}) => <div className={c({'category': true, 'kard': true})}>
    <div className={'left'}>
        <div className={'name'}>
            {name}
        </div>
    </div>
    <div className={'right'}>
        <Select modifier="material"
                value={value}
                onChange={(event) => onChange(event.target.value)}>
            <option value="0"></option>
            <option value="1">Giro-Konto Family</option>
            <option value="2">Giro-Konto Martin</option>
        </Select>
    </div>
</div>

export default ChooseAccount
