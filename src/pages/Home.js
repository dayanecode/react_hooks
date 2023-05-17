import { useState } from 'react'
import FormContent from '../components/FormContent'

const Home = () => {


    const [nome, setNome] = useState('Day')
    const [idade, setIdade] = useState('30')
    const [formularioSubmetido, setFormularioSubmetido] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setFormularioSubmetido(true)

        console.log(nome)
        console.log(idade)
}

  return (
    <div>
        <h1>HOME</h1>
        <form onSubmit={handleSubmit} >
            <div>
                <input 
                    type="text" 
                    placeholder='Preencha seu nome'
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>
            <div>
                <input 
                    type="text" 
                    placeholder='Preencha sua idade' 
                    onChange={(e) => setIdade(e.target.value)}
                />
            </div>
            <input type="submit" value='Gravar' />
        </form>
        {formularioSubmetido && 
            <FormContent nome={nome} idade={idade} />
        }
    </div>
  )
}

export default Home