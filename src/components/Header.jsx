import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  
  const bookmarks = useSelector(state=>state.bookmarks.bookmarks);
  const dispatch = useDispatch();
  
  function getData() {
    let data = [];
    if (localStorage.getItem('books')) {
      data = JSON.parse(localStorage.getItem('books'));
    }
    return data;
  }

  useEffect(()=>{
   let count = getData().length;
   dispatch({type:'Tayinlash', payload: count})

  }, [])

  return (
    <header className="bg-info d-flex p-4 justify-content-between">
      <div className="logo">
        <span>Logo</span>
      </div>
      <div className="count-cart">
        <h3>{bookmarks}</h3>
      </div>
    </header>
  );
}

export default Header;
