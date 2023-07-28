import partiallyApply from "./partiallyApply";

const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        padding: size === "large" ? "2rem" : "0.5rem",
        fontSize: size === "large" ? "2rem" : "1rem",
        backgroundColor: color,
      }}
      {...props}
    >
      {text}
    </button>
  );
};

export default Button;

// Composition
// export const DangerButton = (props) => {
//   return <Button {...props} color="red" />;
// };

// export const LargeSuccessButton = (props) => {
//   return <Button {...props} size="large" color="blue" />;
// };

// PartiallyApply
export const DangerButton = partiallyApply(Button, { color: "red" });

export const LargeSuccessButton = partiallyApply(Button, {
  size: "large",
  color: "blue",
});
