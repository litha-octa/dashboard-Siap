import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL, PORT } from "../config";
import { ChartImg, ChartImg2, StarIcon ,PositiveIcon, NegativeIcon, NeutralIcon } from "../assets";

const Home = () => {
  const [allUsers, setAllUsers] = useState();
  const [reviewList, setReviewList] = useState();
  const [arr, setArr] = useState ([])
  const UserRate = 4.5;
  const [totalUser, setTotalUser] = useState();
  const positive = 4;
  const negative = 3;
  const neutral = 2;

  useEffect(() => {
    axios
      .get(`${BASE_URL}:${PORT}/eforkompimda/user`)
      .then((res) => {
        console.log(res.data.result);
        setAllUsers(res.data.result);
        setTotalUser(Object.keys(res.data.result).length);
      })
      .catch((err) => {
        console.log(err);
      });
       axios
         .get(`${BASE_URL}:${PORT}/eforkompimda/user-review`)
         .then((res) => {
           setReviewList(res.data.result);
           console.log(res.data.result);
         })
         .catch((err) => {
           console.log(err);
         });
          axios
            .get(`${BASE_URL}:${PORT}/eforkompimda/sentiment-data/positive`)
            .then((res) => {
              console.log(res.data.result);
            })
            .catch((err) => {
              console.log(err);
            });
     

     
  }, []);
  return (
    <div className="body">
      <div className="navbar">
        <div className="titleInNavbar">Dashboard</div>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div className="container">
          <div className="user-count">
            <div className="title-inBox">Total User</div>
            <div className="title-inBox">{totalUser}</div>
          </div>
          <div className="user-rating">
            <div className="title-inBox">User Rating</div>
            <img src={StarIcon} alt='icon' style={{width :50, height : 45, marginLeft:'40%'}}/>
            <div></div>
          </div>
        </div>
        <div className="imgContainer">
          <img src={ChartImg} className="chartImg" alt="icon" />
          <img src={ChartImg2} className="chartImg" alt="icon" />
        </div>
        {/* <div className="user-list">
          <div className="title-inBox">User List</div>
          {allUsers?.map((item) => {
            return (
              <div className="card">
                <div>{item.fullname}</div>
              </div>
            );
          })}
        </div> */}
      </div>
      <div className="reactionCon">
        <div className="reactionTitle">User Reaction</div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "20%",
            paddingTop: 20,
          }}
        >
          <img src={PositiveIcon} className="reactionItem" alt="icon" />
          <img src={NeutralIcon} className="reactionItem" alt="icon" />
          <img src={NegativeIcon} className="reactionItem" alt="icon" />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingLeft: "20%",
            paddingTop: 20,
          }}
        >
          <div className="reactionItem">{positive}</div>
          <div className="reactionItem">{neutral}</div>
          <div className="reactionItem">{negative}</div>
        </div>
      </div>
    </div>
  );
};
export default Home;
