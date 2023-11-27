import { useState } from "react";
import "../styles/NewList.css";
import SubmitForm from "./Partials/SubmitForm";

function NewList({ handleTitle }) {
  const [isOn, setIsOn] = useState(false);
  const [title, setTitle] = useState("");

  function handleSwitch() {
    setIsOn(!isOn);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleTitle(title);
    setIsOn(false);
  }

  if (isOn) {
    return (
      <div className="new-list">
        <SubmitForm
          handleSubmit={handleSubmit}
          title={title}
          setTitle={setTitle}
        />
      </div>
    );
  } else {
    return (
      <div className="new-list" onClick={handleSwitch}>
        + Add another list
      </div>
    );
  }
}

export default NewList;
