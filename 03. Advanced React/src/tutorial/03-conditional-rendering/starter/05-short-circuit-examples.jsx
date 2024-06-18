import { useState } from "react";

const ShortCircuitExamples = () => {
    const [text, setText] = useState("");
    const [name, setName] = useState("susan");
    const [user, setUser] = useState({ name: "John" });
    const [isEditing, setIsEditing] = useState(false);

    return <div>{user && <SomeComponent name={user.name} />}</div>;
};

const SomeComponent = ({ name }) => {
    return (
        <div>
            <h2>Example</h2>
            <h2>{name}</h2>
        </div>
    );
};
export default ShortCircuitExamples;
