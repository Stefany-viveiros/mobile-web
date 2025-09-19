import { Fragment } from "react"

const Contador = () => {
    const Aumentar = () => {
        alert("Aumentar")
    
    }
    
    const Diminuir = () => {
        alert("Diminuir")
    }
    return(
        <Fragment>
            <h1>Contador</h1>

            <section>
                <h2>Resultado</h2>
                <button onClick={Aumentar} style={{marginRight: '10px'}}>Aumentar</button>
                <button onClick={Diminuir}>Diminuir</button>
            </section>
        </Fragment>
    )
}

export default Contador;