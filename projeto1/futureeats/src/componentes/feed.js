

const feed = () => {
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
                    <img src="" alt="comida"/>
                    
                    <h3> *nome do restaurante* </h3>
                    <h3> *tempo de entrega* </h3>
                    <h3> *frete* </h3>
                </article>

            </main>

            <footer>
                <img src={} alt="home"/>
                <img src={} alt="carrinho"/>
                <img src={} alt="minha conta"/>
            </footer>
        </div>
    )
}