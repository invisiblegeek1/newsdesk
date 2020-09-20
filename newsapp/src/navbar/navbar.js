import React from 'react';

import "./navbar.css";
import {withRouter} from 'react-router-dom';




function NavBar (){
  
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
  let menuBtn = ()=>{
    items.classList.add("active");
    menuBtn.classList.add("hide");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  let cancelBtn = ()=>{
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    searchBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    form.classList.remove("active");
    cancelBtn.style.color = "#ff3d00";
  }
  let searchBtn= ()=>{
    form.classList.add("active");
    searchBtn.classList.add("hide");
    cancelBtn.classList.add("show");
  }
  return (

    
    <div>
    <nav>
      <div className="menu-icon">
<span className="fas fa-bars" onClick={menuBtn}></span></div>
<div className="logo">
NewsDesk</div>
<div className="nav-items">
<li><a href="/">Home</a></li>
<li><a href="/Business">Business</a></li>
<li><a href="/science">science</a></li>
<li><a href="/health">health</a></li>
<li><a href="/sports">sports</a></li>
<li><a href="/entertainment">entertainment</a></li>
</div>
<div className="search-icon" onClick={searchBtn}>
<span className="fas fa-search"></span></div>
<div className="cancel-icon" onClick={cancelBtn}>
<span className="fas fa-times"></span></div>
<form action="#">
        <input type="search" className="search-data" placeholder="Search" required></input>
        <button type="submit" className="fas fa-search">search</button>
      </form>
</nav>

    
   

    
    </div>
    
    

  )

  
}
export default withRouter(NavBar);