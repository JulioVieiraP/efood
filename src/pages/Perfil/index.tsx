import ProductCard from '../../components/ProductCard'
import Efoods from '../../model/Efood'
import ImgPizza from '../../assets/images/Pizza.png'
import Header from '../../components/Header'

const Perfil = () => {
  const ListeRestaurantes: Efoods[] = [
    {
      id: 1,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    },
    {
      id: 2,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    },
    {
      id: 3,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    },
    {
      id: 4,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    },
    {
      id: 5,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    },
    {
      id: 6,
      title: 'Pizza Marguerita',
      description:
        'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: ImgPizza
    }
  ]

  return (
    <>
      <Header Home={false} />
      <ProductCard Efoods={ListeRestaurantes} Card2={true} />
    </>
  )
}

export default Perfil
