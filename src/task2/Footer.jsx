import { useContext } from "react";
import { ThemeContext } from "../main";

function Footer() {
  const { theme } = useContext(ThemeContext);
  return (
    <div>
      <p>Theme: {theme}</p>
    </div>
  );
}

export default Footer;
