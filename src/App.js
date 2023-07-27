import { useState } from "react";
import ControlledForm from "./components/ControlledForm";
import ControlledModel from "./components/ControlledModal";
import UncontrolledForm from "./components/UncontrolledForm";
import UncontrolledModal from "./components/UncontrolledModal";
import UncontrolledOnboardingFlow from "./components/UncontrolledOnboardingFlow";
import ControlledOnboardingFlow from "./components/ControlledOnboardingFlow";

const StepOne = ({ goToNext }) => (
  <>
    <h1>Step 1</h1>
    <button onClick={() => goToNext({ name: "Hossein" })}>Next</button>
  </>
);
const StepTwo = ({ goToNext }) => (
  <>
    <h1>Step 2</h1>
    <button onClick={() => goToNext({ age: 70 })}>Next</button>
  </>
);
const StepThree = ({ goToNext }) => (
  <>
    <h1>Step 3</h1>
    <p>Congratulations! You qualify for our senior discount</p>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);
const StepFour = ({ goToNext }) => (
  <>
    <h1>Step 4</h1>
    <button onClick={() => goToNext({ hairColor: "brown" })}>Next</button>
  </>
);

function App() {
  const [show, setShow] = useState(false);
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = (stepData) => {
    setOnboardingData({ ...onboardingData, ...stepData });
    setCurrentIndex(currentIndex + 1);
  };

  const handleFinish = () => {
    console.log(onboardingData);
    alert("Onboarding complete!");
  };

  return (
    <>
      <h3>UncontrolledForm</h3>
      <UncontrolledForm />
      <h3>ControlledForm</h3>
      <ControlledForm />
      <h3>UncontrolledModal</h3>
      <UncontrolledModal>
        <UncontrolledForm />
      </UncontrolledModal>
      <h3>ControlledModal</h3>
      <button onClick={() => setShow(true)}>Open</button>
      <ControlledModel show={show} onClose={() => setShow(false)}>
        <ControlledForm />
      </ControlledModel>
      <h3>UncontrolledOnboardingFlow</h3>
      <UncontrolledOnboardingFlow
        onFinish={(data) => {
          console.log(data);
          alert("Onboarding complete!");
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledOnboardingFlow>
      <h3>ControlledOnboardingFlow</h3>
      <ControlledOnboardingFlow
        currentIndex={currentIndex}
        onNext={handleNext}
        onFinish={handleFinish}
      >
        <StepOne />
        <StepTwo />
        {onboardingData.age >= 50 && <StepThree />}
        <StepFour />
      </ControlledOnboardingFlow>
    </>
  );
}

export default App;
