import { useNavigate, useParams } from "react-router";
import products from '../../data/product.json';
import { useEffect } from "react";

export default function ProductDetailPage() {

    const { id } = useParams();
    const navigate = useNavigate();

    const productSelected = products.find(product => product.id === parseInt(id));

    useEffect(() => {
        if (!productSelected) {
            navigate('/not-found');
        }
    }, [productSelected]);

    return (
        <>
            <h1>Info sur le produit (Id: {id})</h1>

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

