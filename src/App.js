import ProductInfo from "./components/ProductInfo";
import UserInfo from "./components/UserInfo";

function App() {
  return (
    <>
      <h2>User</h2>
      <UserInfo userId={123} />
      <h2>Product</h2>
      <ProductInfo productId={1234} />
    </>
  );
}

export default App;
