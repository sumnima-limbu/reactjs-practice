import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
// import Content from "./components/Content";
// import MainContent from "./components/MainContent";
// import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [name, setName] = useState("Sumnima");

  const handleChangeName = () => {
    setName("Rama");
  };

  const information = {
    name: "Sumnima",
    address: "Lalitpur",
    age: 21,
  };

  return (
    <div className="App">
      <p>{name}</p>
      {/* <Header name={name} address="KTM" age="21" /> */}
      <Header {...information} />
      <NavigationMenu />
      {/* <div className="flex-row">
        <Content />
        <MainContent />
        <Content />
      </div>
      <Footer /> */}
      <button onClick={handleChangeName}>Change Name</button>
    </div>
  );
}

export default App;
