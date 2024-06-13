import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Book from "./book";
import { books } from "./books";

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book {...book} key={book.id} number={index} />;
            })}
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
