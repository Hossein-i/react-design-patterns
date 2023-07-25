const Container = ({ children }) => (
  <div style={{ display: "flex" }}>{children}</div>
);

const Pane = ({ weight, children }) => (
  <div style={{ flex: weight }}>{children}</div>
);

const SplitScreen = ({ leftWeight = 1, rightWeight = 1, children }) => {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
};

export default SplitScreen;
