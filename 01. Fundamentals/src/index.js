import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];

function BookList() {
    const someValue = "shakeAndBake";
    // how to pass down the function as a prop?
    const displayValue = () => {
        console.log(someValue);
    };

    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book {...book} key={book.id} displayValue={displayValue} />
                );
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author, displayValue } = props;
    // grab the function from the prop and pass it to the onClick event!

    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={displayValue}>Click Me!</button>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
