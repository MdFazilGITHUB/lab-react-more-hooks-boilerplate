import React from "react";

const ToDoItem = ({ item: { data, isHidden }, index, dispatch }) => {
  return (
    <div style={{fontSize:"larger",fontStyle:"italic",backgroundColor:"yellow",filter:`${isHidden?"blur(2px)":"blur(0px)"}`}}>
      <h3>{isHidden ? "This Content is Hidden" : data}</h3>
      <button onClick={()=>{
        dispatch({type:"Change_IsHidden",payload:index})
      }}>Toggle</button>
    </div>
  );
};

export default ToDoItem;
