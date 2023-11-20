import { render, screen } from '@testing-library/react'

import Header from '.'

describe('<Header />', () => {
  it('should render the heading', () => {
    const { container } = render(<Header title="Lista de Clientes" />)

    expect(
      screen.getByRole('heading', { name: /Lista de Clientes/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
