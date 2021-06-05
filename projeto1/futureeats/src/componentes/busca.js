import {useHistory} from 'react-router-dom'


const busca = () => {
    const history = useHistory()
    const goPagRestaurante = () => {
        history.push ("/Rstaurante")
    }
    const goBack = () => {
        history.goBack()
    }


    return (
        <div className="busca">
            <header>
                <button onClick={goBack}>
                    <img src={} alt="voltar"/>
                </button>

                <h3> Busca </h3>

                <input type="search" name="busca"/>
            </header>

            
        </div>
    )
}


/*o que deve aparecer de acordo com o que o usuario busca

    //deve aparecer quando não há nada no input
<h3> Busque pelo nome do restaurante! </h3>

//deve aparecer quando o input foi usado é há um resultado
<article>
    <button onClick={goPagRestaurante}>
        <img src="" alt="comida"/>
        
        <h3> *nome do restaurante* </h3>
        <h3> *tempo de entrega* </h3>
        <h3> *frete* </h3>
    </button>
</article>

    //quando nada é encontrado, após a busca
<h3> Não encontramos nada :( </h3>
        ps. isso fica dentro de uma tag main entre o header e o footer*/
