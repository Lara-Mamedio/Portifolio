

const editar = () => {
    return (
        <div className="editar">
            <header>
                <img src={} alt="voltar"/>

                <h3> Editar </h3>
            </header>

            <main>
                <label for="nome"> Nome* </label>
                <input type="text" name="nome" id="nome"/>

                <label for="email"> E-mail* </label>
                <input type="email" name="email" id="email"/>

                <label for="CPF"> CPF* </label>
                <input type="text" name="CPF" id="CPF"/>

                <button type="submit"> Salvar </button>
            </main>
        </div>
    )
}