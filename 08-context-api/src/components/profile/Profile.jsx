import { useContext } from "react";
import UserContext from "../../context/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);
  if (!user) return <div className="text-center">Please do Login</div>;
  return <div className="text-center">Welcome : {user.username}</div>;
}
