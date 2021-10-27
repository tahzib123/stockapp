import React, { useState } from 'react'
import { AreaChart, XAxis, YAxis, Tooltip, Area, ResponsiveContainer } from 'recharts'

  function CustomTooltip({ payload, label, active }) {
    if (active && payload) {
      return (
        <div className="custom-tooltip bg-blue-200 rounded p-2">
          <p className="open">{`Open: ${payload[0].value}`}</p>
          <p className="high">High: {payload[0].payload.high}</p>
          <p className="close">Close: {payload[0].payload.close}</p>
        </div>
      );
    }
  
    return null;
  }

  const formatDates = (data) => {
    const formattedDates = data.map((point) => {
      const unixStamp = parseInt(point.date, 10);
      point.date = new Date(unixStamp * 1000).toLocaleDateString('en-US');
      return point;
    })
    console.log(formattedDates);
    return formattedDates;
  }

const LineChartv2 = ({dataPoints}) => {
    // let [points, setPoints] = useState([]);
    // if(Object.keys(dataPoints).length > 0){
    //   setPoints(formatDates(dataPoints));
    // }
    return (
        <ResponsiveContainer className = "mt-10" width = "100%" aspect={16.0/9.0}>
            <AreaChart width={100} margin = {{top: 0, bottom: 0, left: 0, right: 0}} data={dataPoints}>
            <defs>

                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={1}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0.1}/>
                </linearGradient>
            </defs>
            <XAxis dataKey="date" />
            <YAxis tickCount = {20}/>
            
            <Tooltip content = {<CustomTooltip />}/>
                <Area type="monotone" dataKey="open" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
            </AreaChart>
        </ResponsiveContainer>
    )
}

export default LineChartv2
