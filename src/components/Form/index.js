import './index.css'
import TextField from '../TextField'

const Form = () => {
    return (
        <section className='formu'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField  label="Nome" placeholder="Digite seu nome"/>
                <TextField  label="Cargo" placeholder="Digite seu cargo"/>
                <TextField  label="Email" placeholder="Digite seu email"/>
            </form>
        </section>
    )
}

export default Form