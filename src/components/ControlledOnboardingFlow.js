import React from "react";

const ControlledOnboardingFlow = ({
  currentIndex,
  onNext,
  onFinish,
  children,
}) => {
  const goToNext = (stepData) => {
    if (currentIndex + 1 < children.length) {
      onNext(stepData);
    } else {
      onFinish();
    }
  };

  const currentChild = React.Children.toArray(children)[currentIndex];

  if (React.isValidElement(currentChild)) {
    return React.cloneElement(currentChild, { goToNext });
  }

  return currentChild;
};

export default ControlledOnboardingFlow;
