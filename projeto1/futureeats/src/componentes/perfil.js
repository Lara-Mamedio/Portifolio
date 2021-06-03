

const perfil = () => {
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

                        <img src={} alt="lápis"/>
                    </div>

                    <div>
                        <h3> Endereço cadastrado </h3>
                        <h3> *endereço* </h3>

                        <img src={} alt="lápis"/>
                    </div>
                </article>

                <h3> Histórico de pedidos </h3>

            </main>

            <footer>
                <img src={} alt="home"/>
                <img src={} alt="carrinho"/>
                <img src={} alt="minha conta"/>
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