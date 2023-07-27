import React, { useState } from "react";

const UncontrolledOnboardingFlow = ({ onFinish, children }) => {
  const [onboardingData, setOnboardingData] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = (stepData) => {
    const nextIndex = currentIndex + 1;

    const updateData = {
      ...onboardingData,
      ...stepData,
    };

    console.log(updateData);

    if (nextIndex < children.length) {
      setCurrentIndex(nextIndex);
    } else {
      onFinish(updateData);
    }

    setOnboardingData(updateData);
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default UncontrolledOnboardingFlow;
