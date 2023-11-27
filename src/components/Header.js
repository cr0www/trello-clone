import "../styles/Header.css";

function Header() {
  return (
    <header>
      <h1>Trello</h1>
      <button className="new-board">New board</button>
      <select className="board-select">
        <option value="Boards">Boards</option>
      </select>
    </header>
  );
}

export default Header;
