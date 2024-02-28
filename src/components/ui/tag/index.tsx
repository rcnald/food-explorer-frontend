import * as Styled from './styles'

interface TagProps {
  children: React.ReactNode
}

export function Tag({ children }: TagProps) {
  return <Styled.Tag>{children}</Styled.Tag>
}
