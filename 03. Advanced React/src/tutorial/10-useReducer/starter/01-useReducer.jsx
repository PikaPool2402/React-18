import { data } from "../../../data";
import { useReducer, useState } from "react";

const defaultState = {
    people: data,
    isLoading: false,
};

// define action variables!
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
    if (action.type == "CLEAR_LIST") {
        return { ...state, people: [] };
    }

    // return state;
    throw new Error(`no matching "${action.type} - action type!"`);
};

const ReducerBasics = () => {
    const [state, dispatch] = useReducer(reducer, defaultState);

    const removeItem = (id) => {
        // const newPeople = people.filter((person) => {
        //     return person.id !== id;
        // });
        // setPeople(newPeople);
    };
    const clearAllItems = () => {
        dispatch({ type: CLEAR_LIST });
        // setPeople([]);
    };
    const resetList = () => {
        // setPeople(data);
    };
    console.log(state);

    return (
        <div>
            {state.people.map((person) => {
                const { id, name } = person;
                return (
                    <div key={id}>
                        <h4>{name}</h4>
                        <button onClick={() => removeItem(id)}>
                            Remove Item
                        </button>
                    </div>
                );
            })}

            {state.people.length < 1 ? (
                <button
                    type='button'
                    className='btn'
                    style={{ marginTop: "2rem" }}
                    onClick={resetList}
                >
                    Reset List
                </button>
            ) : (
                <button
                    type='button'
                    className='btn'
                    style={{ marginTop: "2rem" }}
                    onClick={clearAllItems}
                >
                    Remove All
                </button>
            )}
        </div>
    );
};

export default ReducerBasics;
