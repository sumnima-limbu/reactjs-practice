import "../App.css";
import Header from "./Header";
import NavigationMenu from "./NavigationMenu";
import Content from "./Content";
import MainContent from "./MainContent";
import Footer from "./Footer";
import { useState } from "react";

function Example() {
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
      <button onClick={handleChangeName}>Change Name</button>
      <div className="flex-row">
        <Content />
        <MainContent />
        <Content />
      </div>
      <Footer />
    </div>
  );
}

export default Example;
