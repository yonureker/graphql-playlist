import React, {useState} from "react";
import { useQuery } from "@apollo/react-hooks";
// file imports
import { getBooksQuery } from '../queries/queries';
import BookDetails from "./BookDetails";

const BookList = () => {
  const { loading, data } = useQuery(getBooksQuery);
  const [selectedBookId, setSelectedBookId] = useState("");

  const displayBooks = () => {
    
    if (loading) {
      return (<div>Loading books...</div>);
    } else {
      return data.books.map(book => {
        return (<li key={book.id} onClick={(e) => setSelectedBookId(book.id) }>{book.name}</li>);
      });
    }
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      <BookDetails bookId={selectedBookId}/>
    </div>
  );
};

export default BookList;
