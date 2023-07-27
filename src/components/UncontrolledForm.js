import { useRef } from "react";

const UncontrolledForm = () => {
  const nameInput = useRef();
  const ageInput = useRef();
  const hairColorInput = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(nameInput.current.value);
    console.log(ageInput.current.value);
    console.log(hairColorInput.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={nameInput} name="name" type="text" placeholder="Name" />
      <input ref={ageInput} name="age" type="number" placeholder="Age" />
      <input
        ref={hairColorInput}
        name="hairColor"
        type="text"
        placeholder="Hair Color"
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default UncontrolledForm;
