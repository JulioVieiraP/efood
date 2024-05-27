import Button from '../Button'
import * as S from './styles'
import Star from '../../assets/images/star_favorite-[#1499].png'
import Tag from '../Tag'
import { useDispatch } from 'react-redux'
import { openModal } from '../../redux/reducers/Cart'
import { Cardapio } from '../../pages/Home'

export type Props = {
  titulo?: string
  descricao?: string
  img?: string
  fundo: boolean
  Categories?: (string | boolean)[]
  TextoBotao: 'Saiba mais' | 'Adicionar ao carrinho'
  tipo?: string
  id?: number
  typeButton?: 'link' | 'button'
  star?: string
  preco?: number
  porcao?: string
}

const Card = ({
  titulo,
  descricao,
  img,
  fundo = true,
  TextoBotao,
  Categories,
  tipo,
  id,
  typeButton,
  star,
  preco,
  porcao
}: Props) => {
  const dispatch = useDispatch()

  const handleAddToCart = () => {
    const selectedItem: Cardapio = {
      foto: img || '',
      preco: preco || 0,
      id: id || 0,
      nome: titulo || '',
      descricao: descricao || '',
      porcao: porcao || ''
    }
    dispatch(openModal(selectedItem))
  }

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
        <S.Imagem src={img || ''} alt={titulo || ''} fundo={fundo} />
        <S.Content>
          <div>
            <S.Title fundo={fundo}>{titulo}</S.Title>
            {fundo && (
              <S.Popularidade>
                <h3>{star}</h3>
                <img src={Star} alt="Avaliar" />
              </S.Popularidade>
            )}
          </div>
          <S.Description fundo={fundo}>{descricao}</S.Description>
        </S.Content>
        {typeButton === 'button' ? (
          <Button
            onClick={handleAddToCart}
            type="button"
            title="Adicionar ao carrinho"
          >
            {TextoBotao}
          </Button>
        ) : (
          <Button to={`/Produtos/${id}`} type="link" title="Saiba mais">
            {TextoBotao}
          </Button>
        )}
      </S.Card>
    </>
  )
}

export default Card
