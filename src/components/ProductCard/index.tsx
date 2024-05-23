import Button from '../Button'
import * as S from './styles'
import Tag from '../Tag'
import Star from '../../assets/images/star_favorite-[#1499].png'

export type Props = {
  Efoods: {
    id: number
    title: string
    description: string
    infos: string[]
    nota: string
    image: string
  }[]
  Card2?: boolean
  TextoBotao?: string
}

const ProductCard = ({ Efoods, Card2 = false }: Props) => {
  return (
    <>
      <S.Main Card2={Card2}>
        {Efoods.map((item) => (
          <S.Card Card2={Card2} key={item.id}>
            {!Card2 && (
              <S.Categories Card2={Card2}>
                {item.infos.map((info: string) => (
                  <Tag key={info}>{info}</Tag>
                ))}
              </S.Categories>
            )}
            <S.Imagem src={item.image} Card2={Card2} />
            <div>
              <S.Title>{item.title}</S.Title>
              {!Card2 && (
                <S.Popularidade>
                  <h3>{item.nota}</h3>
                  <img src={Star} alt="Avaliar" />
                </S.Popularidade>
              )}
            </div>
            <S.Description Card2={Card2}>{item.description}</S.Description>
            <div>
              {Card2 ? (
                <Button
                  type="button"
                  title="Click aqui"
                  onClick={() => alert('clicou')}
                >
                  Adicionar ao carrinho
                </Button>
              ) : (
                <Button type="link" title="Click aqui" to="/Perfil">
                  Saiba mais
                </Button>
              )}
            </div>
          </S.Card>
        ))}
      </S.Main>
    </>
  )
}

export default ProductCard
