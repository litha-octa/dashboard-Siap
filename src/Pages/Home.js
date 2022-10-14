import React, {useEffect, useState} from "react";
import axios from  'axios';

const Home = () => {
const [allUsers, setAllUsers] = useState()
const UserRate =4.5;
const [totalUser, setTotalUser] = useState ()



useEffect(()=>{
axios
.get("http://165.22.242.111:8300/get-user/all")
.then ((res)=>{
              console.log(res.data.result)
              setAllUsers(res.data.result)
              setTotalUser(Object.keys(res.data.result).length);

            })
.catch((err)=>{console.log (err)})
},[])
  return (
    <div className="body">
      <div className="navbar">
        <div className="titleInNavbar">Dashboard</div>
      </div>
      <div className="container">
        <div className="user-count">
          <div className="title-inBox">Total User</div>
          <div className="title-inBox">{totalUser}</div>
        </div>
        <div className="user-rating">
          <div className="title-inBox">User Rating</div>
          <div>{UserRate} / 5</div>
        </div>
        <div className="user-list">
          <div className="title-inBox">User List</div>
          {allUsers?.map((item) => {
            return (
              <div style={{ display: "flex", flexDirection: "row" }}>
                <div>{item.username}</div>
                <div>{item.nik}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Home;