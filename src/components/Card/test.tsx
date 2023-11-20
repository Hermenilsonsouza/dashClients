import { render, screen } from '@testing-library/react'

import Card from '.'

describe('<Card />', () => {
  it('should render the Card', () => {
    render(
      <Card
        name="hermenilson"
        email="hermenilson.souza@gmail.com"
        cpf="046.172.563-00"
        phone="(98) 98746-4662"
      />
    )

    expect(screen.getByText('hermenilson')).toBeInTheDocument()
    expect(screen.getByText('hermenilson.souza@gmail.com')).toBeInTheDocument()
    expect(screen.getByText('046.172.563-00')).toBeInTheDocument()
    expect(screen.getByText('(98) 98746-4662')).toBeInTheDocument()
  })
})
