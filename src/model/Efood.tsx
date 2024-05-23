class Efoods {
  title: string
  description: string
  infos: string[]
  nota: string
  image: string
  id: number

  constructor(
    title: string,
    description: string,
    infos: string[],
    nota: string,
    image: string,
    id: number
  ) {
    this.id = id
    this.title = title
    this.description = description
    this.nota = nota
    this.infos = infos
    this.image = image
  }
}
export default Efoods
