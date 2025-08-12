import { Link } from 'react-router';
import products from './../../data/product.json';

export default function ProductListPage() {

    return (
        <>
            <h1>La liste des produits</h1>
            <ul>
                {products.map(product => (
                    <li>
                        <Link to={product.id.toString()}>{product.nom}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}