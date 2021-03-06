import React, { useContext } from 'react';
import { BookContext } from '../Contexts/BookContext';

const BookDetails = ({ book }) => {
    const { dispatch } = useContext(BookContext);
    return ( 
        <li onClick={() => dispatch({type: 'Remove_Book', id: book.id})}>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li>
     );
}
 
export default BookDetails;