import { useParams } from 'react-router-dom'

import * as S from './styles'
import Loading from '../Loading'
import { usePratosQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams<{ id: string }>()

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const { data, isLoading, isError } = usePratosQuery(id!)

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
    return <h1>Erro ao procurar o restaurante</h1>
  }
  return (
    <>
      <S.Imagem style={{ backgroundImage: `url(${data?.capa})` }}>
        <div className="overlay"></div>
        <S.Content className="container">
          <h2>{data?.tipo}</h2>
          <p>{data?.titulo}</p>
        </S.Content>
      </S.Imagem>
    </>
  )
}

export default Banner
