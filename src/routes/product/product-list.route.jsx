import { Link, useSearchParams } from 'react-router';
import products from './../../data/product.json';
import { useState } from 'react';

export default function ProductListPage() {
    
    const [searchParams, setSearchParams] = useSearchParams()
    // console.log('Param de l\'url : ', searchParams.get('example'))

    const query = searchParams.get('query') ?? '';


    // const [query, setQuery] = useState('');
    const productFilter = products.filter(p => p.nom.includes(query));

    return (
        <>
            <h1>La liste des produits</h1>
            {/* <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} /> */}
            <input type="text" value={query} onChange={(e) => setSearchParams({query: e.target.value})} />
            <ul>
                {productFilter.map(product => (
                    <li>
                        <Link to={product.id.toString()}>{product.nom}</Link>
                    </li>
                ))}
            </ul>

        <Link to={'42'}>Produit en erreur</Link>
        </>
    );
}