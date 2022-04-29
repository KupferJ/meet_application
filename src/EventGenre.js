import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];

const EventGenre = ({ events }) => {
  const [data, setData] = useState([]); 
  
  useEffect(() => {
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value};
    }).filter(d => d.value > 0);
  setData(data); }, [events]);

const colors = ["#00a5fe", "#09c64e", "#e711e0", "#e14501", "#1cece9"];

  return (
    <ResponsiveContainer height={400}>
    <PieChart width={400} height={400}>
      <Pie data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        label={({ name, percent}) => `${name}${(percent*100).toFixed(0)}%`}>
          {
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index]}/>
          ))
          }
      </Pie>
    </PieChart> 
    </ResponsiveContainer>
  );
}

export default EventGenre;