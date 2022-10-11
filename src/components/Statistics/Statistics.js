import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const Statistics = () => {
  const topics = useLoaderData();
  const { data } = topics;
  console.log(data);
  return (
    
      <ResponsiveContainer className="mx-auto mt-28" width="70%" aspect={2}>
        <LineChart
          width={400}
          height={400}
          data={data}
        >
          <Line type="monotone" dataKey="total" stroke="green" />
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>

  );
};

export default Statistics;
