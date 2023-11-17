import NewComponent from "./NewComponent";

function App() {
  const username = "Faiz Ansari";
  return (
    <>
      <h1> Vite React </h1>
      <NewComponent></NewComponent>
      <h3> Hi {username}</h3>
    </>
  );
}

export default App;
