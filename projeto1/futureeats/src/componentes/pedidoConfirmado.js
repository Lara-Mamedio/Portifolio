import {useHistory} from 'react-router-dom'


const pedidoConfirmado = () => {
    const history = useHistory()
    
    return (
        <div className="pedidoConfirmado">
            <article>
                <img src={} alt="relógio"/>
                
                <h4> Pedido em andamento </h4>
                <h3> *nome do restaurante* </h3>
                <h3> SUBTOTAL R$0,00 </h3>
            </article>
        </div>
    )
}