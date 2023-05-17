import Home from '../pages/Home'

const FormContent = ({nome, idade}) => {
  return (
    <div>
          <p>Meu nome é: {nome}</p>
          <p>Eu tenho: {idade}</p>        
    </div>
  )
}

export default FormContent