import React from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts'

const data = [
    {
      "name": "Page A",
      "pv": 2400,
      "amt": 2400
    },
    {
      "name": "Page B",
      "pv": 1398,
      "amt": 2210
    },
    {
      "name": "Page C",
      "pv": 9800,
      "amt": 2290
    },
    {
      "name": "Page D",
      "pv": 3908,
      "amt": 2000
    },
    {
        "name": "Page B",
        "pv": 1398,
        "amt": 2210
      },
      {
        "name": "Page C",
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Page D",
        "pv": 3908,
        "amt": 2000
      },
      {
        "name": "Page B",
        "pv": 1398,
        "amt": 2210
      },
      {
        "name": "Page C",
        "pv": 9800,
        "amt": 2290
      },
      {
        "name": "Page D",
        "pv": 3908,
        "amt": 2000
      },
    {
      "name": "Page E",
      "pv": 4800,
      "amt": 2181
    },
    {
      "name": "Page F",
      "pv": 3800,
      "amt": 2500
    },
    {
      "name": "Page G",
      "pv": 4300,
      "amt": 2100
    }
  ]



const LineChartv2 = () => {
    return (
        <ResponsiveContainer className = "mt-10" width = "100%" aspect={16.0/9.0}>
            <AreaChart width={100} data={data}>
            <defs>

                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            
            <Tooltip />
                <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default LineChartv2
