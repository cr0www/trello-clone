function SubmitForm({ handleSubmit, title, setTitle }) {
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter list title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></input>

      <input type="submit" value="Submit" />
    </form>
  );
}

export default SubmitForm;
