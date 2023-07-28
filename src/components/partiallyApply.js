const partiallyApply = (Component, partialProps) => {
  return (props) => {
    return <Component {...props} {...partialProps} />;
  };
};

export default partiallyApply;
