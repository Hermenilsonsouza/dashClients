import Card from '@/components/Card'
import * as S from './styles'
import Button from '@/components/Button'
import HomeViewModel from './view.model'

export default function HomeScreen() {
  const { ListCuston, count } = HomeViewModel()
  return (
    <S.Wrapper>
      <S.Content>
        <S.TextContainer>
          <S.Title>Listagem de usuários</S.Title>
          <S.Subtitle>
            Escolha um cliente para visualizar os detalhes.
          </S.Subtitle>
        </S.TextContainer>
        <Button buttontype="primary" title="Novo cliente" />
      </S.Content>

      <S.Container>
        {ListCuston.map((custon, index) => {
          return (
            <Card
              key={index}
              name={custon.name}
              email={custon.email}
              cpf={custon.cpf}
              phone={custon.phone}
              status={custon.status}
            />
          )
        })}
      </S.Container>
      <S.Subtitle>Exibindo {count} clientes</S.Subtitle>
    </S.Wrapper>
  )
}
