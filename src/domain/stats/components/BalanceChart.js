import React from 'react'
import {
    Area,
    Bar,
    ComposedChart,
    ReferenceLine,
    ResponsiveContainer,
    Tooltip,
    XAxis
} from 'recharts'

let data = [
    {income: 500, outcome: 400, month: 'AUG'},
    {income: 700, outcome: 339, month: 'SEP'},
    {income: 800, outcome: 532, month: 'OCT'},
    {income: 700, outcome: 454, month: 'NOV'},
    {income: 700, outcome: 454, month: 'DEC'},
    {income: 700, outcome: 454, month: 'JAN'}
]

data = data.map(item => ({
    ...item,
    diff: item.income - item.outcome
}))

const mainColor = '#000000'
const incomeColor = '#9A0000'
const outcomeColor = '#DB3636'

const CustomTooltip = ({active, payload}) =>
    active && <div>
        <p>{`Income: ${payload[0].value} €`}</p>
        <p>{`Outcome: ${payload[1].value} €`}</p>
    </div>

const BalanceChart = () =>
    <ResponsiveContainer>
        <ComposedChart data={data} barGap={0}>

            <defs>
                <linearGradient id="MyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="1%" stopColor="rgba(0, 0, 0, 1)"/>
                    <stop offset="99%" stopColor="rgba(0, 0, 0, 0)"/>
                </linearGradient>
            </defs>

            <XAxis dataKey="month"/>

            <Tooltip content={<CustomTooltip/>}/>

            <Bar dataKey="income" fill={incomeColor}/>
            <Bar dataKey="outcome" fill={outcomeColor}/>

            <Area type='monotone'
                  dataKey='diff'
                  stroke={mainColor}
                  fill="url(#MyGradient)"
                  fillOpacity={0.2}/>

            <ReferenceLine x="NOV"
                           stroke="#000000"
                           label={{value: 'Plan', position: 'insideTopLeft'}}
                           strokeDasharray="3 3"/>

        </ComposedChart>
    </ResponsiveContainer>

export default BalanceChart
