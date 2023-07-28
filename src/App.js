import RecursiveComponent from "./components/RecursiveComponent";
import Button, { DangerButton, LargeSuccessButton } from "./components/Button";

const nestedObject = {
  a: 1,
  b: {
    b1: 4,
    b2: {
      b23: "Hello",
    },
    b3: {
      b31: {
        message: "Hi",
      },
      b32: {
        message: "Hi",
      },
    },
  },
  c: {
    c1: 2,
    c2: 3,
  },
};

function App() {
  return (
    <>
      <h3>RecursiveComponent</h3>
      <RecursiveComponent data={nestedObject} />
      <h3>Composition & PartiallyApply</h3>
      <Button text="Default" />
      <DangerButton text="Danger Button" />
      <LargeSuccessButton text="Large Success Button" />
    </>
  );
}

export default App;
