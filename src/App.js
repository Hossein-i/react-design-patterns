import UserInfo from "./components/UserInfo";
import UserInfoForm from "./components/UserInfoForm";
import withEditableResource from "./components/withEditableResource";
import withResource from "./components/withResource";

const UserInfoWithLoader = withResource(UserInfo, "/users/123", "user");
const UserInfoFormWithLoader = withEditableResource(
  UserInfoForm,
  "/users/123",
  "user"
);

function App() {
  return (
    <>
      <UserInfoWithLoader />
      <UserInfoFormWithLoader />
    </>
  );
}

export default App;
