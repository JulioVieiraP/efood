import Header from '../../components/Header'
import Pratos from '../../components/Pratos'

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Produtos = () => {
  return (
    <>
      <Header Home={false} />
      <Pratos />
    </>
  )
}

export default Produtos
