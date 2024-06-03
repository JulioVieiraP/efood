import { BeatLoader } from 'react-spinners'
import * as S from './styles'
import cores from '../../styles/Cores'

const Loading = () => {
  return (
    <S.ContainerLoading>
      <BeatLoader color={cores.RosaAvermelhado} />
    </S.ContainerLoading>
  )
}

export default Loading
