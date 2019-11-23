import React from 'react'
import {
    Cell,
    Label,
    Pie,
    PieChart,
    ResponsiveContainer,
    Tooltip
} from 'recharts'

const colors = ['#9A0000', '#DB3636', '#B91414', '#760000', '#4B0000']

const CustomTooltip = ({active, payload}) =>
    active && <div>
        {console.log('payload', payload)}
        <p>{`${payload[0].payload.percent}%`}</p>
    </div>

const CategoriesChart = ({data}) => <ResponsiveContainer>
    <PieChart data={data}>

        <Tooltip content={<CustomTooltip/>}/>

        <Pie data={data}
             innerRadius={60}
             outerRadius={110}
             paddingAngle={5}>
            {
                data.map((entry, index) => <Cell
                    fill={colors[index % colors.length]}/>)
            }

            <Label value="1 205 €" position="center"/>

        </Pie>

    </PieChart>
</ResponsiveContainer>

export default CategoriesChart
