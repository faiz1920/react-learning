// import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setData] = useState([]);

  //   useEffect(() => {
  //     fetch("https://api.github.com/users/faiz1920")
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

  /** use of loaderData hook */
  const data = useLoaderData();

  return (
    <>
      <div className="flex -space-x-2 overflow-hidden justify-center items-center bg-emerald-400 p-5 gap-5">
        <img src={data.avatar_url} alt="Profile Image" className="inline-block h-24 w-24 rounded-full ring-2 ring-white"></img>
        Github Followers : {data.followers}
      </div>
    </>
  );
}
