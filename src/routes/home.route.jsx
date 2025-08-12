export default function HomePage() {

    const urlImg = '/images/duck.jpg';
    // Pour les images, attention à la casse (vérification React-router)

    return (
        <>
            <h1>Accueil</h1>
            {/* <img alt="Della Duck" src="/images/duck.jpg" style={{ width: '100%' }} /> */}
            <img alt="Della Duck" src={urlImg} style={{ width: '100%' }} />
        </>
    );
}