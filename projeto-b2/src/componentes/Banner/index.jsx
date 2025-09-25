const Banner = (props) => {

      
    /*O Children permite que você passe e renderize um conteudo dinamico dentro de um componente em React */
    

    return (
        <section>
            {props.children}
        </section>
    )
}

export default Banner;