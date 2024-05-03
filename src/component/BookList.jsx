import React from "react";
import "../css/BookTable.css";
const BookList = ({ books, onBookClick }) => {
  return (
    <div className="table-container">
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Language</th>
            <th>Country</th>
            <th>Publisher</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} onClick={() => onBookClick(book)}>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.language}</td>
              <td>{book.country}</td>
              <td>{book.publisher}</td>
              <td>{book.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;
