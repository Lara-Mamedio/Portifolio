import {useHistory} from 'react-router-dom'


const feed = () => {
    const history = useHistory()
    const goPagRestaurante = () => {
        history.push ("/Rstaurante")
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
        <div className="feed">
            <header>
                <h3>FutureEats</h3>

                <input type="search" name="busca"/>

                <h3>Burger</h3>
                <h3>Asiática</h3>
                <h3>Massa</h3>
                <h3>Saudável</h3>
            </header>

            <main>
                <article>
                    <button onClick={goPagRestaurante}>
                        <img src="" alt="comida"/>
                        
                        <h3> *nome do restaurante* </h3>
                        <h3> *tempo de entrega* </h3>
                        <h3> *frete* </h3>
                    </button>
                </article>

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