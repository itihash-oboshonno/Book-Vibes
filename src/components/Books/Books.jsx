import { useEffect, useState } from "react";
import Book from "../Book/Book";
import PropTypes from "prop-types";

const Books = () => {

    const [books, setbooks] = useState([]);

    useEffect( () => {
        fetch('./booksData.json')
        .then(res => res.json())
        .then(data => setbooks(data));
    } , [])

    return (
        <div id="books" className="my-10">
            <h4 className="text-4xl font-bold font-PlayfairD text-center">Books</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

Books.propTypes = {
    books: PropTypes.array,
    book: PropTypes.object
}

export default Books;