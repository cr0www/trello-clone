import "../styles/List.css";
import Card from "./Card";
import { useState } from "react";
import SubmitForm from "./Partials/SubmitForm";
import { FaTrash } from "react-icons/fa";

function List({ cardTitle, handleDelete }) {
  const [newCards, setNewCards] = useState([]);
  const [isOn, setIsOn] = useState(false);
  const [title, setTitle] = useState("");
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = (e, item) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/plain", JSON.stringify(item));

    const iOfTitle = newCards.indexOf(item);
    const removedI = [
      ...newCards.slice(0, iOfTitle),
      ...newCards.slice(iOfTitle + 1),
    ];
    setTimeout(() => setNewCards(removedI), 1);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = JSON.parse(e.dataTransfer.getData("text/plain"));

    setNewCards([...newCards, droppedItem]);

    setDraggedItem(null);
  };

  function handleSwitch() {
    setIsOn(!isOn);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setNewCards([...newCards, title]);
    setIsOn(false);
  }

  function deleteCard(title) {
    const iOfTitle = newCards.indexOf(title);
    const newList = [
      ...newCards.slice(0, iOfTitle),
      ...newCards.slice(iOfTitle + 1),
    ];
    setNewCards(newList);
  }

  if (isOn) {
    return (
      <div className="list" onDragOver={handleDragOver} onDrop={handleDrop}>
        <p>
          <span className="trash-can" onClick={() => handleDelete(cardTitle)}>
            <FaTrash />
          </span>
          {cardTitle}
        </p>
        <hr />
        {newCards.map((title, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, title)}
          >
            <Card key={index} cardTitle={title} deleteCard={deleteCard} />
          </div>
        ))}
        <SubmitForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
        />
      </div>
    );
  } else {
    return (
      <div className="list" onDragOver={handleDragOver} onDrop={handleDrop}>
        <p>
          <span className="trash-can" onClick={() => handleDelete(cardTitle)}>
            <FaTrash />
          </span>
          {cardTitle}
        </p>
        <hr />
        {newCards.map((title, index) => (
          <div
            key={index}
            draggable
            onDragStart={(e) => handleDragStart(e, title)}
          >
            <Card key={index} cardTitle={title} deleteCard={deleteCard} />
          </div>
        ))}
        <div className="new-card" onClick={handleSwitch}>
          + New card
        </div>
      </div>
    );
  }
}

export default List;
