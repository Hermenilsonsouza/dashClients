'use client'
import React from 'react'
import Header from '@/components/Header'
import * as S from './style'
import user from '../../public/img/user.svg'
import Image from 'next/image'

export type TemplateProps = {
  children: React.ReactNode
}

export default function Templates({ children }: TemplateProps) {
  return (
    <div>
      <Header title="Lista de Clientes" />
      <S.Content>
        <S.Title>
          <S.Header>
            <Image src={user} width={38} height={33} alt="User" />
            Painel de clientes
          </S.Header>

          <S.Divider />
        </S.Title>
        {children}
      </S.Content>
    </div>
  )
}
