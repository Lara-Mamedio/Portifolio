import {useHistory} from 'react-router-dom'


const pedido = () => {
    const history = useHistory()
    
    return (
        <div className="pedido">
            <h3> Selecione a quantidade desejada </h3>

            

            <button type="submit"> ADICINAR AO CARRINHO? </button>
        </div>
    )
}