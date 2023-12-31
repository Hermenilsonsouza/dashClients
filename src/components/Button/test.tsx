import { render, screen } from '@testing-library/react'

import Button from '.'

describe('<Button />', () => {
  it('should render the heading', () => {
    const { container } = render(<Button title="editar" buttontype="primary" />)

    expect(screen.getByText('editar')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  }),
    it('should render button with spercif title', () => {
      render(<Button title="editar" buttontype="primary" />)
      expect(
        screen.getByRole('button', { name: /editar/i })
      ).toBeInTheDocument()
    }),
    it('should render with white background', () => {
      render(<Button title="editar" buttontype="secondary" />)

      expect(screen.getByRole('button', { name: /editar/i })).toHaveStyle({
        'background-color': 'rgb(224, 123, 40)',
        color: 'rgb(255, 255, 255)'
      })
    }),
    it('should render with orange background', () => {
      render(<Button title="editar" buttontype="primary" />)

      expect(screen.getByRole('button', { name: /editar/i })).toHaveStyle({
        'background-color': 'rgb(255, 255, 255)',
        color: 'rgb(224, 123, 40)'
      })
    })
})
