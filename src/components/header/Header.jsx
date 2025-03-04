import { Link } from "react-router-dom";

function Header() {


  return (
    <header>
        <img src='https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png'/>

<nav>
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
      </ul>
    </nav>
    </header>
  )
}

export default Header;