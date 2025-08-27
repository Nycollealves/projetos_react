function Formulario() {

    function cadastrar(e){
        e.preventDefault()
        console.log('Cadastrou um usuário')
    }
    return(
        <div>
            <h1>Cadadtro</h1>
            <form>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="cadastrar"/>
                </div>
            </form>
        </div>
    )
    
}
export default Formulario