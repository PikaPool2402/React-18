import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img =
    "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg";

function BookList() {
    return (
        <section className='booklist'>
            <Book author={author} title={title} img={img} />
            <Book author={author} title={title} img={img} />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
