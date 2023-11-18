import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  title: string
  buttontype: 'primary' | 'secondary'
} & ButtonTypes

const Button = ({ title, buttontype }: ButtonProps) => (
  <S.Button buttontype={buttontype}>{title}</S.Button>
)

export default Button
