

const login = () => {
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

                <button type="submit"> Entrar </button>

                <a href=""> Não possui cadastro? Clique aqui. </a>

            </main>

        </div>
    )
}

export default login;