

const busca = () => {
    return (
        <div className="busca">
            <header>
                <img src={} alt=""/>

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
    <img src="" alt="comida"/>
    
    <h3> *nome do restaurante* </h3>
    <h3> *tempo de entrega* </h3>
    <h3> *frete* </h3>
</article>

    //quando nada é encontrado, após a busca
<h3> Não encontramos nada :( </h3>
        ps. isso fica dentro de uma tag main entre o header e o footer*/
