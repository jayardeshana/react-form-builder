import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../css/BookModel.css";
import BookList from "./BookList";
const AddBookModel = ({ selectedBook, onAddBook, onClose, onEditBook }) => {
  const [bookData, setBookData] = useState(
    selectedBook || {
      id: "",
      title: "",
      author: "",
      language: "",
      country: "",
      publisher: "",
      category: "",
    }
  );
  const handleSubmit = (event) => {
    event.preventDefault();

    if (selectedBook) {
      const editedBookData = { ...bookData, id: selectedBook.id };
      localStorage.setItem("books", JSON.stringify(editedBookData));
      onEditBook(editedBookData);
    } else {
      const newBookData = { ...bookData, id: uuidv4() };
      localStorage.setItem("books", JSON.stringify(newBookData));
      onAddBook(newBookData);
    }
    setBookData({
      id: "",
      title: "",
      author: "",
      language: "",
      country: "",
      publisher: "",
      category: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setBookData({
      ...bookData,
      [name]: value,
    });
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <h2>{selectedBook ? "Update Book" : "Add Book"}</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title:</label>
            <input
              type="text"
              name="title"
              value={bookData.title}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Author:</label>
            <input
              type="text"
              name="author"
              value={bookData.author}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Language:</label>
            <input
              type="text"
              name="language"
              value={bookData.language}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Country:</label>
            <input
              type="text"
              name="country"
              value={bookData.country}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Publisher:</label>
            <input
              type="text"
              name="publisher"
              value={bookData.publisher}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Category:</label>
            <input
              type="text"
              name="category"
              value={bookData.category}
              onChange={handleInputChange}
              required
            />
          </div>
          <button type="submit">{selectedBook ? "Update" : "Add"}</button>
          <button type="button" onClick={onClose}>
            {selectedBook ? "Delete" : "Cancel"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookModel;
