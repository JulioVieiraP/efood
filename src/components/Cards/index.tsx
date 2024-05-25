import Button from '../Button'
import * as S from './styles'
import Star from '../../assets/images/star_favorite-[#1499].png'
import Tag from '../Tag'

export type Props = {
  titulo?: string
  descricao?: string
  img?: string
  fundo: boolean
  Categories?: (string | boolean)[]
  TextoBotao: 'Saiba mais' | 'Adicionar ao carrinho'
  tipo?: string
  id?: number
}

const Card = ({
  descricao,
  img,
  titulo,
  fundo = true,
  TextoBotao,
  Categories,
  tipo,
  id
}: Props) => {
  return (
    <>
      <S.Card fundo={fundo}>
        {fundo && (
          <S.Categories fundo={fundo}>
            {Categories &&
              Categories.map((category, index) => (
                <Tag key={index}>
                  {typeof category === 'boolean'
                    ? category
                      ? 'Destaque da semana'
                      : `Tipo: ${tipo}`
                    : category}
                </Tag>
              ))}
          </S.Categories>
        )}
        <S.Imagem src={img} alt={titulo} fundo={fundo} />
        <div>
          <S.Title>{titulo}</S.Title>
          {fundo && (
            <S.Popularidade>
              <h3>4.5</h3>
              <img src={Star} alt="Avaliar" />
            </S.Popularidade>
          )}
        </div>
        <S.Description fundo={fundo}>{descricao}</S.Description>
        <div>
          <Button
            to={`/Perfil/${id}`}
            type="link"
            title="Adicionar ao carrinho"
          >
            {TextoBotao}
          </Button>
        </div>
      </S.Card>
    </>
  )
}

export default Card
