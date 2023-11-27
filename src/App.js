import "./styles/App.css";
import NewList from "./components/NewList";
import Header from "./components/Header";
import List from "./components/List";
import { useState } from "react";

function App() {
  const [cardTitle, setCardTitle] = useState("");
  const [cardList, setCardList] = useState([]);
  function handleTitle(title) {
    setCardList([...cardList, title]);
    setCardTitle(title);
    console.log(cardTitle);
  }
  function handleDelete(title) {
    const iOfTitle = cardList.indexOf(title);
    const newList = [
      ...cardList.slice(0, iOfTitle),
      ...cardList.slice(iOfTitle + 1),
    ];
    setCardList(newList);
  }
  return (
    <div className="App">
      <Header />
      <div className="lists">
        {cardList.map((title, index) => (
          <List key={index} cardTitle={title} handleDelete={handleDelete} />
        ))}
        <NewList handleTitle={handleTitle} />
      </div>
    </div>
  );
}

export default App;
