import { CustonProps } from '@/common/models/custonModel'

const ListCustonMock: CustonProps[] = [
  {
    name: 'Hermenilson',
    cpf: '046.172.563-00',
    email: 'hermenilson.souza@gmail.com',
    phone: '(98) 98746-4662',
    status: 'Ativo'
  }
]

const HomeViewModel = () => {
  const count = ListCustonMock.length
  const ListCuston = ListCustonMock
  return {
    count,
    ListCuston
  }
}

export default HomeViewModel
