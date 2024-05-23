import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star_favorite-[#1499].png'

type Props = {
  Efoods: {
    id: number
    title: string
    description: string
    infos: string[]
    nota: string
    image: string
  }[]
}

const ProductCard = ({ Efoods }: Props) => {
  return (
    <>
      <S.Main>
        {Efoods.map((item) => (
          <S.Card key={item.id}>
            <S.Categories>
              {item.infos.map((info) => (
                <Tag key={info}>{info}</Tag>
              ))}
            </S.Categories>
            <S.Imagem src={item.image} />
            <div>
              <S.Title>{item.title}</S.Title>
              <S.Popularidade>
                <h3>{item.nota}</h3>
                <img src={Star} alt="Avaliar" />
              </S.Popularidade>
            </div>
            <S.Description>{item.description}</S.Description>
            <div>
              <Button type="link" title="Click aqui" to="/Perfil">
                Saiba mais
              </Button>
            </div>
          </S.Card>
        ))}
      </S.Main>
    </>
  )
}

export default ProductCard
