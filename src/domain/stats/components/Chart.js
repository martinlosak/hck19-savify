import React from 'react'
import {Area, ComposedChart, Line, ResponsiveContainer, XAxis, YAxis} from 'recharts'

let data = [
    {saving: 2000, real: 2000, etf: 2000, month: '11/18'},
    {saving: 2000, real: 1996.01, etf: 2024.94, month: '12/18'},
    {saving: 2000, real: 1992.02, etf: 2038.52, month: '01/19'},
    {saving: 2000, real: 1988.05, etf: 1986.80, month: '02/19'},
    {saving: 2000, real: 1984.08, etf: 2071.29, month: '03/19'},
    {saving: 2000, real: 1980.12, etf: 2144.53, month: '04/19'},
    {saving: 2000, real: 1976.17, etf: 2184.15, month: '05/19'},
    {saving: 2000, real: 1972.22, etf: 2074.36, month: '06/19'},
    {saving: 2000, real: 1968.29, etf: 2203.07, month: '07/19'},
    {saving: 2000, real: 1964.36, etf: 2238.81, month: '08/19'},
    {saving: 2000, real: 1960.44, etf: 2224.82, month: '09/19'},
    {saving: 2000, real: 1956.52, etf: 2263.13, month: '10/19'}
]

const savingColor = '#9A0000'
const etfColor = '#3700B3'
const realColor = '#000000'

const Chart = ({withInvestments = false}) =>
    <ResponsiveContainer>
        <ComposedChart data={data}>
            <defs>
                <linearGradient id="colorSaving" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(154, 0, 0, 1)"/>
                    <stop offset="95%" stopColor="rgba(154, 0, 0, 0)"/>
                </linearGradient>
                <linearGradient id="colorEtf" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="rgba(55, 0, 179, 1)"/>
                    <stop offset="95%" stopColor="rgba(55, 0, 179, 0)"/>
                </linearGradient>
            </defs>

            <XAxis dataKey="month"/>
            <YAxis dataKey="etf" width={25} domain={[1500, 2500]}/>

            <Area type="monotone" dataKey='saving' stroke={savingColor} fill="url(#colorSaving)" fillOpacity={0.2}/>

            {withInvestments &&
            <Area type='monotone' dataKey='etf' stroke={etfColor} fill="url(#colorEtf)" fillOpacity={0.2}/>}

            <Line type="monotone" dataKey="real" stroke={realColor} strokeDasharray="5 5" dot={false}/>
        </ComposedChart>
    </ResponsiveContainer>

export default Chart
