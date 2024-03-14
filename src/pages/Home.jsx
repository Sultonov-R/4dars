import { useState, useEffect } from "react";
import Card from "../components/Card";
import data from "../data/data.json";
import { useDispatch } from "react-redux";

function Home() {
  const [books, setBooks] = useState([]);
  const [local, setLocal] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    setBooks(data);
    setLocal(getData());
  }, []);

  function handleBookmarks(data, exist) {
    let copied = JSON.parse(JSON.stringify(local));
    if (exist) {
      copied = copied.filter((el) => {
        return !(el.imageLink == data.imageLink && el.title == data.title);
      });
      dispatch({type:'Ochirish'})
    } else {
      copied.push(data);
      dispatch({type:'Qoshish'})
    }
    setLocal(copied)
    localStorage.setItem("books", JSON.stringify(copied));
  }

  function getData() {
    let data = [];
    if (localStorage.getItem('books')) {
      data = JSON.parse(localStorage.getItem('books'));
    }
    return data;
  }

  return (
    <div className="d-flex container flex-wrap justify-content-center gap-3 mt-4">
      {books.length > 0 &&
        books.map((book, index) => {
          let isExist = false;
          if (local.length) {
            isExist = local.some((el) => {
              return el.imageLink == book.imageLink;
            });
          }
          return (
            <Card
              exist={isExist}
              click={handleBookmarks}
              key={index}
              data={book}
            ></Card>
          );
        })}
    </div>
  );
}

export default Home;
