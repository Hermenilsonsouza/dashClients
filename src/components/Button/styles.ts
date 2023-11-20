import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

const WrapperModifies = {
  primary: () => css`
    background-color: #E07b28;
    color: #FFF;
    &:hover {
      background-color: #FFF;
      border: 1px solid #E07b28;
      color: #E07b28;
    }
  `,

  secondary: () => css`
    background-color: #FFF;
    border: 1px solid #E07b28;
    color: #E07b28;

    &:hover {
      background-color: #E07b28;
      color: #FFF;
    }
  `
}

type ButtonStyleProps = Pick<ButtonProps, 'buttontype' >

export const Button = styled.button<ButtonStyleProps>`

  ${({buttontype}) => css`
    font-size: 16px;
    padding: 8px 16px;
    border-radius: 4px;
    box-shadow: none;
    border: 0;
    cursor: pointer;

    ${!!buttontype && WrapperModifies[buttontype]}
  `}


`
