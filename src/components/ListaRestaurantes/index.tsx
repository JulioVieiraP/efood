import * as React from 'react'
import * as S from './styles'
import { Restaurante } from '../../pages/Home'
import Card from '../Cards'

export type Props = {
  Efoods: Restaurante[]
}

const ProductCard = ({ Efoods }: Props) => {
  return (
    <S.Main className="container">
      {Efoods &&
        Efoods.map((item) => (
          <Card
            id={item.id}
            tipo={item.tipo}
            Categories={
              item.destacado ? ['Destaque da semana', item.tipo] : [item.tipo]
            }
            key={item.id}
            TextoBotao="Saiba mais"
            descricao={item.descricao}
            titulo={item.titulo}
            img={item.capa}
            fundo={true}
          />
        ))}
    </S.Main>
  )
}

export default ProductCard
