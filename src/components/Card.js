import { FaTrash } from "react-icons/fa";

function Card({ cardTitle, deleteCard }) {
  return (
    <div>
      <p>
        <span className="trash-can" onClick={() => deleteCard(cardTitle)}>
          <FaTrash />
        </span>
        {cardTitle}
      </p>
    </div>
  );
}

export default Card;
