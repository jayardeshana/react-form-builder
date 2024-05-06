import React, { useEffect, useState } from "react";
import "../css/BookTable.css";
const BookList = ({ searchString, books, onBookClick, setBooks }) => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  useEffect(() => {
    const filtered = searchString
      ? books.filter((book) =>
          book.title.toLowerCase().includes(searchString.trim().toLowerCase())
        )
      : books;
    setFilteredBooks(filtered);
  }, [searchString, books]);

  const handleDelete = (event, book) => {
    event.stopPropagation();
    setSelectedBook(book);
    openDeleteModal();
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteCancel = () => {
    setIsDeleteModalOpen(false);
  };

  const handleDeleteConfirm = () => {
    const updatedBooks = filteredBooks.filter((item) => item !== selectedBook);
    setBooks(updatedBooks); // Update main books list
    setFilteredBooks(updatedBooks); // Update filtered books list
    setIsDeleteModalOpen(false);
  };

  return (
    <>
      {isDeleteModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <p>
              Are you sure you want to delete the book "{selectedBook.title}"?
            </p>
            <div className="modal-buttons">
              <button onClick={handleDeleteConfirm}>Delete</button>
              <button onClick={handleDeleteCancel}>Cancel</button>
            </div>
          </div>
        </div>
      )}

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
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBooks.map((book) => (
              <>
                <tr key={book.id} onClick={() => onBookClick(book)}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
                  <td>{book.language}</td>
                  <td>{book.country}</td>
                  <td>{book.publisher}</td>
                  <td>{book.category}</td>
                  <td>
                    <button onClick={(event) => handleDelete(event, book)}>
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default BookList;
