import { useAtom, useAtomValue } from "jotai";
import { countAtom } from "../atoms/count.atom";

export default function HomePage() {

    const urlImg = '/images/duck.jpg';
    // Pour les images, attention à la casse (vérification React-router)

    // const [count, setCount] = useAtom(countAtom);
    const count = useAtomValue(countAtom);

    return (
        <>
            <h1>Accueil</h1>
            <p>Compteur : {count}</p>
            {/* <img alt="Della Duck" src="/images/duck.jpg" style={{ width: '100%' }} /> */}
            <img alt="Della Duck" src={urlImg} style={{ width: '100%' }} />
        </>
    );
}