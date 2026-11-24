import { useContext } from "react";
import { userContext } from "../App";

function UserName() {
    const userName = useContext(userContext)

  return <div>
    <h2>Hello {userName}</h2>
  </div>;
}

export default UserName;
