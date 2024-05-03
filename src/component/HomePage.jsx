import React, { useState } from "react";
import Header from "./Header";
import BookList from "./BookList";
import AddBookModel from "./AddBookModel";

const HomePage = () => {
  const [books, setBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchString, setSearchString] = useState("");

  const addBook = (newBook) => {
    setBooks([...books, newBook]);
    setShowModal(false);
  };

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const handleEditBook = (editedBook) => {
    const updatedBooks = books.map((book) => {
      return book.id === editedBook.id ? editedBook : book;
    });
    setBooks(updatedBooks);
    setShowModal(false);
    setSelectedBook(null);
  };

  return (
    <>
      <Header
        searchString={searchString}
        setSearchString={setSearchString}
        onAddClick={() => setShowModal(true)}
      />
      <BookList
        searchString={searchString}
        books={books}
        onBookClick={handleBookClick}
      />
      {showModal && (
        <AddBookModel
          selectedBook={selectedBook}
          onAddBook={addBook}
          onEditBook={handleEditBook}
          onClose={() => {
            setShowModal(false);
            setSelectedBook(null);
          }}
        />
      )}
    </>
  );
};

export default HomePage;
