import { BeatLoader } from 'react-spinners'
import * as S from './styles'

const Loading = () => {
  return (
    <S.ContainerLoading>
      <BeatLoader color="#36d7b7" />
    </S.ContainerLoading>
  )
}

export default Loading
