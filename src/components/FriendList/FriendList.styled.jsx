import styled from 'styled-components';

export const FriendListEl = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: ${props => props.theme.space[4]}px;
`;
