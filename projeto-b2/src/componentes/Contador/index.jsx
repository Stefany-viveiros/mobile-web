import "./contador.css";
import { Fragment, useState } from "react"

const Contador = () => {
    //Inicializa o estado com valor 0
    const [count, setcount] = useState(0);


    const Aumentar = () => {
       setcount(count + 1)
    
    }
    
    const Diminuir = () => {
        setcount(count - 1)
    }
    return(
        <main className ="container">
            <h1>{count}</h1>

            <section>
                <h2>Resultado</h2>
                <button onClick={Aumentar} style={{marginRight: '10px'}}>Aumentar</button>
                <button onClick={Diminuir}>Diminuir</button>
            </section>
        </main>
    )
}

export default Contador;