import styled from 'styled-components';

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.whiteBackground};
  min-width: 254px;
  padding: 10px 20px;
  column-gap: ${props => props.theme.space[4]}px;
  box-shadow: ${props => props.theme.shadows.shadow};
  border-radius: ${props => props.theme.radii.normal};

  @media (min-width: 768px) {
    min-width: 320px;
  }
`;
export const FriendIsOnline = styled.span`
  width: 20px;
  height: 20px;
  border-radius: ${props => props.theme.radii.round};
  background-color: ${props => props.status ? 'green' : 'red'};
`;
export const FriendAvatar = styled.img``;
export const FriendName = styled.p`
  color: ${props => props.theme.colors.primaryText};
  font-weight: ${props => props.theme.fontWeights.semiBold};
`;

