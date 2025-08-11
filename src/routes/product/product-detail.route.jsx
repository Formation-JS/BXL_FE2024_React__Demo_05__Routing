import { useParams } from "react-router";

export default function ProductDetailPage() {

    const { id } = useParams();

    return (
        <>
            <h1>Info sur le produit</h1>
            <p>L'id de la route "{id}"</p>
        </>
    );
}