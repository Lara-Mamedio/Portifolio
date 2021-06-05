import {useHistory} from 'react-router-dom'


const editar = () => {
    const history = useHistory()
    const goBack = () => {
        history.goBack()
    }
    
    return (
        <div className="editar">
            <header>
                <button onClick={goBack}>
                    <img src={} alt="voltar"/>
                </button>

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