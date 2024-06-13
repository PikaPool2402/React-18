// filter - returns a new array, can manipulate the size of the new array (unlike map), return values based on some condition, if no match it returns an empty array.
// find - returns a single instance (not an array), returns the first match only, if no match it returns undefined.

const obj = [
    {
        name: "bob",
        age: 20,
        position: "developer",
    },
    {
        name: "anna",
        age: 25,
        position: "designer",
    },
    {
        name: "susy",
        age: 31,
        position: "the boss",
    },
    {
        name: "john",
        age: 35,
        position: "intern",
    },
];

const youngPeople = obj.filter((person) => {
    // return all the items of the array!
    return true;
});

const youngPeople = obj.filter((person) => {
    // if (person.age < 30) {
    //     return true;
    // }
    return person.age < 30; // returns true/false based on the condition.
});
console.log(youngPeople);

// persons = first object, if we return true in the callback function, we return the item. If we return false in the callback function, we skip the item.
// persons = second object, and same logic.
// persons = third object, and same logic.

const developers = obj.filter((person) => {
    return person.position === "developer";
});

// alternative approach!
const developers = obj.filter((person) => person.position === "developer");

// find method returns a single object!
const peter = obj.find((person) => person.name === "john");
console.log(peter);
