

const carrinho = () => {
    return (
        <div className="carrinho">
            <header>
                <h3> Meu carrinho </h3>
                <h3> Endereço de entrega </h3>
                <h3> *endereço do cliente* </h3>
            </header>

            <main>
                
                
                <div classname="subtotal">
                    <h3> SUBTOTAL </h3>
                    <h3> R$0,00 </h3>
                </div>

                <h3> Forma de pagamento </h3>

                <div classname="pagamento">
                    <label for="dinheiro"> Dinheiro </label>
                    <input type="submit" name="dinheiro" id="dinheiro"/>
                    
                    <label for="cartao"> Cartão </label>
                    <input type="submit" name="cartao" id="cartao"/>
                </div>
            </main>

            <footer>
            <button type="submit"> Confirmar </button>

            <img src={} alt="home"/>
            <img src={} alt="carrinho"/>
            <img src={} alt="minha conta"/>
            </footer>
        </div>
    )
}

/*o que deve aparecer caso o carrinho esteja cheio ou vazio

    //caso esteja VAZIO
<h3> Carrinho vazio </h3>
<h3> Frete R$0,00 </h3>

    //caso o carrinho TENHA ALGO
<h3> *nome do restaurante* </h3>
<h3> *endereço do restaurante* </h3>
<h3> *tempo de entrega* </h3>
<h4> *quantos lanches há (numero)* </h4>
                
<article> 
    <img src="" alt="comida"/>

    <h3> *quantos produtos ha* </h3>
    <h3> *nome do lanche* </h3>
    <h4> *descrição do lanche* </h4>
    <h3> *preço do lanche* </h3>

    <button type="submit"> remover </button>
</article>
        //ps este este article irá se repetir de acordo com quantos lanches há
        //ps2 qualquer uma dessas opçoes ira acima da -div SUBTOTAL
    */

        