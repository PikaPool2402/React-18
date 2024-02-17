import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img
        src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
        alt='Interesting Facts For Curious Minds'
    />
);
const Title = () => {
    return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
        Jordan Moore
    </h4>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
