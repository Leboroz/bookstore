const AddInput = () => (
  <div>
    <h2>ADD NEW BOOK</h2>
    <form action="">
      <label htmlFor="title">
        <input id="title" type="text" placeholder="Book title" />
      </label>
      <label htmlFor="category">
        <input id="category" type="text" placeholder="Category" />
      </label>
      <button type="submit">ADD BOOK</button>
    </form>
  </div>
);

export default AddInput;
