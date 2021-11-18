import React from "react";
import {
  BarChart,
  Bar,
  Tooltip,

} from "recharts";

const data = [
  {
    name: "",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
 
 
  {
    name: "",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
    {
    name: "",
    uv: 278,
    pv: 3908,
    amt: 2000
  },
    {
    name: "",
    uv: 1200,
    pv: 3908,
    amt: 2000
  },
    {
    name: "",
    uv: 800,
    pv: 2908,
    amt: 2000
  },
    {
    name: "",
    uv: 1000,
    pv: 3908,
    amt: 2000
  },
  {
    name: "",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "",
    uv: 2,
    pv: 1200,
    amt: 2500
  },
  {
    name: "",
    uv: 3000,
    pv: 4300,
    amt: 2
  }
];

export default function Activity() {
  return (
    <div style={{marginTop:70, marginRight: 70 }}>
    <BarChart
      width={180}
      height={100}
       data={data}
      
      margin={{
        top: 20,
        right: 50,
        left: 28,
        bottom: 0
      }}
      
    >
      <Tooltip />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
    </div>
  );
}
