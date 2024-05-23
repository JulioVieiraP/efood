import ProductCard from '../../components/ProductCard'
import Efoods from '../../model/Efood'
import img1 from '../../assets/images/Restaurante1.png'
import img2 from '../../assets/images/Restaurante2.png'
import Header from '../../components/Header'

const Home = () => {
  const ListaRestaurant: Efoods[] = [
    {
      id: 1,
      title: 'Hioki Sushi',
      description:
        'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
      infos: ['Destaque da semana', 'Japonesa'],
      nota: '4.9',
      image: img1
    },
    {
      id: 2,
      title: 'La Dolce Vita Trattoria',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      infos: ['Italiana'],
      nota: '4.6',
      image: img2
    },
    {
      id: 3,
      title: 'La Dolce Vita Trattoria',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      infos: ['Italiana'],
      nota: '4.6',
      image: img2
    },
    {
      id: 4,
      title: 'La Dolce Vita Trattoria',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      infos: ['Italiana'],
      nota: '4.6',
      image: img2
    },
    {
      id: 5,
      title: 'La Dolce Vita Trattoria',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      infos: ['Italiana'],
      nota: '4.6',
      image: img2
    },
    {
      id: 6,
      title: 'La Dolce Vita Trattoria',
      description:
        'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
      infos: ['Italiana'],
      nota: '4.6',
      image: img2
    }
  ]

  return (
    <>
      <Header Home={true} />
      <ProductCard Efoods={ListaRestaurant} />
    </>
  )
}

export default Home
