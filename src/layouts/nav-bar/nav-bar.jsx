import { Link } from "react-router";

export default function NavBar() {

    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Accueil</Link>
                </li>
                <li>
                    <Link to='/product'>Produits</Link>
                </li>
                <li>
                    <Link to='/contact' >Me contacter</Link>
                </li>
            </ul>
        </nav>
    )
}