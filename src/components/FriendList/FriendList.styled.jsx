import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[3]}px;
`;
