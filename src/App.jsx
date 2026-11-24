import "./App.css";
import UserName from "./task1/UserName";
import { createContext, useContext } from "react";
import Header from "./task2/Header";
import Content from "./task2/Content";
import Footer from "./task2/Footer";
import { ThemeContext } from "./main";

export const userContext = createContext();

function App() {
  const userName = "Alice";
  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Header />
      <Content />
      <Footer />
      {/* task 1 */}
      {/* <userContext.Provider value={userName}>
        <UserName />
      </userContext.Provider> */}
    </div>
  );
}

export default App;
