import React from 'react'
export const Dark = (props) =>{
    
    
    return (
        <div className="toggleContainer">
           <label class="switch">
  <input className="checkBox" type="checkbox"  {...props}></input>
  <span class="slider round"></span>
</label> 

        </div>
    )
}
