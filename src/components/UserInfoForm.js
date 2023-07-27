const UserInfoForm = ({ user, onChangeUser, onSaveUser, onRestUser }) => {
  const { name, age, hairColor } = user || {};

  return user ? (
    <>
      <label>
        <span>Name: </span>
        <input
          type="text"
          value={name}
          onChange={(event) => onChangeUser({ name: event.target.value })}
        />
      </label>
      <label>
        <span>Age: </span>
        <input
          type="number"
          value={age}
          onChange={(event) => onChangeUser({ age: event.target.value })}
        />
      </label>
      <label>
        <span>Hair Color: </span>
        <input
          type="text"
          value={hairColor}
          onChange={(event) => onChangeUser({ hairColor: event.target.value })}
        />
      </label>
      <button onClick={onRestUser}>Reset</button>
      <button onClick={onSaveUser}>Save Changes</button>
    </>
  ) : (
    <p>Loading...</p>
  );
};

export default UserInfoForm;
