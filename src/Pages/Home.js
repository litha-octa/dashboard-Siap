import React from "react";
import './style.css'
import { userIcon, menuAside, ChartImg, ChartImg2 } from "../assets";
import { Link } from "react-router-dom";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";

const Home = () =>{
  let newDate = new Date()
let date = newDate.getDate();
let month = newDate.getMonth() + 1;
let year = newDate.getFullYear();

const today = `${year}-${month<10?`0${month}`:`${month}`}-${date}`

  const data = [
    { name: "Mei", users: 2000 },
    { name: "Juni", users: 3500 },
    { name: "Juli", users: 6000 },
    { name: "Agu", users: 5500 },
    { name: "Sep", users: 8000 },
    { name: "Okt", users: 11000 },
  ];
   const data2 = [
     { name: "Tampilan", penilaian: 40 },
     { name: "Fungsi", penilaian: 35 },
     { name: "Valid Info", penilaian: 60 },
     { name: "Feedback", penilaian: 55 },
   ];
    const namaUser='Hopkins01'
    return (
      <div className="body">
        <div className="navbar">Hai Admin </div>
        <div className="container">
          <div className="aside">
            <div className="aside-userInfo">
              <img src={userIcon} alt="userIcon" className="asideIcon" />
              <div className="asideUserName">{namaUser}</div>
            </div>
            <div className="aside-container">
              {menuAside.map((item) => {
                return (
                  <Link to={item.name ==='User List'? "/all-user":' '}>
                    <div className="menuItem">
                      <img
                        src={item.img}
                        alt="userIcon"
                        className="asideIconMini"
                      />
                      <div className="asideMenuText">{item.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className="main">
            <img src={ChartImg} className="chartImgFromFirebase" />
            <img src={ChartImg2} className="chartImgFromFirebase" />
            <div className="chartContainer">
              <div className="titleChart">
                Jumlah Unduh dalam 6 bulan Terakhir
              </div>
              <div className="titleChart">Aspek Penilaian</div>
            </div>
            <div className="chartContainer">
              <BarChart
                width={400}
                height={280}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 100,
                  bottom: 25,
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
                <Bar
                  dataKey="users"
                  fill="#59080B"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
              <BarChart
                width={400}
                height={280}
                data={data2}
                margin={{
                  top: 5,
                  right: 30,
                  left: 50,
                  bottom: 25,
                }}
                className="chart"
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
                <Bar
                  dataKey="penilaian"
                  fill="#59080B"
                  background={{ fill: "#eee" }}
                />
              </BarChart>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Home;