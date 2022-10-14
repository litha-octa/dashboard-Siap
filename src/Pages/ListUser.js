import React, {useEffect} from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { backIcon } from "../assets";
import { auth } from "../firebase/config";

const ListUser=()=>{

  useEffect(()=>{
  },[])
    return (
      <div className="body">
        <div className="navbar">
          <Link to="/*">
            <div className="textInNavbar">Back to Dashboard</div>
          </Link>
          <div className="titleInNavbar">User List</div>
        </div>
      </div>
    );
}
export default ListUser