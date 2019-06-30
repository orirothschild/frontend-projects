import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const dayFromEpochSeconds = epochSeconds =>
  (new Date(epochSeconds * 1000)).toLocaleDateString('en-US');

export default ({ rates })=> (
  <div>
  <LineChart width={window.innerWidth} height={400} data={rates}
             margin={{top: 25, right: 30, left: 20, bottom: 5}}>
    <XAxis dataKey='time' tickFormatter={dayFromEpochSeconds}/>
    <YAxis/>
    <CartesianGrid strokeDasharray='3 3'/>
    <Tooltip/>
    <Legend />
    <Line type='monotone' dataKey='high' stroke='#8884d8' activeDot={{r: 8}} />
    <Line type='monotone' dataKey='close' stroke='#82ca9d' />
  </LineChart>
  </div>
);
