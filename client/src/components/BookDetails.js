import React from "react";
import { useQuery } from "@apollo/react-hooks";

import { getBookQuery } from "../queries/queries";

const BookDetails = props => {
  const { data } = useQuery(getBookQuery, {
    variables: {
      id: props.bookId
    }
  });

  const displayBookDetails = () => {
    if (data) {
      const { book } = data;
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genre}</p>
          <p>{book.author.name}</p>
          <p>All books by this author:</p>
          <ul className="other-books">
            {book.author.books.map(item => {
              return(
                <li key={item.id}>{item.name}</li>
              )
            })}
          </ul>
        </div>
      );
    } else {
      return(
        <div>No book selected...</div>
      )
    }
  };

  // const displayBook = () => {

  //   if (loading) {
  //     return (<div>Loading book...</div>);
  //   } else {
  //     return data.book.map(book => {
  //       return (<li key={book.id}>{book.name}</li>);
  //     });
  //   }
  // };

  return (
  <div id="book-details">
    {displayBookDetails()}
  </div>);
};

export default BookDetails;
