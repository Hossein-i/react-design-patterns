import { useState } from "react";
import Model from "./components/Model";
import NumberedList from "./components/NumberedList";
import ProductInfo from "./components/ProductInfo";
import RegularList from "./components/RegularList";
import SplitScreen from "./components/SplitScreen";
import UserInfo from "./components/UserInfo";

const LeftHandComponent = ({ title }) => (
  <div style={{ backgroundColor: "yellow" }}>
    <h1>{title}</h1>
  </div>
);

const RightHandComponent = ({ message }) => (
  <div style={{ backgroundColor: "green" }}>
    <p>{message}</p>
  </div>
);

const users = [
  {
    name: "John Doe",
    age: 54,
    hairColor: "brown",
    hobbies: ["swimming", "bicycling", "video games"],
  },
  {
    name: "Brenda Smith",
    age: 33,
    hairColor: "black",
    hobbies: ["golf", "mathematics"],
  },
  {
    name: "Jane Garcia",
    age: 27,
    hairColor: "blonde",
    hobbies: ["biology", "medicine", "gymnastics"],
  },
];

const products = [
  {
    name: "Flat-Screen TV",
    price: "$300",
    description: "Huge LCD screen, a great deal",
    rating: 4.5,
  },
  {
    name: "Basketball",
    price: "$10",
    description: "Just like the pros use",
    rating: 3.8,
  },
  {
    name: "Running Shoes",
    price: "$120",
    description: "State-of-the-art technology for optimum running",
    rating: 4.2,
  },
];

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent title="Hello world ..." />
        <RightHandComponent message="Welecome to ..." />
      </SplitScreen>
      <RegularList items={users} resourceName="user" itemComponent={UserInfo} />
      <NumberedList
        items={products}
        resourceName="product"
        itemComponent={ProductInfo}
      />
      <button onClick={() => setShow(true)}>Open Model</button>
      <Model show={show} onClose={() => setShow(false)} />
    </>
  );
}

export default App;
