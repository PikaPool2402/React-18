import { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
    const [isLoading, setIsLoading] = useState(true); // initially true, as we always load data first!
    const [isError, setIsError] = useState(false); // initially false, we assume no error occurs!
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    setIsError(true);
                    setIsLoading(false);
                    return;
                    // exit the function to throw an error!
                }
                const user = await response.json();
                setUser(user);
            } catch (error) {
                setIsError(true);
                // go-to the error block return!
            }
            setIsLoading(false);
            // loading-block is complete in both cases!
        };
        fetchUser();
    }, []);

    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    // after loading is complete, either we get an error, or the data!

    if (isError) {
        return <h1>There Was An Error!</h1>;
    }
    return (
        <div>
            <img
                style={{ width: "150px", borderRadius: "25px" }}
                src={user.avatar_url}
                alt={user.name}
            />
            <h2>{user.name}</h2>
            <h4>works at {user.company}</h4>
            <p>{user.bio}</p>
        </div>
    );
};
export default MultipleReturnsFetchData;
