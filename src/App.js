import SplitScreen from "./components/SplitScreen";

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

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent title="Hello world ..." />
        <RightHandComponent message="Welecome to ..." />
      </SplitScreen>
    </>
  );
}

export default App;
