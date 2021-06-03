

const cadastro = () => {
    return (
        <div className="cadastro">
            <header className="headerCadastro">
                <img src={} alt="voltar"/>
                <img src={} alt="logo"/>
            </header>

            <main>
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

                <button type="submit"> Criar </button>
            </main>
        </div>
    )
}