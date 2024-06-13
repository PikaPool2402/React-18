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
    return (
        <section className='booklist'>
            <EventExamples />

            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e); // event object!
        console.log(e.target); // points to the element!
        console.log(e.target.name); // points to the name of the element!
        console.log(e.target.value); // points to the value inside the element!
    };
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
