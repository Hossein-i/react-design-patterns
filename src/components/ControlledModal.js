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

const ControlledModel = ({ show, onClose, children }) => {
  return show ? (
    <ModelBackground onClick={() => onClose()}>
      <ModelBody>
        <button onClick={() => onClose()}>Colse</button>
        {children}
      </ModelBody>
    </ModelBackground>
  ) : null;
};

export default ControlledModel;
