import { useEffect, useState } from "react";

const ControlledForm = () => {
  const [name, setName] = useState("");
  const [nameInputError, setNameInputError] = useState("");
  const [age, setAge] = useState();
  const [hairColor, setHairColor] = useState("");

  useEffect(() => {
    if (name.length < 3) {
      setNameInputError("Name must be 3 or more characters!");
    } else {
      setNameInputError("");
    }
  }, [name]);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(name);
    console.log(age);
    console.log(hairColor);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        type="text"
        placeholder="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <p>{nameInputError}</p>
      <input
        name="age"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(event) => setAge(event.target.value)}
      />
      <input
        name="hairColor"
        type="text"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(event) => setHairColor(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ControlledForm;
