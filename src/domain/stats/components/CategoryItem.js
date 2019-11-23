import React from 'react'
import { Icon } from 'react-onsenui'
import c from 'classnames'

const CategoryItem = ({name, icon, value: amount}) => <div className={c({'category': true, 'kard': true})}>
    <div className={'left'}>
        <div className={'icon'}>
            <Icon icon={icon}/>
        </div>
        <div className={'name'}>
            {name}
        </div>
    </div>
    <div className={'right'}>
        {amount} €
    </div>
</div>

export default CategoryItem
