import styled, { css } from 'styled-components'
import { StatusProps } from '.'

export const Wrapper = styled.main`
  padding: 16px;
  display: flex;
  gap: 8px;
  align-items: center;
`

export const Title = styled.div`
  font-size: 18px;
  color: #333;
`

const WrapperModifies = {

  Ativo: () => css`
    background-color: green;
  `,

  Inativo: () => css`
  background-color: red;
  `,

  Desativado: () => css`
  background-color: gray;
  `,

'Aguardando ativação': () => css`
  background-color: #EEAD2D;
  `,
}

export const StatusBall = styled.div<StatusProps>`
  width: 16px;
  height: 16px;
  border-radius: 8px;

  ${({status}) => css`

    ${!!status && WrapperModifies[status]}

  `}
`

