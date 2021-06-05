import {useHistory} from 'react-router-dom'


const cadastro = () => {
    const history = useHistory()
    const goPagEndereço = () => {
        history.push ("/Endereço")
    }
    const goBack = () => {
        history.goBack()
    }

    return (
        <div className="cadastro">
            <header className="headerCadastro">
                <button onClick={goBack}>
                    <img src={} alt="voltar"/>
                </button>
            </header>

            <main>
                <img src={} alt="logo"/>

                <h3> Cadastrar </h3>

                <label for="nome"> Nome* </label>
                <input type="text" name="nome" id="nome"/>

                <label for="email"> E-mail* </label>
                <input type="email" name="email" id="email"/>

                <label for="CPF"> CPF* </label>
                <input type="text" name="CPF" id="CPF"/>

                <label for="senha"> Senha* </label>
                <input type="password" name="senha" id="senha"/>

                <label for="senha"> Confirmar* </label>
                <input type="password" name="senha" id="senha"/>

                <button onClick={goPagEndereço}> Criar </button>
            </main>
        </div>
    )
}