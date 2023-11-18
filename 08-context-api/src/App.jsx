import Login from "./components/login/Login";
import Profile from "./components/profile/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-center text-4xl mt-10"> Context API (useContext Hook) Usages</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
