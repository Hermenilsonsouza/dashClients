import * as S from './styles'

export type StatusProps = {
  status: 'Ativo' | 'Inativo' | 'Aguardando ativação' | 'Desativado'
}

const Status = ({ status }: StatusProps) => (
  <S.Wrapper>
    <S.StatusBall status={status} />
    <S.Title>{status}</S.Title>
  </S.Wrapper>
)

export default Status
