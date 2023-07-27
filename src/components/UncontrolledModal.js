import { useState } from "react";

const ModelBackground = ({ onClick, children }) => (
  <div
    onClick={onClick}
    style={{
      position: "fixed",
      zIndex: "1",
      left: "0",
      top: "0",
      width: "100%",
      height: "100%",
      overflow: "auto",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    }}
  >
    {children}
  </div>
);

const ModelBody = ({ children }) => (
  <div
    onClick={(event) => event.stopPropagation()}
    style={{
      backgroundColor: "white",
      margin: "10% auto",
      padding: "1rem",
      width: "50%",
    }}
  >
    {children}
  </div>
);

const UncontrolledModal = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button onClick={() => setShow(true)}>Open</button>
      {show && (
        <ModelBackground onClick={() => setShow(false)}>
          <ModelBody>
            <button onClick={() => setShow(false)}>Colse</button>
            {children}
          </ModelBody>
        </ModelBackground>
      )}
    </>
  );
};

export default UncontrolledModal;
