import { useContext } from "react";
import { ThemeContext } from "../main";

function Header() {
    const { toggleTheme } = useContext(ThemeContext);
    
    return ( 
        <div>
            <h2>החלף את העיצוב בלחיצה על הכפתור</h2>
            <button onClick={toggleTheme}>change</button>
        </div>
     );
}

export default Header;