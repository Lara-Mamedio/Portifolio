import {useHistory} from 'react-router-dom'


const perfil = () => {
    const history = useHistory()
    const goPagEditar = () => {
        history.push ("/Editar")
    }
    const goPagEndereço = () => {
        history.push ("/Endereço")
    }
    const goPagFeed = () => {
        history.push ("/Feed")
    }
    const goPagCarrinho = () => {
        history.push ("/Carrinho")
    }
    const goPagPerfil = () => {
        history.push ("/Perfil")
    }
    
    return (
        <div className="perfil">
            <header>
                <h3> Meu perfil </h3>
            </header>

            <main>
                <article>
                    <div>
                        <h3> *nome* </h3>
                        <h3> *e-mail* </h3>
                        <h3> *telefone* </h3>

                        <button onClick={goPagEditar}>
                            <img src={} alt="lápis"/>
                        </button>
                    </div>

                    <div>
                        <h3> Endereço cadastrado </h3>
                        <h3> *endereço* </h3>

                        <button onClick={goPagEndereço}>
                            <img src={} alt="lápis"/>
                        </button>
                    </div>
                </article>

                <h3> Histórico de pedidos </h3>

            </main>

            <footer>
                <button onClick={goPagFeed}>
                    <img src={} alt="home"/>
                </button> 
                <button onClick={goPagCarrinho}>
                    <img src={} alt="carrinho"/>
                </button>               
                <button onClick={goPagPerfil}>
                    <img src={} alt="minha conta"/>
                </button>
            </footer>
        </div>
    )
}

/*o que pode aparecer após <h3> Histórico de pedidos </h3>

    //caso haja algo no historico
<article>
    <h3> *nome do restaurante* </h3>
    <h3> *data do pedido* </h3>
    <h3> *SUBTOTAL R$X,XX* </h3>
</article>

    //caso não tenha nada
<h3> Você não realizou nenhum pedido </h3>*/