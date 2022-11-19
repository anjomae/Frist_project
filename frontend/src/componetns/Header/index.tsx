import logo from "../../assets/img/Logo.svg"
import "./styles.css"

function Header() {
   return(
   <header>
    <div className="dsmeta-logo-conatiner">
        <img src={logo} alt="DSmeta"/>
        <h1>DSMeta</h1>
    </div>
   </header>
   
   )
  }
  
  export default Header
  