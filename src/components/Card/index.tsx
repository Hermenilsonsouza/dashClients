import Button from '../Button'
import * as S from './styles'

type CardProps = {
  name: string
  email: string
  cpf: string
  phone: string
}

const Card = ({ name, email, cpf, phone }: CardProps) => (
  <S.Wrapper>
    <S.Container>
      <S.Title>{name}</S.Title>
      <S.SubTitle>{email}</S.SubTitle>
    </S.Container>

    <S.Container>
      <S.Title>{cpf}</S.Title>
      <S.SubTitle>{phone}</S.SubTitle>
    </S.Container>
    <S.Container>
      <Button title="Editar" buttontype="secondary" />
    </S.Container>
  </S.Wrapper>
)

export default Card
