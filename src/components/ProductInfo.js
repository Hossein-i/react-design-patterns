import useDataSource from "../hooks/useDataSource";

const serverResource = (resourceUrl) => async () => {
  const response = await fetch(resourceUrl);
  const json = await response.json();
  return json;
};

const localStorageResource = (key) => () => {
  return localStorage.getItem(key);
};

const ProductInfo = ({ productId }) => {
  const product = useDataSource(serverResource(`/products/${productId}`));
  const { name, price, description, rating } = product || {};

  return product ? (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Average Rating: {rating}</p>
    </>
  ) : (
    <p>Loading ...</p>
  );
};

export default ProductInfo;
