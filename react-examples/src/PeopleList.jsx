import React from "react";

const PeopleList = () => {
  const data = [
    {
      id: 1,
      name: "John Doe",
      age: 28,
      hobbies: [
        { id: 1, hobby: "Reading" },
        { id: 2, hobby: "Cycling" },
      ],
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 34,
      hobbies: [
        { id: 1, hobby: "Cooking" },
        { id: 2, hobby: "Hiking" },
      ],
    },
  ];

  return (
    <div>
      {data.map((person) => (
        <div key={person.id}>
          <h2>{person.name}</h2>
          <p>Age: {person.age}</p>
          <h3>Hobbies:</h3>
          <ul>
            {person.hobbies.map((hobby) => (
              <li key={hobby.id}>{hobby.hobby}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PeopleList;