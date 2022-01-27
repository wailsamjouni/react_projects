import React from 'react';
import "./SideBar.css";
import {AiOutlineClose, AiOutlineGlobal} from "react-icons/ai";

function SideBar() {
  return (
      <div className='container'>
          <div className="list">
              <a href="">Existing Inventory</a>
              <a href="">Used Inventory</a>
              <a href="">Trade-In</a>
              <a href="">Test Drive</a>
              <a href="">Cybertruck</a>
              <a href="">Roadster</a>
              <a href="">Semi</a>
              <a href="">Charging</a>
              <a href="">Powerwall</a>
              <a href="">Commercial Energy</a>
              <a href="">Utilities</a>
              <a href="">Find Us</a>
              <a href="">Support</a>
              <a href="">Investor Relations</a>
          </div>
          <div className='row'>
                  <AiOutlineGlobal size={25}/>
                  <div className="language">
                      <h4>United States</h4>
                      <a href="">English</a>
                  </div>
              </div>
      </div>
  );
}

export default SideBar;
