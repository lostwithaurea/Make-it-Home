import React from "react";
import './css/form.css';
import "../App"
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar,} from "recharts";

const Analytics = () => {
  const data = [
    { name: "Facebook", users: 2000000000 },
    { name: "Instagram", users: 1500000000 },
    { name: "Twiter", users: 1000000000 },
    { name: "Telegram", users: 500000000 },
  ];

  return (
    <div className='banner'>
    <div className="navbarr">
      <a className="navbar-brandd" href="Home">MAKE IT HOME</a>
      <ul className="navbar-navv">
        <li className="nav-itemm">
          <a className="nav-linkk" href="Home">Home<span className="sr-only" /></a>
        </li>
        <li className="nav-itemm">
                 <a className="nav-linkk" href="Models">Models</a>
               </li>
        <li className="nav-itemm "> 
          <a className="nav-linkk" href="About">About</a>
        </li>
        <li className="nav-itemm "> 
          <a className="nav-linkk" href="Services">Services</a>
        </li>
        <li className="nav-itemm "> 
          <a className="nav-linkk" href="Contact">Contact Us</a>
        </li>
        <li className="nav-itemm "> 
        <a className="nav-linkk" href="/"><i className="uil uil-user" /> Logout</a>
        </li>
        </ul>
      
        </div>

    <div style={{ textAlign: "center" }}>
        <div className="title">
      <h1>Materials Used</h1>
      </div>
      <div className="App">
        <PieChart width={600} height={600}>
          <Pie
            dataKey="users"
            isAnimationActive={false}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={700}
          height={500}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={20}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 10, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#8884d8" background={{ fill: "#eee" }} />
        </BarChart>
      </div>
    </div>
    </div>
  );
};

export default Analytics;