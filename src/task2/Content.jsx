import { useContext } from "react";
import { ThemeContext } from "../main";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <div className={`box ${theme}`}></div>
      <div className={`box ${theme}`}></div>
      <div className={`box ${theme}`}></div>
      <div className={`box ${theme}`}></div>
      <div className={`box ${theme}`}></div>
      <div className={`box ${theme}`}></div>
    </div>
  );
}

export default Content;
