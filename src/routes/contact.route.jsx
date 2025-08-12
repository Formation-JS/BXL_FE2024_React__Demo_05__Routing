import { useAtom, useSetAtom } from "jotai";
import { countAtom } from "../atoms/count.atom";

export default function ContactPage() {

    // const [count, setCount] = useAtom(countAtom);
    const setCount = useSetAtom(countAtom);
    
    
    const handleIncr = () => {
        setCount(prevCount => prevCount + 1)
    }

    return (
        <>
            <h1>Contactez moi</h1>
            <button onClick={handleIncr}>+1</button>
        </>
    );
}