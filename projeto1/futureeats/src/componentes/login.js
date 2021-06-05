import {useHistory} from 'react-router-dom'


const login = () => {
    const history = useHistory()
    const goPagFeed = () => {
        history.push ("/Feed")
    }
    const goPagCadastro = () => {
        history.push ("/Cadastro")
    }
    
    return (
        <div className="login">
            <header className="headerLogin">
                <img src={} alt="Logo"/>
            </header>

            <main>
                <h3>Entrar</h3>

                <label for="email"> E-mail* </label>
                <input type="email" name="email" id="email"/>

                <label for="senha"> Senha* </label>
                <input type="password" name="senha" id="senha"/>

                <button onClick={goPagFeed}> Entrar </button>

                <button onClick={goPagCadastro}> Não possui cadastro? Clique aqui. </button>

            </main>

        </div>
    )
}

export default login;