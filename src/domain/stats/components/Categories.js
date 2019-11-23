import React from 'react'
import CategoriesChart from 'src/domain/stats/components/CategoriesChart'
import './categories-style.sass'
import CategoryItem from 'src/domain/stats/components/CategoryItem'

const data = [
    {
        name: 'Salary',
        value: 525,
        percent: 52.5,
        icon: 'ion-ios-cash'
    },
    {
        name: 'Business expenses',
        value: 275,
        percent: 27.5,
        icon: 'ion-ios-briefcase'
    },
    {
        name: 'Media & Electronics',
        value: 125,
        percent: 12.5,
        icon: 'ion-ios-laptop'
    },
    {
        name: 'Transport & Car',
        value: 75,
        percent: 7.5,
        icon: 'ion-ios-car'
    }
]

const Categories = () => <div id="container">
    <div className="row">
        <CategoriesChart data={data}/>
    </div>
    <div className="month">November</div>
    <div className="row">
        {data.map(c => <CategoryItem {...c}/>)}
    </div>
</div>

export default Categories
