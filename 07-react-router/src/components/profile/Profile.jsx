import { useParams } from "react-router-dom";

function Profile() {
  const { userId } = useParams();

  return <div className="bg-gray-600 text-white p-7 text-center text-3xl">User : {userId} </div>;
}

export default Profile;
