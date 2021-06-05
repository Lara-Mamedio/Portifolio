import {useHistory} from 'react-router-dom'


const restaurante = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div className="resturante">
            <header>
                <button onClick={goBack}>
                    <img src={} alt="voltar"/>
                </button>

                <h3> Restaurante </h3>
            </header>

            <main>
                <article className="infoRestaurante">
                    <img src={} alt="comida?"/>

                    <h3> *nome restaurante* </h3>
                    <h3> *tipo de comida* </h3>
                    <h3> *tempo de entrega* </h3>
                    <h3> *frete dos produtos* </h3>
                    <h3> *esndereço do restaurante* </h3>
                </article>

                <h3> Principais </h3>

                <article className="menu">
                    <img src="" alt="comida"/>

                    <h3> *nome do lanche* </h3>
                    <h4> *descrição do lanche* </h4>
                    <h3> *preço do lanche* </h3>

                    <button type="submit"> adicionar/remover </button>
                </article>

                <h3> Acompanhamentos </h3>

                <article className="menu">
                    <img src="" alt="comida"/>

                    <h3> *nome do lanche* </h3>
                    <h4> *descrição do lanche* </h4>
                    <h3> *preço do lanche* </h3>

                    <button type="submit"> adicionar/remover </button>
                </article>
            </main>
        </div>
    )
}