import ResourceLoader from "./containers/ResourceLoader";
import UserInfo from "./components/UserInfo";
import ProductInfo from "./components/ProductInfo";
import DataSource from "./containers/DataSource";

const getServerData = (url) => async () => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};

const getLocalStorageData = (key) => () => {
  return JSON.parse(localStorage.getItem(key));
};

const Text = ({ data }) => {
  const { title, message } = data || {};

  return (
    <div>
      <h1>{title}</h1>
      <p>{message}</p>
    </div>
  );
};

function App() {
  return (
    <>
      <ResourceLoader resourceUrl="/users/123" resourceName="user">
        <UserInfo />
      </ResourceLoader>
      <DataSource
        getDataFunc={getServerData("/products/1234")}
        resourceName="product"
      >
        <ProductInfo />
      </DataSource>
      <DataSource getDataFunc={getLocalStorageData("data")} resourceName="data">
        <Text />
      </DataSource>
    </>
  );
}

export default App;
