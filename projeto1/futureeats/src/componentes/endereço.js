import {useHistory} from 'react-router-dom'


const endereço = () => {
    const history = useHistory()
    const goPagFeed = () => {
        history.push ("/Feed")
    }
    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div className="endereço">
            <header className="cadastro">
                <button onClick={goBack}>
                    <img src={} alt="voltar"/>
                </button>
            </header>

            <main>
                <h3> Meu endereço </h3>

                <label for="logradouro"> logradouro* </label>
                <input type="text" name="logradouro" id="logradouro"/>

                <label for="numero"> Número* </label>
                <input type="number" name="numero" id="numero"/>

                <label for="complemento"> Complemento </label>
                <input type="text" name="complemento" id="complemento"/>

                <label for="bairro"> Bairro* </label>
                <input type="text" name="bairro" id="bairro"/>

                <label for="cidade"> Cidade* </label>
                <input type="text" name="cidade" id="cidade"/>

                <label for="estado"> Estado* </label>
                <input type="text" name="estado" id="estado"/>

                <button onClick={goPagFeed}> Salvar </button>
            </main>
        </div>
    )
}