import { useContext } from "react";
import { UserContext } from "../../context/user.context.jsx";

function SelectUser() {
  const { userId, setUserId } = useContext(UserContext);

  const changeUser = (e) => {
    setUserId(Number(e.target.value));
  };

  return (
    <select name="user" id="user" onChange={changeUser} value={userId}>
      <option value="1">John{userId}</option>
      <option value="2">Nick{userId}</option>
      <option value="3">Silver{userId}</option>
    </select>
  );
}

export default SelectUser;
