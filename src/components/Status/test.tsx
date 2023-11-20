import { render, screen } from '@testing-library/react'

import Status from '.'

describe('<Status />', () => {
  it('should render the Status', () => {
    const { container } = render(<Status status="Aguardando ativação" />)

    expect(screen.getByText(/Aguardando ativação/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
