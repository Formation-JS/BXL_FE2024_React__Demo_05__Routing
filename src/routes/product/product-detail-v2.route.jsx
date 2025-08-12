import { Navigate, useParams } from "react-router";
import products from '../../data/product.json';

export default function ProductDetailPage() {

    const { id } = useParams();

    const productSelected = products.find(product => product.id === parseInt(id));

    return (
        <>
            <h1>Info sur le produit (Id: {id})</h1>

            {!productSelected && (
                <Navigate to='/not-found' />
            )}

            {productSelected && (
                <>
                    <h2>{productSelected.nom}</h2>
                    <p>{productSelected.description}</p>
                    <p>{productSelected.prix.toLocaleString('fr-be', {
                        style: "currency", currency: productSelected.devise
                    })}</p>
                </>
            )}
        </>
    );
}

