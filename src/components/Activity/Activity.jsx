
import './activity.css';
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend
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
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {

    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Activity() {
  return (


     <div className="widgetSm">
      <span className="widgetSmTitle">Supplier activity</span>
    <BarChart
      width={250}
      height={250}
      data={data}
      margin={{
        top: 30,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name"   />
      <YAxis  />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" stackId="a" fill="#8884d8" />
      <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
    </BarChart>
     </div>
  );
}
