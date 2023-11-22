import Card from '@/components/Card'
import * as S from './styles'
import Button from '@/components/Button'

export default function HomeScreen() {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Container>
          <S.Title>Listagem de usuários</S.Title>
          <S.Subtitle>
            Escolha um cliente para visualizar os detalhes.
          </S.Subtitle>
        </S.Container>
        <Button buttontype="primary" title="Novo cliente" />
      </S.Content>

      <Card
        name="hermenilson"
        email="hermenilson.souza@gmail.com"
        cpf="046.172.563-00"
        phone="(98) 98746-4662"
        status="Aguardando ativação"
      />
    </S.Wrapper>
  )
}
