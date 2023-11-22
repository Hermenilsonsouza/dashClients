import { PropsWithChildren } from 'react'

import GlobalStyles from '@/styles/global'
import Templates from '@/templates/templates'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      <Templates>{children}</Templates>
    </>
  )
}
