import React, { useEffect, useState } from "react";
import "../css/BookTable.css";
const BookList = ({ searchString, books, onBookClick }) => {
  const filteredBooks = searchString
    ? books.filter((book) =>
        book.title.toLowerCase().includes(searchString.trim().toLowerCase())
      )
    : books;

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
          {filteredBooks.map((book) => (
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
